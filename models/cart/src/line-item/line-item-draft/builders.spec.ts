import {
  ReferenceDraftRest,
  ReferenceDraftGraphql,
} from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { TLineItemDraftRest, TLineItemDraftGraphql } from '../types';
import {
  LineItemDraft,
  LineItemDraftRest,
  LineItemDraftGraphql,
} from './index';

const populateRestModel = (model: TBuilder<TLineItemDraftRest>) =>
  model
    .supplyChannel(ReferenceDraftRest.presets.channelReference())
    .distributionChannel(ReferenceDraftRest.presets.channelReference());

const populateGraphqlModel = (model: TBuilder<TLineItemDraftGraphql>) =>
  model
    .supplyChannel(ReferenceDraftGraphql.presets.channelReference())
    .distributionChannel(ReferenceDraftGraphql.presets.channelReference());

const validateCommonFields = (
  model: TLineItemDraftRest | TLineItemDraftGraphql
) => {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      productId: expect.any(String),
      sku: expect.any(String),
      quantity: expect.any(Number),
      variantId: expect.any(String),
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
    const lineItemDraft = populateRestModel(LineItemDraftRest.random()).build();

    console.log(lineItemDraft);
    validateRestFields(lineItemDraft);
  });

  it('builds a GraphQL model', () => {
    const lineItemDraft = populateGraphqlModel(
      LineItemDraftGraphql.random()
    ).build();
    validateCommonFields(lineItemDraft);
  });
});

describe('LineItemDraft compatibility builders', () => {
  it('builds a DEFAULT model', () => {
    const lineItemDraft = populateRestModel(LineItemDraft.random()).build();
    validateRestFields(lineItemDraft);
  });

  it('builds a REST model', () => {
    const lineItemDraft = populateRestModel(LineItemDraft.random()).buildRest();
    validateRestFields(lineItemDraft);
  });

  it('builds a GraphQL model', () => {
    const lineItemDraft = populateGraphqlModel(
      LineItemDraft.random()
    ).buildGraphql();
    validateCommonFields(lineItemDraft);
  });
});
