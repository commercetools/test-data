import { Builder } from '@/core';
import type {
  TCreateCustomApplicationDraftBuilder,
  TCustomApplicationDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateCustomApplicationDraftBuilder = () =>
  Builder<TCustomApplicationDraft>({
    generator,
    transformers,
  });

export default Model;
