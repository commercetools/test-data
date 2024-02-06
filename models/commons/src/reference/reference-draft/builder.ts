import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateReferenceDraftBuilder, TReferenceDraft } from '../types';

const Model: TCreateReferenceDraftBuilder = () =>
  Builder<TReferenceDraft>({
    generator,
    transformers,
  });

export default Model;
