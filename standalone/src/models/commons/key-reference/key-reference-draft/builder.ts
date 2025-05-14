import { Builder } from '@/core';
import type {
  TCreateKeyReferenceDraftBuilder,
  TKeyReferenceDraft,
} from '.././types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateKeyReferenceDraftBuilder = () =>
  Builder<TKeyReferenceDraft>({
    name: 'KeyReferenceDraft',
    generator,
    transformers,
  });

export default Model;
