import { Builder } from '@commercetools-test-data/core';
import type {
  TCreateShippingRateDraftBuilder,
  TShippingRateDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateShippingRateDraftBuilder = () =>
  Builder<TShippingRateDraft>({
    generator,
    transformers,
  });

export default Model;
