import React, { useContext } from 'react';
import { BaseContext } from './baseContext';

function ContextChild2() {
  const context = useContext(BaseContext);
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <h3>Context Child 2</h3>
        <span>Child2 Heading: {context.commonHead}</span>
      </div>
      <div>
        <strong>
          <i>Child2 data</i>
        </strong>
      </div>
      <ul>
        {context.userData.map((el) => {
          return (
            <li key={el.id}>
              {el.name} || {el.phone} || {el.email}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default React.memo(ContextChild2);
