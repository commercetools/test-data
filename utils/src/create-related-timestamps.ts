import type { Faker } from '@faker-js/faker';

type TGetTimestamp = (fake: Faker) => number;

export const createRelatedTimestamps = (
  recentDaysFromPastReference: number = 10
): [
  olderTimestamp: TGetTimestamp,
  newerTimestamp: TGetTimestamp,
  futureTimestamp: TGetTimestamp,
] => {
  const pastReference = new Date();

  const getOlderTimestamp = (f: Faker) => {
    const refDate = new Date();
    return f.date
      .recent({ days: recentDaysFromPastReference, refDate })
      .getTime();
  };

  const getNewerTimestamp = (f: Faker) => {
    const from = new Date(pastReference);
    const to = new Date();
    return f.date.between({ from, to }).getTime();
  };

  const getFutureTimestamp = (f: Faker) => f.date.future().getTime();

  return [getOlderTimestamp, getNewerTimestamp, getFutureTimestamp];
};
