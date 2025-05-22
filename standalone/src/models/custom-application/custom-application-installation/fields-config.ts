import { fake, type TModelFieldsConfig } from '@/core';
import { createRelatedDates } from '@/utils';
import { CustomApplicationGraphql } from '../custom-application';
import { CustomApplicationInstallationPermissionGraphql } from '../custom-application-installation-permission';
import type { TCustomApplicationInstallationGraphql } from './types';
const [getOlderDate, getNewerDate] = createRelatedDates();

export const graphqlFieldsConfig: TModelFieldsConfig<TCustomApplicationInstallationGraphql> =
  {
    fields: {
      __typename: fake(
        () => 'RestrictedCustomApplicationInstallationForOrganization'
      ),
      acceptedPermissions: fake(() => [
        CustomApplicationInstallationPermissionGraphql.presets.ViewOnlyPermissions(),
        CustomApplicationInstallationPermissionGraphql.presets.ManageOnlyPermissions(),
      ]),
      application: fake(() => CustomApplicationGraphql.random()),
      createdAt: fake(getOlderDate),
      id: fake((f) => f.string.uuid()),
      installInAllProjects: fake((f) => f.datatype.boolean()),
      projects: fake(() => []), //TODO: add ProjectExtension
      updatedAt: fake(getNewerDate),
    },
  };
