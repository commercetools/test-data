import { CounterDraftGraphql } from './index';

describe('counterDraft Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = CounterDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        totalToSkip: expect.any(Number),
      })
    );
  });
});
