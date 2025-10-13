import { DayOfMonthScheduleRest, DayOfMonthScheduleGraphql } from './index';

describe('DayOfMonthSchedule Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = DayOfMonthScheduleRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        day: expect.any(Number),
        type: 'dayOfMonth',
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = DayOfMonthScheduleGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        day: expect.any(Number),
        type: 'dayOfMonth',
        __typename: 'DayOfMonthSchedule',
      })
    );
  });
});
