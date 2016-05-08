import React from 'react';

export const Layout = ({ children }) => (
  <div className='container'>
    <div>
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default Layout;
