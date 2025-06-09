import { fake, type TModelFieldsConfig } from '@/core';
import { createRelatedDates } from '@/utils';
import type { TOrganizationExtensionGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

export const graphqlFieldsConfig: TModelFieldsConfig<TOrganizationExtensionGraphql> =
  {
    fields: {
      id: fake((f) => f.string.uuid()),
      createdAt: fake(getOlderDate),
      updatedAt: fake(getNewerDate),
      organizationId: fake((f) => f.string.uuid()),
      oidcSsoConfig: null,
      applicationsMaintainerContactInformation: null,
      registeredApplications: [],
      installedApplications: [],
      registeredCustomViews: [],
      installedCustomViews: [],
      __typename: 'OrganizationExtension',
    },
  };
