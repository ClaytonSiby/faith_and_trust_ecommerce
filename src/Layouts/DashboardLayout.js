/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutUserStart } from '../redux/User/user.actions';
import Header from '../components/Header';
import VerticalNav from '../components/VerticalNav';
import Footer from '../components/Footer';

const DashboardLayout = (props) => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <div className="dashboardLayout">
      <Header {...props} />
      <div className="controlPanel">
        <div className="sidebar">
          <VerticalNav>
            <ul>
              <li>
                <Link to="/dashboard">Home</Link>
              </li>
              <li>
                <span className="signOut" onClick={() => signOut()}>
                  Sign Out
                </span>
              </li>
            </ul>
          </VerticalNav>
        </div>
        <div className="content">
          { props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
