import { TBuilder } from '@/core';
import {
  TPaymentStatusDraftGraphql,
  TPaymentStatusDraftRest,
} from '../../types';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../builders';

const populatePreset = <
  TModel extends TPaymentStatusDraftGraphql | TPaymentStatusDraftRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder
    .interfaceCode(undefined)
    .interfaceText(undefined)
    .state(undefined);
};

export const restPreset = (): TBuilder<TPaymentStatusDraftRest> =>
  populatePreset(RestModelBuilder());

export const graphqlPreset = (): TBuilder<TPaymentStatusDraftGraphql> =>
  populatePreset(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<
  TPaymentStatusDraftRest | TPaymentStatusDraftGraphql
> => populatePreset(CompatModelBuilder());
