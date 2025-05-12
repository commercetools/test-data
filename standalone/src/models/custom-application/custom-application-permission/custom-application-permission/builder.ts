import { Builder } from '../../../../core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCustomApplicationPermission,
  TCreateCustomApplicationPermissionBuilder,
} from './types';

const Model: TCreateCustomApplicationPermissionBuilder = () =>
  Builder<TCustomApplicationPermission>({
    generator,
    transformers,
  });

export default Model;
