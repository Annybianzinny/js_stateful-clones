'use strict';

function transformStateWithClones(state, actions) {
  const history = [];
  let currentState = { ...state };

  for (const action of actions) {
    if (action.type === 'addProperties') {
      currentState = {
        ...currentState,
        ...action.extraData,
      };
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete currentState[key];
      }
    }

    if (action.type === 'clear') {
      currentState = {};
    }

    history.push({ ...currentState });
  }

  return history;
}

module.exports = transformStateWithClones;
