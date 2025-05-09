import { Builder } from '../../../../core';
import generator from './generator';
import transformers from './transformers';
import type {
  TRestrictedCustomViewInstallationForOrganization,
  TCreateRestrictedCustomViewInstallationForOrganizationBuilder,
} from './types';

const Model: TCreateRestrictedCustomViewInstallationForOrganizationBuilder =
  () =>
    Builder<TRestrictedCustomViewInstallationForOrganization>({
      generator,
      transformers,
    });

export default Model;
