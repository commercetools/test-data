import {
  TLineItemDraft,
  TLineItemDraftRest,
  TLineItemDraftGraphql,
} from '../types';
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
      perMethodExternalTaxRate: [],
    })
  );
};

describe('LineItemDraft model builders', () => {
  it('builds a REST model', () => {
    const lineItemDraft = LineItemDraftRest.random().build();

    validateRestFields(lineItemDraft);
  });

  it('builds a GraphQL model', () => {
    const lineItemDraft = LineItemDraftGraphql.random().build();
    validateCommonFields(lineItemDraft);
  });
});

describe('LineItemDraft compatibility builders', () => {
  it('builds a DEFAULT model', () => {
    const lineItemDraft = LineItemDraft.random().build() as TLineItemDraft;
    validateRestFields(lineItemDraft);
  });

  it('builds a REST model', () => {
    const lineItemDraft =
      LineItemDraft.random().buildRest() as TLineItemDraftRest;
    validateRestFields(lineItemDraft);
  });

  it('builds a GraphQL model', () => {
    const lineItemDraft =
      LineItemDraft.random().buildGraphql() as TLineItemDraftGraphql;
    validateCommonFields(lineItemDraft);
  });
});
