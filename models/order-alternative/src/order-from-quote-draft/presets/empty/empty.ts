import { TSpecializedBuilder } from '@commercetools-test-data/core';
import type {
  TOrderFromQuoteDraftGraphql,
  TOrderFromQuoteDraftRest,
} from '../../../types';
import { RestModelBuilder, GraphqlModelBuilder } from '../../builders';

const customizeBuilder = <
  T extends TOrderFromQuoteDraftRest | TOrderFromQuoteDraftGraphql,
>(
  builder: TSpecializedBuilder<T>
): TSpecializedBuilder<T> => {
  return builder
    .quoteStateToAccepted(undefined)
    .orderNumber(undefined)
    .paymentState(undefined)
    .shipmentState(undefined)
    .orderState(undefined)
    .state(undefined);
};

export const restPreset = (): TSpecializedBuilder<TOrderFromQuoteDraftRest> =>
  customizeBuilder(RestModelBuilder());

export const graphqlPreset =
  (): TSpecializedBuilder<TOrderFromQuoteDraftGraphql> =>
    customizeBuilder(GraphqlModelBuilder());
