import React, { useState, createContext } from 'react';

export const BaseContext = createContext({
  userData: null,
  setData: function (data) {},
  commonHead: '',
  setCommonHead: function () {},
});

function BaseContextProvider(props) {
  console.log('base context executed');
  const [userData, setUserData] = useState([]);
  const [commonHead, setCommonHead] = useState('Common Heading');

  const setData = (data) => {
    setUserData(data);
  };

  const context = { userData, setData, commonHead, setCommonHead };

  return (
    <BaseContext.Provider value={context}>
      {props.children}
    </BaseContext.Provider>
  );
}

export default BaseContextProvider;
