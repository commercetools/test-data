import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateLineItemDraftBuilder, TLineItemDraft } from '../types';

const Model: TCreateLineItemDraftBuilder = () =>
  Builder<TLineItemDraft>({
    generator,
    transformers,
  });

export default Model;
