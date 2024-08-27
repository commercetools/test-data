import { Builder } from '@commercetools-test-data/core';
import type { TCreatePriceTierDraftBuilder, TPriceTierDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreatePriceTierDraftBuilder = () =>
  Builder<TPriceTierDraft>({
    generator,
    transformers,
  });

export default Model;
