import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import {
  TShoppingListLimitsProjection,
  TCreateShoppingListLimitsProjectionBuilder,
} from './types';

const Model: TCreateShoppingListLimitsProjectionBuilder = () =>
  Builder<TShoppingListLimitsProjection>({
    generator,
    transformers,
  });

export default Model;
