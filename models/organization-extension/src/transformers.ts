import { Transformer } from '@commercetools-test-data/core';
import type {
  TOrganizationExtension,
  TOrganizationExtensionGraphql,
} from './types';

const buildFields: (keyof TOrganizationExtension)[] = [
  'applicationsMaintainerContactInformation',
  'oidcSsoConfig',
  'installedApplications',
  'installedCustomViews',
  'registeredApplications',
  'registeredCustomViews',
];

const transformers = {
  default: Transformer<TOrganizationExtension, TOrganizationExtension>(
    'default',
    {
      buildFields,
    }
  ),
  graphql: Transformer<TOrganizationExtension, TOrganizationExtensionGraphql>(
    'graphql',
    {
      buildFields,
      addFields: () => ({
        __typename: 'OrganizationExtension',
      }),
    }
  ),
};

export default transformers;
