import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCustomLineItem, TCreateCustomLineItemBuilder } from './types';

const Model: TCreateCustomLineItemBuilder = () =>
  Builder<TCustomLineItem>({
    generator,
    transformers,
  });

export default Model;
