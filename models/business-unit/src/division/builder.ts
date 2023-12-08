import { Builder } from '@commercetools-test-data/core';
import type { TCreateDivisionBuilder, TDivision } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateDivisionBuilder = () =>
  Builder<TDivision>({
    generator,
    transformers,
  });

export default Model;
