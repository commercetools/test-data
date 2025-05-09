import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateTaxCategoryBuilder, TTaxCategory } from './types';

const Model: TCreateTaxCategoryBuilder = () =>
  Builder<TTaxCategory>({
    generator,
    transformers,
  });

export default Model;
