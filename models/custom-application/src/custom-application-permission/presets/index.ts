import * as ManageOnlyPermissions from './manage-only-permissions';
import * as ViewOnlyPermissions from './view-only-permissions';

export const graphqlPresets = {
  manageOnly: ManageOnlyPermissions.graphqlPreset,
  viewOnly: ViewOnlyPermissions.graphqlPreset,
};
