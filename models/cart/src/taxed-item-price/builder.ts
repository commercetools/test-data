import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import { TCreateTaxedItemPriceBuilder, TTaxedItemPrice } from './types';

const Model: TCreateTaxedItemPriceBuilder = () =>
  Builder<TTaxedItemPrice>({
    generator,
    transformers,
  });

export default Model;
