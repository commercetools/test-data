import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TLineItem, TCreateLineItemBuilder } from './types';

const Model: TCreateLineItemBuilder = () =>
  Builder<TLineItem>({
    generator,
    transformers,
  });

export default Model;
