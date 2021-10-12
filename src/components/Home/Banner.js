import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
        {/*  {appName.toLowerCase()}*/}
        PARANAN
        </h1>
        <p>Welcome to our website.</p>
      </div>
    </div>
  );
};

export default Banner;
