import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateParcelMeasurementsBuilder,
  TParcelMeasurements,
} from './types';

const Model: TCreateParcelMeasurementsBuilder = () =>
  Builder<TParcelMeasurements>({
    generator,
    transformers,
  });

export default Model;
