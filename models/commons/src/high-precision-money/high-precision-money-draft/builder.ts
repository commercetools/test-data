import { Builder } from '@commercetools-test-data/core';
import type {
  TCreateHighPrecisionMoneyDraftBuilder,
  THighPrecisionMoneyDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateHighPrecisionMoneyDraftBuilder = () =>
  Builder<THighPrecisionMoneyDraft>({
    name: 'HighPrecisionMoneyDraft',
    generator,
    transformers,
  });

export default Model;
