import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateTrackingDataBuilder, TTrackingData } from './types';

const Model: TCreateTrackingDataBuilder = () =>
  Builder<TTrackingData>({
    generator,
    transformers,
  });

export default Model;
