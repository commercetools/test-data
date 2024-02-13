import { Builder } from '@commercetools-test-data/core';
import type { TMoneyDraft, TCreateMoneyBuilder } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateMoneyBuilder = () =>
  Builder<TMoneyDraft>({
    generator,
    transformers,
  });

export default Model;
