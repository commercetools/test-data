import { CounterGraphql, CounterRest } from './index';

describe('counter Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = CounterRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        type: 'counter',
        totalToSkip: expect.any(Number),
        skipped: expect.any(Number),
        lastSkippedAt: null,
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = CounterGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        type: 'counter',
        totalToSkip: expect.any(Number),
        skipped: expect.any(Number),
        lastSkippedAt: null,
        __typename: 'Counter',
      })
    );
  });
});
