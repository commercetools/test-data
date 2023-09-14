import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TInventoryEntry, TCreateInventoryEntryBuilder } from './types';

const Model: TCreateInventoryEntryBuilder = () =>
  Builder<TInventoryEntry>({
    generator,
    transformers,
  });

export default Model;
