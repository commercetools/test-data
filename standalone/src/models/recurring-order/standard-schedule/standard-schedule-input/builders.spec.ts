import { StandardScheduleInputGraphql } from './index';

describe('StandardScheduleInput Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = StandardScheduleInputGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        value: expect.any(Number),
        intervalUnit: expect.any(String),
      })
    );
  });
});
