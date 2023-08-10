import { Builder } from '@commercetools-test-data/core';
import type { TCreateStoreDraftBuilder, TStoreDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateStoreDraftBuilder = () =>
  Builder<TStoreDraft>({
    generator,
    transformers,
  });

export default Model;
