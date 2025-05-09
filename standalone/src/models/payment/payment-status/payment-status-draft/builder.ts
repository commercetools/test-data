import { Builder } from '../../../../core';
import type {
  TCreatePaymentStatusDraftBuilder,
  TPaymentStatusDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreatePaymentStatusDraftBuilder = () =>
  Builder<TPaymentStatusDraft>({
    generator,
    transformers,
  });

export default Model;
