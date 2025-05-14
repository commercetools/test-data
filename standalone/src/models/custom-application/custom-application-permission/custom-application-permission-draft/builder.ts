import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCustomApplicationPermissionDraft,
  TCreateCustomApplicationPermissionDraftBuilder,
} from './types';

const Model: TCreateCustomApplicationPermissionDraftBuilder = () =>
  Builder<TCustomApplicationPermissionDraft>({
    generator,
    transformers,
  });

export default Model;
