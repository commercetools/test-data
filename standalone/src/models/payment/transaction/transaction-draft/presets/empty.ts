import { TBuilder } from '@/core';
import { TTransactionDraftGraphql, TTransactionDraftRest } from '../../types';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../builders';

const populatePreset = <
  TModel extends TTransactionDraftGraphql | TTransactionDraftRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder
    .interactionId(undefined)
    .state(undefined)
    .timestamp(undefined)
    .custom(undefined);
};

export const restPreset = (): TBuilder<TTransactionDraftRest> =>
  populatePreset(RestModelBuilder());

export const graphqlPreset = (): TBuilder<TTransactionDraftGraphql> =>
  populatePreset(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<
  TTransactionDraftRest | TTransactionDraftGraphql
> => populatePreset(CompatModelBuilder());
