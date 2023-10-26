import { Modifier, Roll, RollResult } from './dice roller/classes';
import { displayRollResults, parseRolls, roll, rollDie } from './dice roller/rolls';
import { toastRolls } from './dice roller/toastRolls';
import { getTypeIcons } from './dice roller/typeIcons';

// // Export the functions or modules to make them available to users of your package
module.exports = {
  Modifier,
  Roll,
  RollResult,
  displayRollResults,
  parseRolls,
  roll,
  rollDie,
  toastRolls,
  getTypeIcons,
};