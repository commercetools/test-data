import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateProductSelectionBuilder,
  TProductSelection,
} from './types';

const Model: TCreateProductSelectionBuilder = () =>
  Builder<TProductSelection>({
    generator,
    transformers,
  });

export default Model;
