import React, { useEffect, useContext } from 'react';
import { BaseContext } from './baseContext';

function ContextChild1() {
  const context = useContext(BaseContext);
  useEffect(() => {
    console.log('api called');
    async function getUsers() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const userData = await response.json();
      context.setData(userData);
      // console.log(userData);
    }
    getUsers();
  }, []);

  return (
    <>
      <h3 style={{ display: 'inline-block', marginRight: '30px' }}>
        Context Child 1
      </h3>
      <span>Child1 Heading: {context.commonHead}</span>
    </>
  );
}

export default React.memo(ContextChild1);
