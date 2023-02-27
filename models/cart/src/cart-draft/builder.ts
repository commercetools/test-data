import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateCartDraftBuilder, TCartDraft } from '../types';

const Model: TCreateCartDraftBuilder = () =>
  Builder<TCartDraft>({
    generator,
    transformers,
  });

export default Model;
