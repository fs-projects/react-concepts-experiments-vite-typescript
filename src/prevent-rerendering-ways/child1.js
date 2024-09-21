import React from 'react';

function Child1(props) {
  console.log('CHILD1 executed...');
  return (
    <h1>
      I am{' '}
      <i style={{color: "green"}}>
        {props.child1Prop1} {props.child1Prop2}
      </i>
    </h1>
  );
}

export default React.memo(Child1);
