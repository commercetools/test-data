import type { TBuilder } from '../../../../../core';
import { TCountOnCustomLineItemUnitsDraftGraphql } from '../../types';

export type TCreateCountOnCustomLineItemUnitsDraftBuilder<
  TModel extends TCountOnCustomLineItemUnitsDraftGraphql,
> = () => TBuilder<TModel>;
