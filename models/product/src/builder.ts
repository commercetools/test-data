import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TProduct, TCreateProductBuilder } from './types';

const Model: TCreateProductBuilder = () =>
  Builder<TProduct>({
    generator,
    transformers,
  });

export default Model;
