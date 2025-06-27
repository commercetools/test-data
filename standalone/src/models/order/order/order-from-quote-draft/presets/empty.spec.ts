import {
  TOrderFromQuoteDraftGraphql,
  TOrderFromQuoteDraftRest,
} from '../../types';
import { restPreset, graphqlPreset, compatPreset } from './empty';

const orderFromQuoteDraftExpectation = (
  orderFromQuoteDraft: TOrderFromQuoteDraftRest | TOrderFromQuoteDraftGraphql
) => {
  expect(orderFromQuoteDraft).toMatchObject({
    quote: undefined,
    version: expect.any(Number),
    quoteStateToAccepted: undefined,
    orderNumber: undefined,
    paymentState: undefined,
    orderState: undefined,
    state: undefined,
    shipmentState: undefined,
  });
};

describe('Empty preset', () => {
  it('[REST] should set all specified fields to undefined', () => {
    const emptyOrderFromQuoteDraft = restPreset().build();
    orderFromQuoteDraftExpectation(emptyOrderFromQuoteDraft);
  });
  it('[Graphql] should set all specified fields to undefined', () => {
    const emptyOrderFromQuoteDraft = graphqlPreset().build();
    orderFromQuoteDraftExpectation(emptyOrderFromQuoteDraft);
  });
  it('[Compat - REST] should set all specified fields to undefined', () => {
    const emptyOrderFromQuoteDraft = compatPreset().buildRest();
    orderFromQuoteDraftExpectation(emptyOrderFromQuoteDraft);
  });
  it('[Compat - Graphql] should set all specified fields to undefined', () => {
    const emptyOrderFromQuoteDraft = compatPreset().buildGraphql();
    orderFromQuoteDraftExpectation(emptyOrderFromQuoteDraft);
  });
});
