import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TProductCatalogData,
  TCreateProductCatalogDataBuilder,
} from './types';

const Model: TCreateProductCatalogDataBuilder = () =>
  Builder<TProductCatalogData>({
    generator,
    transformers,
  });

export default Model;
