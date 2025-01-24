
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/actions/authActions';
import '../style/styles.css';

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <h1 className="title">Todo App</h1>
      <button className="auth-btn" onClick={isAuthenticated ? handleLogout : handleLogin}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </header>
  );
};

export default Header;