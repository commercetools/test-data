import type { TCustomApplicationPermissionGraphql } from '../types';
import { graphqlPresets } from './index';

describe('view only permissions', () => {
  it('should build important properties', () => {
    const built = graphqlPresets.viewOnly().buildGraphql();
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
    const built = graphqlPresets.manageOnly().buildGraphql();

    expect(built).toEqual(
      expect.objectContaining({
        name: 'manageAvengers',
        oAuthScopes: expect.arrayContaining([expect.any(String)]),
      })
    );
  });
});
