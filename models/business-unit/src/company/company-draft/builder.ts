import { Builder } from '@commercetools-test-data/core';
import type { TCreateTaxRateDraftBuilder, TTaxRateDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateTaxRateDraftBuilder = () =>
  Builder<TTaxRateDraft>({
    generator,
    transformers,
  });

export default Model;
