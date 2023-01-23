import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateTaxRateDraftBuilder, TTaxRateDraft } from '../types';

const Model: TCreateTaxRateDraftBuilder = () =>
  Builder<TTaxRateDraft>({
    generator,
    transformers,
  });

export default Model;
