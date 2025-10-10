import { DayOfMonthScheduleInput } from './index';

describe('DayOfMonthScheduleInput Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = DayOfMonthScheduleInput.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        day: expect.any(Number),
      })
    );
  });
});
