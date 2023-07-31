import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreatePaymentStatusDraftBuilder,
  TPaymentStatusDraft,
} from './types';

const Model: TCreatePaymentStatusDraftBuilder = () =>
  Builder<TPaymentStatusDraft>({
    generator,
    transformers,
  });

export default Model;
