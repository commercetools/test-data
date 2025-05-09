import { Builder } from '../../../../core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateAppliedPermissionBuilder,
  TAppliedPermission,
} from './types';

const Model: TCreateAppliedPermissionBuilder = () =>
  Builder<TAppliedPermission>({
    generator,
    transformers,
  });

export default Model;
