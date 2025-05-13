import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type { TPaymentStatus, TCreatePaymentStatusBuilder } from './types';

const Model: TCreatePaymentStatusBuilder = () =>
  Builder<TPaymentStatus>({
    generator,
    transformers,
  });

export default Model;
