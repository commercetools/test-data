import { Builder } from '../../core';
import generator from './generator';
import transformers from './transformers';
import type { TFilterValues, TCreateFilterValuesBuilder } from './types';

const Model: TCreateFilterValuesBuilder = () =>
  Builder<TFilterValues>({
    generator,
    transformers,
  });

export default Model;
