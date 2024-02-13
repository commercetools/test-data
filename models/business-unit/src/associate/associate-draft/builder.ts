import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateAssociateDraftBuilder, TAssociateDraft } from '../types';

const Model: TCreateAssociateDraftBuilder = () =>
  Builder<TAssociateDraft>({
    generator,
    transformers,
  });

export default Model;
