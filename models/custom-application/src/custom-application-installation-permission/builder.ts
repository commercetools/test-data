import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCustomApplicationInstallationPermission,
  TCreateCustomApplicationInstallationPermissionBuilder,
} from './types';

const Model: TCreateCustomApplicationInstallationPermissionBuilder = () =>
  Builder<TCustomApplicationInstallationPermission>({
    generator,
    transformers,
  });

export default Model;
