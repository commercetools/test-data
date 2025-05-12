import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateCompanyBuilder, TCompany } from './types';

const Model: TCreateCompanyBuilder = () =>
  Builder<TCompany>({
    generator,
    transformers,
  });

export default Model;
