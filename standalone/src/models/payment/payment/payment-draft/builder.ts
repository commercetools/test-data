import { Builder } from '../../../../core';
import type { TCreatePaymentDraftBuilder, TPaymentDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreatePaymentDraftBuilder = () =>
  Builder<TPaymentDraft>({
    generator,
    transformers,
  });

export default Model;
