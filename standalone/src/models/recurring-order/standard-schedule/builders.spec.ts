import { StandardScheduleGraphql } from './index';

describe('StandardSchedule Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = StandardScheduleGraphql.random().buildGraphql();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        type: 'Standard',
        value: expect.any(Number),
        intervalUnit: expect.any(String),
        __typename: 'StandardSchedule',
      })
    );
  });
});
