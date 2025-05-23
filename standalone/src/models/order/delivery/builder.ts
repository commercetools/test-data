import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateDeliveryBuilder, TDelivery } from './types';

const Model: TCreateDeliveryBuilder = () =>
  Builder<TDelivery>({
    generator,
    transformers,
  });

export default Model;
