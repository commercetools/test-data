import { ViewOnlyPermissions, ManageOnlyPermissions } from '.';

describe('view only permissions', () => {
  it('should build important properties', () => {
    const built = ViewOnlyPermissions().buildGraphql();
    expect(built).toEqual(
      expect.objectContaining({
        name: 'view',
        oAuthScopes: expect.arrayContaining([expect.any(String)]),
      })
    );
  });
});
describe('with manage only permissions', () => {
  it('should build important properties', () => {
    const built = ManageOnlyPermissions().buildGraphql();

    expect(built).toEqual(
      expect.objectContaining({
        name: 'manage',
        oAuthScopes: expect.arrayContaining([expect.any(String)]),
      })
    );
  });
});
