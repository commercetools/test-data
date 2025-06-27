import { TOrderFromCartDraftGraphql, TOrderFromCartDraftRest } from '../types';
import {
  OrderFromCartDraft,
  OrderFromCartDraftGraphql,
  OrderFromCartDraftRest,
} from './index';

const validateCommonFields = (
  model: TOrderFromCartDraftRest | TOrderFromCartDraftGraphql
) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: null,
      version: expect.any(Number),
      orderNumber: expect.any(String),
      purchaseOrderNumber: expect.any(String),
      paymentState: expect.stringMatching(
        /^(BalanceDue|CreditOwed|Failed|Paid|Pending)$/
      ),
      orderState: expect.stringMatching(
        /^(Cancelled|Complete|Confirmed|Open)$/
      ),
      shipmentState: expect.stringMatching(
        /^(Backorder|Canceled|Delayed|Delivered|Partial|Pending|Ready|Shipped)$/
      ),
      custom: null,
    })
  );
};

const validateRestFields = (model: TOrderFromCartDraftRest) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      cart: expect.objectContaining({
        id: expect.any(String),
        typeId: 'cart',
      }),
      state: expect.objectContaining({
        id: expect.any(String),
        typeId: 'state',
      }),
    })
  );
};

const validateGraphqlFields = (model: TOrderFromCartDraftGraphql) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      cart: expect.objectContaining({
        id: expect.any(String),
        typeId: 'cart',
      }),
      state: expect.objectContaining({
        id: expect.any(String),
        typeId: 'state',
      }),
    })
  );
};

describe('OrderFromCartDraft builder', () => {
  it('should build a valid REST object', () => {
    const orderFromCartDraft = OrderFromCartDraftRest.random().build();

    validateRestFields(orderFromCartDraft);
  });

  it('should build a valid GraphQL object', () => {
    const orderFromCartDraft = OrderFromCartDraftGraphql.random().build();

    validateGraphqlFields(orderFromCartDraft);
  });
});

describe('OrderFromCartDraft compatibility builder', () => {
  it('should build a valid REST object', () => {
    const orderFromCartDraft =
      OrderFromCartDraft.random().buildRest<TOrderFromCartDraftRest>();

    validateRestFields(orderFromCartDraft);
  });

  it('should build a valid Compat GraphQL object', () => {
    const orderFromCartDraft =
      OrderFromCartDraft.random().buildGraphql<TOrderFromCartDraftGraphql>();

    validateGraphqlFields(orderFromCartDraft);
  });
});
