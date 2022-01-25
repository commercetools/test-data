import type { Faker } from '@faker-js/faker';

/**
 * Create two related dates (one comes before the other) by using a reference
 * in the past. The reference will be the result of invoking `Date.now()` when this
 * function is invoked.
 *
 * ```
 * ------------------------pastReference----------------------------now
 * <---------------------->             <-------------------------->
 * createdAt                             lastModifiedAt
 * ```
 *
 * Usage:
 *
 * ```js
 * const [getOlderDate, getNewerDate] = createRelatedDates();
 * const generator = Generator({
 *  name: 'ProductType',
 *  fields: {
 *    createdAt: fake(getOlderDate),
 *    lastModifiedAt: fake(getNewerDate),
 *  },
 * });
 * ```
 *
 * @param {Number} [recentDaysFromPastReference=10] - the older date will be in
 * some time from the reference to recentDaysFromPastReference days ago.
 * @returns {Array} callbacks
 * {Function} callbacks[0] - the function that will retrieve the older date,
 * it's expecting to be invoked with faker as parameter
 * {Function} callbacks[1] - the function that will retrieve the newer date,
 * it's expecting to be invoked with faker as parameter
 */
const createRelatedDates = (recentDaysFromPastReference: number = 10) => {
  const pastReference = new Date();
  const getOlderDate = (f: Faker) =>
    f.date.recent(recentDaysFromPastReference, pastReference.toISOString());

  const getNewerDate = (f: Faker) =>
    f.date.between(
      new Date(pastReference).toISOString(),
      new Date().toISOString()
    );
  const getFutureDate = (f: Faker) => f.date.future();
  return [getOlderDate, getNewerDate, getFutureDate];
};

export default createRelatedDates;
