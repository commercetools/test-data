import type { TBuilder } from '@/core';
import type {
  TShippingMethodDraft,
  TShippingMethodDraftGraphql,
  TShippingMethodDraftRest,
} from '../../types';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from '../builders';

const populateEmptyPreset = <
  TModel extends TShippingMethodDraftGraphql | TShippingMethodDraftRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder
    .key(undefined)
    .localizedName(undefined)
    .localizedDescription(undefined)
    .predicate(undefined)
    .custom(undefined);
};

export const restPreset = (): TBuilder<TShippingMethodDraftRest> =>
  populateEmptyPreset(RestModelBuilder());

export const graphqlPreset = (): TBuilder<TShippingMethodDraftGraphql> =>
  populateEmptyPreset(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<TShippingMethodDraft> =>
  populateEmptyPreset(CompatModelBuilder());
