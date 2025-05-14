import { CustomApplicationPermissionDraftGraphql } from './index';
describe('CustomApplicationPermissionDraft', () => {
  it('builds a GraphQL model', () => {
    const graphqlModel =
      CustomApplicationPermissionDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        oAuthScopes: expect.any(Array),
      })
    );
  });
});
