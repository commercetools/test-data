import * as ManageOnlyPermissionsDraft from './manage-only-permissions-draft';
import * as ViewOnlyPermissionsDraft from './view-only-permissions-draft';

export const graphqlPresets = {
  manageOnly: ManageOnlyPermissionsDraft.graphqlPreset,
  viewOnly: ViewOnlyPermissionsDraft.graphqlPreset,
};
