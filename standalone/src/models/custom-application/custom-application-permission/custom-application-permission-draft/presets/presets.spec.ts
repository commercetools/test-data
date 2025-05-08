import { ViewOnlyPermissions, ManageOnlyPermissions } from '.';

describe('view only permissions', () => {
  it('should build important properties', () => {
    const built = ViewOnlyPermissions('avengers').buildGraphql();

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
    const built = ManageOnlyPermissions('avengers').buildGraphql();

    expect(built).toEqual(
      expect.objectContaining({
        name: 'manageAvengers',
        oAuthScopes: expect.arrayContaining([expect.any(String)]),
      })
    );
  });
});
