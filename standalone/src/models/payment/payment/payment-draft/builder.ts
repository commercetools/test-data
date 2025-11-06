import { Builder } from '@/core';
import type { TPaymentDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model = () =>
  Builder<TPaymentDraft>({
    generator,
    transformers,
  });

export default Model;
