import { Builder } from '@commercetools-test-data/core';
import type { TCreateTypeDraftBuilder, TTypeDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateTypeDraftBuilder = () =>
  Builder<TTypeDraft>({
    generator,
    transformers,
  });

export default Model;
