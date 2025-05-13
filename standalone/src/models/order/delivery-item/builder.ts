import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateDeliveryItemBuilder, TDeliveryItem } from './types';

const Model: TCreateDeliveryItemBuilder = () =>
  Builder<TDeliveryItem>({
    generator,
    transformers,
  });

export default Model;
