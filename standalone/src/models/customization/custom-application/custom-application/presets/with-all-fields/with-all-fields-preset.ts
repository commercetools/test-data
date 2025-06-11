import { CustomApplicationDeploymentPreviewGraphql } from '../../../custom-application-deployment-preview';
import { CustomApplicationMenuLinkGraphql } from '../../../custom-application-menu-link';
import { CustomApplicationPermissionGraphql } from '../../../custom-application-permission';
import { CustomApplicationSubmenuLinkGraphql } from '../../../custom-application-submenu-link';
import { GraphqlModelBuilder } from '../../builders';

const withAllFieldPresets = () =>
  GraphqlModelBuilder()
    .permissions([
      CustomApplicationPermissionGraphql.presets.ViewOnlyPermissions(),
      CustomApplicationPermissionGraphql.presets.ManageOnlyPermissions(),
    ])
    .mainMenuLink(CustomApplicationMenuLinkGraphql.random())
    .submenuLinks([
      CustomApplicationSubmenuLinkGraphql.random(),
      CustomApplicationSubmenuLinkGraphql.random(),
    ])
    .deployments([CustomApplicationDeploymentPreviewGraphql.random()]);

export const graphqlPreset = withAllFieldPresets;
export const compatPreset = withAllFieldPresets;
