import type { TCustomApplicationPermissionDraftGraphql } from '../types';
import { CustomApplicationPermissionDraftGraphql } from './index';
describe('builder', () => {
  it('GraphQL model', () => {
    const graphqlModel =
      CustomApplicationPermissionDraftGraphql.random().buildGraphql<TCustomApplicationPermissionDraftGraphql>();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        oAuthScopes: expect.arrayContaining([expect.any(String)]),
      })
    );
  });
});
