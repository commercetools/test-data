import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TMoneyDraft, TCreateMoneyBuilder } from '../types';

const Model: TCreateMoneyBuilder = () =>
  Builder<TMoneyDraft>({
    generator,
    transformers,
  });

export default Model;
