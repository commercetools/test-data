import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TRestrictedCustomApplicationInstallationForOrganization,
  TCreateRestrictedCustomApplicationInstallationForOrganizationBuilder,
} from './types';

const Model: TCreateRestrictedCustomApplicationInstallationForOrganizationBuilder =
  () =>
    Builder<TRestrictedCustomApplicationInstallationForOrganization>({
      generator,
      transformers,
    });

export default Model;
