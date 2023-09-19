import { Builder } from '@commercetools-test-data/core';
import type {
  TCreateInventoryEntryDraftBuilder,
  TInventoryEntryDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateInventoryEntryDraftBuilder = () =>
  Builder<TInventoryEntryDraft>({
    generator,
    transformers,
  });

export default Model;
