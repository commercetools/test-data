import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import { TLimitWithCurrent, TCreateLimitWithCurrentBuilder } from './types';

const Model: TCreateLimitWithCurrentBuilder = () =>
  Builder<TLimitWithCurrent>({
    generator,
    transformers,
  });

export default Model;