import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateCentPrecisionMoneyDraftBuilder,
  TCentPrecisionMoneyDraft,
} from './types';

const Model: TCreateCentPrecisionMoneyDraftBuilder = () =>
  Builder<TCentPrecisionMoneyDraft>({
    generator,
    transformers,
  });

export default Model;
