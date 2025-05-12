import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateShippingMethodBuilder, TShippingMethod } from './types';

const Model: TCreateShippingMethodBuilder = () =>
  Builder<TShippingMethod>({
    generator,
    transformers,
  });

export default Model;
