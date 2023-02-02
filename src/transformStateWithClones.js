'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const array = [];
  let newObj = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(newObj, action.extraData);
        array.push({ ...newObj });
        break;

      case 'removeProperties':
        for (const type of action.keysToRemove) {
          if (newObj[type]) {
            delete newObj[type];
          }
        }
        array.push({ ...newObj });
        break;

      case 'clear':
        newObj = {};
        array.push({});
    }
  }

  return array;
}

module.exports = transformStateWithClones;
