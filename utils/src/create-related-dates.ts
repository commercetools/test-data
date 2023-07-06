import type { Faker } from '@faker-js/faker';

type TGetDate = (fake: Faker) => string;

const createRelatedDates = (
  recentDaysFromPastReference: number = 10
): [olderDate: TGetDate, newerDate: TGetDate, futureDate: TGetDate] => {
  const pastReference = new Date();

  const getOlderDate = (f: Faker) => {
    const refDate = new Date().toISOString();
    return f.date
      .recent({ days: recentDaysFromPastReference, refDate })
      .toISOString();
  };

  const getNewerDate = (f: Faker) => {
    const from = new Date(pastReference).toISOString();
    const to = new Date().toISOString();
    return f.date.between({ from, to }).toISOString();
  };

  const getFutureDate = (f: Faker) => f.date.future().toISOString();

  return [getOlderDate, getNewerDate, getFutureDate];
};

export default createRelatedDates;
