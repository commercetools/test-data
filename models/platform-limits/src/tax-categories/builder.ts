import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import {
  TTaxCategoryLimitsProjection,
  TCreateTaxCategoryLimitsProjectionBuilder,
} from './types';

const Model: TCreateTaxCategoryLimitsProjectionBuilder = () =>
  Builder<TTaxCategoryLimitsProjection>({
    generator,
    transformers,
  });

export default Model;
