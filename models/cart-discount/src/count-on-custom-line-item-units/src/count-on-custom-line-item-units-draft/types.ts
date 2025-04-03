import type { TBuilder } from '@commercetools-test-data/core';
import { TCountOnCustomLineItemUnitsDraftGraphql } from '../../types';

export type TCreateCountOnCustomLineItemUnitsDraftBuilder<
  TModel extends TCountOnCustomLineItemUnitsDraftGraphql,
> = () => TBuilder<TModel>;
