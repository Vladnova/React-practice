import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../../redux/counter/counter-actions';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

const Counter = ({ step, value, onIncrement, onDecrement }) => {
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
  onIncrement: value => dispatch(counterActions.increment(value)),
  onDecrement: value => dispatch(counterActions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
