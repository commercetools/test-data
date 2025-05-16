import { fake, type TModelFieldsConfig } from '@/core';
import { createRelatedDates } from '@/utils';
import * as CustomApplication from '../custom-application';
import { CustomApplicationInstallationPermissionGraphql } from '../custom-application-installation-permission';
import type { TCustomApplicationInstallationGraphql } from './types';
const [getOlderDate, getNewerDate] = createRelatedDates();

export const graphqlFieldsConfig: TModelFieldsConfig<TCustomApplicationInstallationGraphql> =
  {
    fields: {
      id: fake((f) => f.string.uuid()),
      createdAt: fake(getOlderDate),
      updatedAt: fake(getNewerDate),
      acceptedPermissions: fake(() => [
        CustomApplicationInstallationPermissionGraphql.presets.ViewOnlyPermissions(),
        CustomApplicationInstallationPermissionGraphql.presets.ManageOnlyPermissions(),
      ]),
      projects: fake(() => []), //TODO: add ProjectExtension
      installInAllProjects: fake((f) => f.datatype.boolean()),
      application: fake(() => CustomApplication.random()),
    },
  };
