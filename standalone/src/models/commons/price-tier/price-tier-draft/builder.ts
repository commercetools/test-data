import { Builder } from '@/core';
import type { TCreatePriceTierDraftBuilder, TPriceTierDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreatePriceTierDraftBuilder = () =>
  Builder<TPriceTierDraft>({
    name: 'PriceTierDraft',
    generator,
    transformers,
  });

export default Model;
