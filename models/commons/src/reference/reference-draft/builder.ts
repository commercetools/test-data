import { Builder } from '@commercetools-test-data/core';
import type { TCreateReferenceDraftBuilder, TReferenceDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateReferenceDraftBuilder = () =>
  Builder<TReferenceDraft>({
    generator,
    transformers,
  });

export default Model;
