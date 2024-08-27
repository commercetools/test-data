import { Builder } from '@commercetools-test-data/core';
import type { TCreateAssociateDraftBuilder, TAssociateDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateAssociateDraftBuilder = () =>
  Builder<TAssociateDraft>({
    generator,
    transformers,
  });

export default Model;
