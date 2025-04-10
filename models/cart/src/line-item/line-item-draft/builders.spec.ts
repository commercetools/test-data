import { TLineItemDraftRest, TLineItemDraftGraphql } from '../types';
import {
  LineItemDraft,
  LineItemDraftRest,
  LineItemDraftGraphql,
} from './index';

const validateCommonFields = (
  model: TLineItemDraftRest | TLineItemDraftGraphql
) => {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      productId: expect.any(String),
      sku: expect.any(String),
      quantity: expect.any(Number),
      variantId: expect.any(Number),
      supplyChannel: expect.objectContaining({
        typeId: 'channel',
      }),
      distributionChannel: expect.objectContaining({
        typeId: 'channel',
      }),
      externalTaxRate: null,
      externalPrice: expect.objectContaining({
        centAmount: expect.any(Number),
      }),
      externalTotalPrice: null,
      custom: null,
      perMethodExternalTaxRate: [],
      inventoryMode: expect.any(String),
      shippingDetails: null,
      addedAt: expect.any(String),
    })
  );
};

const validateRestFields = (model: TLineItemDraftRest) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      productId: expect.any(String),
      sku: expect.any(String),
    })
  );
};

const validateGraphqlFields = (model: TLineItemDraftGraphql) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      productId: expect.any(String),
      sku: expect.any(String),
    })
  );
};

describe('LineItemDraft model builders', () => {
  it('builds a REST model', () => {
    const lineItemDraft = LineItemDraftRest.random().build();
    expect(lineItemDraft).toBeDefined();
  });

  it('builds a GraphQL model', () => {
    const lineItemDraft = LineItemDraftGraphql.random().build();
    expect(lineItemDraft).toBeDefined();
  });
});

describe('LineItemDraft compatibility builders', () => {
  it('builds a DEFAULT model', () => {
    const lineItemDraft = LineItemDraft.random().build();
    expect(lineItemDraft).toBeDefined();
  });

  it('builds a REST model', () => {
    const lineItemDraft = LineItemDraft.random().buildRest();
    expect(lineItemDraft).toBeDefined();
  });

  it('builds a GraphQL model', () => {
    const lineItemDraft = LineItemDraft.random().buildGraphql();
    expect(lineItemDraft).toBeDefined();
  });
});
