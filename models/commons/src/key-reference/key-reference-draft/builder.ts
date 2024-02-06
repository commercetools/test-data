import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateKeyReferenceDraftBuilder,
  TKeyReferenceDraft,
} from '.././types';

const Model: TCreateKeyReferenceDraftBuilder = () =>
  Builder<TKeyReferenceDraft>({
    generator,
    transformers,
  });

export default Model;
