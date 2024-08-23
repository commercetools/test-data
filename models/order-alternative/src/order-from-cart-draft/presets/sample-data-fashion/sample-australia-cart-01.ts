import { CartDraft } from '@commercetools-test-data/cart';
import type { TCartDraft } from '@commercetools-test-data/cart';
import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import { constants } from '../../../index';
import emptyPreset from '../empty';

const cart = CartDraft.presets.sampleDataFashion
  .sampleAustralia01()
  .build<TCartDraft>();

const restSampleAustraliaCart01 = (versionNumber: number) =>
  emptyPreset
    .graphql()
    .version(versionNumber)
    .cart(KeyReferenceDraft.random().key(cart.key!).typeId('cart'))
    .orderState(constants.orderState.Open)
    .paymentState(constants.paymentState.Pending)
    .shipmentState(constants.shipmentState.Pending);

const graphqlSampleAustraliaCart01 = (versionNumber: number) =>
  emptyPreset
    .graphql()
    .version(versionNumber)
    .cart(KeyReferenceDraft.random().key(cart.key!).typeId('cart'))
    .orderState(constants.orderState.Open)
    .paymentState(constants.paymentState.Pending)
    .shipmentState(constants.shipmentState.Pending);

export default {
  rest: restSampleAustraliaCart01,
  graphql: graphqlSampleAustraliaCart01,
};
