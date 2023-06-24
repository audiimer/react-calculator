import React from 'react';
import { ACTIONS } from './App';

function OperationButton({ dispatch, operation, disabled }) {
  const isDividedByZeroError = disabled === 'Cannot divide by zero';

  const handleClick = () => {
    if (!isDividedByZeroError) {
      dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } });
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isDividedByZeroError}
    >
      {operation}
    </button>
  );
}

export default OperationButton;
