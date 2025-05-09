import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type { TShippingRate, TCreateShippingRateBuilder } from './types';

const Model: TCreateShippingRateBuilder = () =>
  Builder<TShippingRate>({
    generator,
    transformers,
  });

export default Model;
