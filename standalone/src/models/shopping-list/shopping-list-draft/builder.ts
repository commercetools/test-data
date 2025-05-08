import { Builder } from '../../../core';
import type {
  TCreateShoppingListDraftBuilder,
  TShoppingListDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateShoppingListDraftBuilder = () =>
  Builder<TShoppingListDraft>({
    generator,
    transformers,
  });

export default Model;
