import { Builder } from '@commercetools-test-data/core';
import type { TCreateLineItemDraftBuilder, TLineItemDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateLineItemDraftBuilder = () =>
  Builder<TLineItemDraft>({
    generator,
    transformers,
  });

export default Model;
