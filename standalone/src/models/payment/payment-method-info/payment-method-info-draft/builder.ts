import { Builder } from '@/core';
import type { TPaymentMethodInfoDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model = () =>
  Builder<TPaymentMethodInfoDraft>({
    generator,
    transformers,
  });

export default Model;
