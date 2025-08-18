import { CounterDraftGraphql, CounterDraftRest } from './index';

describe('counterDraft Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = CounterDraftRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        type: 'counter',
        totalToSkip: expect.any(Number),
      })
    );
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = CounterDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        totalToSkip: expect.any(Number),
      })
    );
  });
});
