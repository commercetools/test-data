import type { Faker } from '@faker-js/faker';

type TGetDate = (fake: Faker) => string;
/**
 * Returns three ISO dates of different timestamps.
 *
 * Usage:
 *
 * ```js
 * const [getOlderDate, getNewerDate] = createRelatedDates();
 * const generator = Generator({
 *  fields: {
 *    createdAt: fake(getOlderDate),
 *    lastModifiedAt: fake(getNewerDate),
 *  },
 * });
 * ```
 */
const createRelatedDates = (
  recentDaysFromPastReference: number = 10
): [olderDate: TGetDate, newerDate: TGetDate, futureDate: TGetDate] => {
  const pastReference = new Date();
  const getOlderDate = (f: Faker) =>
    f.date
      .recent(recentDaysFromPastReference, pastReference.toISOString())
      .toISOString();

  const getNewerDate = (f: Faker) =>
    f.date
      .between(new Date(pastReference).toISOString(), new Date().toISOString())
      .toISOString();
  const getFutureDate = (f: Faker) => f.date.future().toISOString();
  return [getOlderDate, getNewerDate, getFutureDate];
};

export default createRelatedDates;
