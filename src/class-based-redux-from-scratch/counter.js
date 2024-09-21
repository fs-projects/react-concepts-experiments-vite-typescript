import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './action';

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch(increment());
  },
  decrement: () => {
    dispatch(decrement());
  },
});

const mapStateToProps = (state) => {
  return {
    count: state.reducers,
  };
};

class Counter extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <center>
        <h1>{this.props.count}</h1>
        <button
          onClick={() => this.props.increment()}
          style={{ marginRight: '10px' }}
        >
          increment
        </button>
        <button onClick={() => this.props.decrement()}>decrement</button>
      </center>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
