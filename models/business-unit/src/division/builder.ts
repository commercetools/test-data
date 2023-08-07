import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateBusinessUnitBuilder, TBusinessUnit } from '../types';

const Model: TCreateBusinessUnitBuilder = () =>
  Builder<TBusinessUnit>({
    generator,
    transformers,
  });

export default Model;
