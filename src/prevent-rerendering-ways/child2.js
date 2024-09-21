import React from 'react';

function Child2(props) {
  console.log('CHILD2 executed...');
  return (
    <h1>
      I am{' '}
      <i style={{ color: 'blue' }}>
        {props.child2Prop1} {props.child2Prop2} {props.costly}
      </i>
    </h1>
  );
}

export default React.memo(Child2);
