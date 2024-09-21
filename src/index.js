import React, { StrictMode } from 'react';
import {
  useState,
  useContext,
  createContext,
  useCallback,
  useMemo,
} from 'react';
import customInputHook from './custom-input-hook/customInputHook';
import ComplexCountDownTimer from './complex-count-down-timer/complexCountDownTimer';
import { render } from 'react-dom';
import Child1 from './prevent-rerendering-ways/child1';
import Child2 from './prevent-rerendering-ways/child2';
import ContextChild1 from './react-context/contextChild1'
import ContextChild2 from './react-context/contextChild2';
import BaseContextProvider from './react-context/baseContext';
import { BaseContext } from './react-context/baseContext';
import ReducerExample from './reducer-hook/reducerExample';
import { Provider } from 'react-redux';
import Counter from './class-based-redux-from-scratch/counter';
import { store } from './class-based-redux-from-scratch/store';
import CountDownTimerSimple from './simple-count-down-timer/simpleCountDownTimer';
import DropDownProblem from "./drop-down-problem/dropDownProblem";
import SlowRenderingComponent from './slow-rendering-component/slowRenderingComponent';
import ParentOfUseImperativeHandle from './use-imperative-handle/parent';
import DancingLights from './dancing-lights/dancingLights';
import { toolkitStore } from './reduxjs-toolkit/state/store';
import CounterAppReduxToolkit from './reduxjs-toolkit/counterApp';
// Example of useState Hook.
// const NormalInputFormWithReactHook = () => {
//   const context = useContext(BaseContext);
//   const [firstName, setFirstName] = useState('First Name');
//   const [lastName, setLastName] = useState('Last Name');

//   const firstNameChangeHandler = (e) => {
//     const firstName = e.target.value;
//     setFirstNamecontext(firstName);
//   };

//   const lastNameChangeHandler = (e) => {
//     const lastName = e.target.value;
//     setLastName(lastName);
//   };

//   const submitFormHandler = (e) => {
//     e.preventDefault();
//     alert(`${context.base} ${firstName} ${lastName}!!!`);
//   };

//   return (
//     <form onSubmit={submitFormHandler}>
//       <label>
//         First Name
//         <input
//           type="text"
//           value={firstName}
//           onChange={firstNameChangeHandler}
//         />
//       </label>
//       <label style={{ display: 'block' }}>
//         Last Name
//         <input type="text" value={lastName} onChange={lastNameChangeHandler} />
//       </label>
//       <button>Submit</button>
//     </form>
//   );
// };

// Example of custom Hook.
// const CustomInputFormWithReactHook = () => {
//   const context = useContext(BaseContext);
//   const [firstName, bindFirstName, resetFirstName] =
//     customInputHook('First Name');
//   const [lastName, bindLastName, resetLastName] = customInputHook('Last Name');

//   const submitFormHandler = (e) => {
//     e.preventDefault();
//     alert(`${context.base} ${firstName} ${lastName}!!!`);
//     resetFirstName();
//     resetLastName();
//   };

//   return (
//     <form onSubmit={submitFormHandler}>
//       <label>
//         First Name
//         <input type="text" {...bindFirstName} />
//       </label>
//       <label style={{ display: 'block' }}>
//         Last Name
//         <input type="text" {...bindLastName} />
//       </label>
//       <button>Submit</button>
//     </form>
//   );
// };

/* Uncomment this code to see a complex countdown timer
const App = () => {
  return (
    <BaseContextProvider>
      <CountDownTimer />
    </BaseContext.Provider>
  );
*/

/* Uncomment this part to see the re-rendering and use of useMemo, useCallback React.memo
const App2 = () => {
  console.log('APP2 executed...');
  const [firstNameChild1, setFirstNameChild1] = useState('');
  const [lastNameChild1, setLastNameChild1] = useState('');

  const [firstNameChild2, setFirstNameChild2] = useState('');
  const [lastNameChild2, setLastNameChild2] = useState('');

  const [val, updateVal] = useState(0);

  const updateChild1 = (val1, val2) => {
    setFirstNameChild1(val1);
    setLastNameChild1(val2);
  };

  const updateChild2 = (val1, val2) => {
    setFirstNameChild2(val1);
    setLastNameChild2(val2);
  };

  const costlyFunction = (val) => {
    let sum = 0;
    for(let i = 0; i < 10000000; i++) {
      sum += i + val + 40;
    }
    return sum;
  }

  // const costlyCallback = useCallback(() => costlyFunction, [val])
  const costlyCallback = useMemo(() => costlyFunction(val), [val]) 

  const updateValue = () => {
    updateVal(30);
  }

  return (
    <>
      <Child1 child1Prop1={firstNameChild1} child1Prop2={lastNameChild1}/>
      <Child2 child2Prop1={firstNameChild2} child2Prop2={lastNameChild2} costly={costlyCallback}/>
      <button
        onClick={() => updateChild1('ChildOneFirstName', 'ChildOneLastName')}
      >
        Update Child1
      </button>
      <button
        onClick={() => updateChild2('ChildTwoFirstName', 'ChildTwoLastName')}
      >
        Update Child2
      </button>
      <button onClick={updateValue}>Update Val</button>
    </>
  );
};
*/

// Uncomment below to see useContext example
// const App3 = () => {
//   return (
//     <BaseContextProvider>
//       <ContextChild1 />
//       <ContextChild2 />
//     </BaseContextProvider>
//   );
// }

// Uncomment below to see the useReducer example
// const App4 = () => {
//   return <ReducerExample />;
// };

// Uncomment below to see a redux based state implementation
// const App5 = () => {
//   return (
//     <Provider store={store}>
//       <StrictMode>
//         <Counter />
//       </StrictMode>
//     </Provider>
//   );
// };

// Uncomment below to see a simple counter implementation
// const App6 = () => {
//   return (
//     <StrictMode>
//       <CountDownTimerSimple />
//     </StrictMode>
//   );
// };

// Uncomment below to see intermediate react dropdown problem
// const App7 = () => {
//   return (
//     <StrictMode>
//       <DropDownProblem />
//     </StrictMode>
//   )
// }

// Uncomment below see slow rendering component
// const App8 = () => {
//   return (
//     <StrictMode>
//       <SlowRenderingComponent />
//     </StrictMode>
//   )
// }

// Uncomment below see useImperativeHandle hook
// const App9 = () => {
//   return (
//     <StrictMode>
//       <ParentOfUseImperativeHandle />
//     </StrictMode>
//   )
// }

// Uncomment below see dancing lights
// const App10 = () => {
//   return (
//     <StrictMode>
//       <DancingLights />
//     </StrictMode>
//   )
// }

// Uncomment below see redux toolkit and redux in action
const App11 = () => {
  return (
    <Provider store={toolkitStore}>
      <StrictMode>
        <CounterAppReduxToolkit />
      </StrictMode>
    </Provider>
  )
}


render(<App11 />, document.getElementById('root'));
