import type { TBuilder } from '@commercetools-test-data/core';
import { TCountOnLineItemUnitsDraftGraphql } from '../../types';

export type TCreateCountOnLineItemUnitsDraftBuilder<
  TModel extends TCountOnLineItemUnitsDraftGraphql,
> = () => TBuilder<TModel>;
