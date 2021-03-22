import React from 'react';
import AuthContext from '../../contexts/Auth';

const whithAuthContext = WrappedComponent => {
  return function WithAuthContext(props) {
    return (
      <AuthContext.Consumer>
        {ctx => <WrappedComponent {...props} auth={ctx} />}
      </AuthContext.Consumer>
    );
  };
};

export default whithAuthContext;
