import React from 'react';
// import { compose } from 'recompose';
// import withHigherOrderComponent from './hoc/withHigherOrderComponent';
// import withLog from './hoc/withLog';
// import withToggle from './hoc/withToggle';

const MyComponent = props => <p>{JSON.stringify(props, null, 2)}</p>;

// export default withHigherOrderComponent(withLog(withToggle(MyComponent)));

// export default compose(
//   withHigherOrderComponent,
//   withLog,
//   withToggle,
// )(MyComponent);
export default MyComponent;
