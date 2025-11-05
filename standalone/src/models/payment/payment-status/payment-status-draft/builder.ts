import { Builder } from '@/core';
import type { TPaymentStatusDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model = () =>
  Builder<TPaymentStatusDraft>({
    generator,
    transformers,
  });

export default Model;
