import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCustomViewInstallationPermission,
  TCreateCustomViewInstallationPermissionBuilder,
} from './types';

const Model: TCreateCustomViewInstallationPermissionBuilder = () =>
  Builder<TCustomViewInstallationPermission>({
    generator,
    transformers,
  });

export default Model;
