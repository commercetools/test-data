import type { TBuilder } from '../../../../../core';
import { TCountOnLineItemUnitsDraftGraphql } from '../../types';

export type TCreateCountOnLineItemUnitsDraftBuilder<
  TModel extends TCountOnLineItemUnitsDraftGraphql,
> = () => TBuilder<TModel>;
