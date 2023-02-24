import { Builder } from '@commercetools-test-data/core';
import type { TAttributeDraft, TCreateAttributeDraftBuilder } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateAttributeDraftBuilder = () =>
  Builder<TAttributeDraft>({
    generator,
    transformers,
  });

export default Model;
