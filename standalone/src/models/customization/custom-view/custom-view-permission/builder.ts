import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCustomViewPermission,
  TCreateCustomViewPermissionBuilder,
} from './types';

const Model: TCreateCustomViewPermissionBuilder = () =>
  Builder<TCustomViewPermission>({
    generator,
    transformers,
  });

export default Model;
