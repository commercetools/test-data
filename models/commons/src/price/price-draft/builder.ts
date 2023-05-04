import { Builder } from '@commercetools-test-data/core';
import type { TCreatePriceDraftBuilder, TPriceDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const PriceDraft: TCreatePriceDraftBuilder = () =>
  Builder<TPriceDraft>({
    generator,
    transformers,
  });

export default PriceDraft;
