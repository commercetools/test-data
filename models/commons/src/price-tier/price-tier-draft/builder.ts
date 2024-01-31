import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreatePriceTierDraftBuilder, TPriceTierDraft } from '../types';

const Model: TCreatePriceTierDraftBuilder = () =>
  Builder<TPriceTierDraft>({
    generator,
    transformers,
  });

export default Model;
