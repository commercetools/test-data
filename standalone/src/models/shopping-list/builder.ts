import { Builder } from '../../core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateShoppingListBuilder, TShoppingList } from './types';

const Model: TCreateShoppingListBuilder = () =>
  Builder<TShoppingList>({
    generator,
    transformers,
  });

export default Model;
