import { TBuilder } from '@commercetools-test-data/core';
import type {
  TOrderFromQuoteDraftGraphql,
  TOrderFromQuoteDraftRest,
} from '../../../types';
import { RestModelBuilder, GraphqlModelBuilder } from '../../builders';

const customizeBuilder = <
  T extends TOrderFromQuoteDraftRest | TOrderFromQuoteDraftGraphql
>(
  builder: TBuilder<T>
): TBuilder<T> => {
  return builder
    .quoteStateToAccepted(undefined)
    .orderNumber(undefined)
    .paymentState(undefined)
    .shipmentState(undefined)
    .orderState(undefined)
    .state(undefined);
};

export const restPreset = (): TBuilder<TOrderFromQuoteDraftRest> =>
  customizeBuilder(RestModelBuilder());

export const graphqlPreset = (): TBuilder<TOrderFromQuoteDraftGraphql> =>
  customizeBuilder(GraphqlModelBuilder());
