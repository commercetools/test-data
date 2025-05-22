import { TCustomApplicationPermissionDraftGraphql } from '../types';
import { graphqlPresets } from './index';

describe('view only permissions', () => {
  it('should build important properties', () => {
    const built = graphqlPresets
      .ViewOnlyPermissions()
      .buildGraphql<TCustomApplicationPermissionDraftGraphql>();
    expect(built).toEqual(
      expect.objectContaining({
        name: 'viewAvengers',
        oAuthScopes: expect.arrayContaining([expect.any(String)]),
      })
    );
  });
});
describe('with manage only permissions', () => {
  it('should build important properties', () => {
    const built = graphqlPresets
      .ManageOnlyPermissions()
      .buildGraphql<TCustomApplicationPermissionDraftGraphql>();

    expect(built).toEqual(
      expect.objectContaining({
        name: 'manageAvengers',
        oAuthScopes: expect.arrayContaining([expect.any(String)]),
      })
    );
  });
});
