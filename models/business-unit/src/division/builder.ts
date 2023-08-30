import { Builder } from '@commercetools-test-data/core';
import type { TCreateBusinessUnitBuilder, TBusinessUnit } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateBusinessUnitBuilder = () =>
  Builder<TBusinessUnit>({
    generator,
    transformers,
  });

export default Model;
