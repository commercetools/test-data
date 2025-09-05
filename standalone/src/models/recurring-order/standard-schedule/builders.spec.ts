import { StandardScheduleGraphql, StandardScheduleRest } from './index';

describe('StandardSchedule Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = StandardScheduleRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        type: 'standard',
        value: expect.any(Number),
        intervalUnit: expect.any(String),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = StandardScheduleGraphql.random().buildGraphql();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        type: 'standard',
        value: expect.any(Number),
        intervalUnit: expect.any(String),
        __typename: 'StandardSchedule',
      })
    );
  });
});
