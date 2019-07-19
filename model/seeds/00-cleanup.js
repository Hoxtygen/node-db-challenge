/* eslint-disable func-names */
const cleaner = require('knex-cleaner');

exports.seed = function (knex) {
  return cleaner.clean(knex);
};
