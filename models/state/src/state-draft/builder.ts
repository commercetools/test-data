import { Builder } from '@commercetools-test-data/core';
import type { TCreateStateDraftBuilder, TStateDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateStateDraftBuilder = () =>
  Builder<TStateDraft>({
    generator,
    transformers,
  });

export default Model;
