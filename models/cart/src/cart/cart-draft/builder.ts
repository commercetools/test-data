import { Builder } from '@commercetools-test-data/core';
import type { TCreateCartDraftBuilder, TCartDraft } from '../../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateCartDraftBuilder = () =>
  Builder<TCartDraft>({
    generator,
    transformers,
  });

export default Model;
