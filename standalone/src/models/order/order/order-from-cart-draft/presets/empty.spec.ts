import {
  TOrderFromCartDraftGraphql,
  TOrderFromCartDraftRest,
} from '../../types';
import { restPreset, graphqlPreset, compatPreset } from './empty';

const orderFromCartDraftExpectation = (
  orderFromCartDraft: TOrderFromCartDraftRest | TOrderFromCartDraftGraphql
) => {
  expect(orderFromCartDraft).toEqual({
    id: undefined,
    cart: undefined,
    version: expect.any(Number),
    orderNumber: undefined,
    purchaseOrderNumber: undefined,
    paymentState: undefined,
    orderState: undefined,
    state: undefined,
    shipmentState: undefined,
    custom: undefined,
  });
};

describe('Empty preset', () => {
  it('[REST] should set all specified fields to undefined', () => {
    const emptyOrderFromCartDraft = restPreset().build();
    orderFromCartDraftExpectation(emptyOrderFromCartDraft);
  });
  it('[Graphql] should set all specified fields to undefined', () => {
    const emptyOrderFromCartDraft = graphqlPreset().build();
    orderFromCartDraftExpectation(emptyOrderFromCartDraft);
  });
  it('[Compat - REST] should set all specified fields to undefined', () => {
    const emptyOrderFromCartDraft = compatPreset().buildRest();
    orderFromCartDraftExpectation(emptyOrderFromCartDraft);
  });
  it('[Compat - Graphql] should set all specified fields to undefined', () => {
    const emptyOrderFromCartDraft = compatPreset().buildGraphql();
    orderFromCartDraftExpectation(emptyOrderFromCartDraft);
  });
});
