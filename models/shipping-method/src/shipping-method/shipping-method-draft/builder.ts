import { Builder } from '@commercetools-test-data/core';
import type {
  TCreateShippingMethodDraftBuilder,
  TShippingMethodDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateShippingMethodDraftBuilder = () =>
  Builder<TShippingMethodDraft>({
    generator,
    transformers,
  });

export default Model;
