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

const populatePreset = <
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
  populatePreset(RestModelBuilder());

export const graphqlPreset = (): TBuilder<TShippingMethodDraftGraphql> =>
  populatePreset(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<TShippingMethodDraft> =>
  populatePreset(CompatModelBuilder());
