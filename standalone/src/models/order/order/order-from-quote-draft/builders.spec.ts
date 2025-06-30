import {
  TOrderFromQuoteDraftGraphql,
  TOrderFromQuoteDraftRest,
} from '../types';
import {
  OrderFromQuoteDraft,
  OrderFromQuoteDraftGraphql,
  OrderFromQuoteDraftRest,
} from './index';

const validateCommonFields = (
  model: TOrderFromQuoteDraftRest | TOrderFromQuoteDraftGraphql
) => {
  expect(model).toEqual(
    expect.objectContaining({
      version: expect.any(Number),
      orderNumber: expect.any(String),
      quoteStateToAccepted: expect.any(Boolean),
      paymentState: expect.stringMatching(
        /^(BalanceDue|CreditOwed|Failed|Paid|Pending)$/
      ),
      orderState: expect.stringMatching(
        /^(Cancelled|Complete|Confirmed|Open)$/
      ),
      shipmentState: expect.stringMatching(
        /^(Backorder|Canceled|Delayed|Delivered|Partial|Pending|Ready|Shipped)$/
      ),
    })
  );
};

const validateRestFields = (model: TOrderFromQuoteDraftRest) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      quote: expect.objectContaining({
        id: expect.any(String),
        typeId: 'quote',
      }),
      state: expect.objectContaining({
        id: expect.any(String),
        typeId: 'state',
      }),
    })
  );
};

const validateGraphqlFields = (model: TOrderFromQuoteDraftGraphql) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      quote: expect.objectContaining({
        id: expect.any(String),
        typeId: 'quote',
      }),
      state: expect.objectContaining({
        id: expect.any(String),
        typeId: 'state',
      }),
    })
  );
};

describe('OrderFromQuoteDraft builder', () => {
  it('should build a valid REST object', () => {
    const orderFromQuoteDraft = OrderFromQuoteDraftRest.random().build();

    validateRestFields(orderFromQuoteDraft);
  });

  it('should build a valid GraphQL object', () => {
    const orderFromQuoteDraft = OrderFromQuoteDraftGraphql.random().build();

    validateGraphqlFields(orderFromQuoteDraft);
  });
});

describe('OrderFromQuoteDraft compatibility builder', () => {
  it('should build a valid REST object', () => {
    const orderFromQuoteDraft =
      OrderFromQuoteDraft.random().buildRest<TOrderFromQuoteDraftRest>();

    validateRestFields(orderFromQuoteDraft);
  });

  it('should build a valid Compat GraphQL object', () => {
    const orderFromQuoteDraft =
      OrderFromQuoteDraft.random().buildGraphql<TOrderFromQuoteDraftGraphql>();

    validateGraphqlFields(orderFromQuoteDraft);
  });
});
