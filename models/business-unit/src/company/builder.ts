import { Builder } from '@commercetools-test-data/core';
import type { TCreateCompanyBuilder, TCompany } from './types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateCompanyBuilder = () =>
  Builder<TCompany>({
    generator,
    transformers,
  });

export default Model;
