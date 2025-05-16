import { CustomFieldBooleanType } from '@/models/type';
import { TCartDraftGraphql, TCartDraftRest } from '../types';
import { CartDraft, CartDraftGraphql, CartDraftRest } from './index';

const validateCommonFields = (model: TCartDraftRest | TCartDraftGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      customerId: expect.any(String),
      customerEmail: expect.any(String),
      currency: expect.any(String),
      country: expect.any(String),
      inventoryMode: expect.any(String),
      taxMode: expect.any(String),
      taxRoundingMode: expect.any(String),
      taxCalculationMode: expect.any(String),
      lineItems: expect.arrayContaining([
        expect.objectContaining({
          sku: expect.any(String),
          quantity: expect.any(Number),
        }),
      ]),
      customLineItems: expect.any(Array),
      shippingAddress: expect.objectContaining({
        city: expect.any(String),
        firstName: expect.any(String),
        lastName: expect.any(String),
      }),
      billingAddress: expect.objectContaining({
        city: expect.any(String),
        firstName: expect.any(String),
        lastName: expect.any(String),
      }),
      shippingMethod: expect.objectContaining({
        id: expect.any(String),
        typeId: 'shipping-method',
      }),
      businessUnit: expect.objectContaining({
        id: expect.any(String),
        typeId: 'business-unit',
      }),
      store: expect.objectContaining({
        id: expect.any(String),
        typeId: 'store',
      }),
      externalTaxRateForShippingMethod: null,
      custom: expect.objectContaining({
        name: 'Boolean',
      }),
      locale: expect.any(String),
      deleteDaysAfterLastModification: null,
      shippingRateInput: null,
      origin: expect.any(String),
      shippingMode: expect.any(String),
      customShipping: expect.any(Array),
      shipping: expect.any(Array),
      itemShippingAddresses: expect.any(Array),
      discountCodes: expect.any(Array),
    })
  );
};

describe('CartDraft builder', () => {
  it('should build a valid REST object', () => {
    const cartDraft = CartDraftRest.random()
      .custom(CustomFieldBooleanType.random())
      .build();

    validateCommonFields(cartDraft);
  });

  it('should build a valid GraphQL object', () => {
    const cartDraft = CartDraftGraphql.random()
      .custom(CustomFieldBooleanType.random())
      .build();

    validateCommonFields(cartDraft);
  });
});

describe('CartDraft compatibility builder', () => {
  it('should build a valid REST object', () => {
    const cartDraft = CartDraft.random()
      .custom(CustomFieldBooleanType.random())
      .buildRest<TCartDraftRest>();

    validateCommonFields(cartDraft);
  });

  it('should build a valid Compat GraphQL object', () => {
    const cartDraft = CartDraft.random()
      .custom(CustomFieldBooleanType.random())
      .buildGraphql<TCartDraftGraphql>();

    validateCommonFields(cartDraft);
  });
});
