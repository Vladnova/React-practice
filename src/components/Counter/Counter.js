import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/counter/counterAction';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

const Counter = ({ value, step, onIncrement, onDecrement }) => {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
