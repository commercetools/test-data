import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCustomViewPermissionDraft,
  TCreateCustomViewPermissionDraftBuilder,
} from './types';

const Model: TCreateCustomViewPermissionDraftBuilder = () =>
  Builder<TCustomViewPermissionDraft>({
    generator,
    transformers,
  });

export default Model;
