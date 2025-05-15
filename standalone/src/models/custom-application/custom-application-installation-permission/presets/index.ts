import * as ManageOnlyPermissions from './manage-only-permissions';
import * as ViewOnlyPermissions from './view-only-permissions';

export const graphqlPresets = {
  ManageOnlyPermissions: ManageOnlyPermissions.graphqlPreset,
  ViewOnlyPermissions: ViewOnlyPermissions.graphqlPreset,
};
