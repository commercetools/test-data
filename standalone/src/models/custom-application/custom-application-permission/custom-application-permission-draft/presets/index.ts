import * as ManageOnlyPermissionsDraft from './manage-only-permissions-draft';
import * as ViewOnlyPermissionsDraft from './view-only-permissions-draft';

export const graphqlPresets = {
  ManageOnlyPermissions: ManageOnlyPermissionsDraft.graphqlPreset,
  ViewOnlyPermissions: ViewOnlyPermissionsDraft.graphqlPreset,
};
