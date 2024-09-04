import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import { TCreateTaxPortionBuilder, TTaxPortion } from './types';

const Model: TCreateTaxPortionBuilder = () =>
  Builder<TTaxPortion>({
    generator,
    transformers,
  });

export default Model;
