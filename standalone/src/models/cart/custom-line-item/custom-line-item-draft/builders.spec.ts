import { CustomFieldBooleanType } from '../../../type';
import {
  TCustomLineItemDraftRest,
  TCustomLineItemDraftGraphql,
} from '../types';
import {
  CustomLineItemDraft,
  CustomLineItemDraftRest,
  CustomLineItemDraftGraphql,
} from './index';

const validateCommonFields = (
  model: TCustomLineItemDraftGraphql | TCustomLineItemDraftRest
) => {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      quantity: expect.any(Number),
      money: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
      taxCategory: null,
      externalTaxRate: null,
      shippingDetails: null,
      priceMode: expect.any(String),
      custom: expect.objectContaining({
        name: 'Boolean',
      }),
    })
  );
};

const validateRestFields = (model: TCustomLineItemDraftRest) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      name: expect.objectContaining({
        de: expect.any(String),
        en: expect.any(String),
        fr: expect.any(String),
      }),
    })
  );
};

const validateGraphqlFields = (model: TCustomLineItemDraftGraphql) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      name: expect.arrayContaining([
        expect.objectContaining({
          locale: 'de',
          value: expect.any(String),
        }),
        expect.objectContaining({
          locale: 'en',
          value: expect.any(String),
        }),
        expect.objectContaining({
          locale: 'fr',
          value: expect.any(String),
        }),
      ]),
    })
  );
};

describe('CustomLineItemDraft model builders', () => {
  it('builds a REST model', () => {
    const customLineItemDraftRest = CustomLineItemDraftRest.random()
      .custom(CustomFieldBooleanType.random())
      .buildRest();
    validateRestFields(customLineItemDraftRest);
  });

  it('builds a GraphQL model', () => {
    const customLineItemDraftGraphql = CustomLineItemDraftGraphql.random()
      .custom(CustomFieldBooleanType.random())
      .buildGraphql();
    validateGraphqlFields(customLineItemDraftGraphql);
  });
});

describe('CustomLineItemDraft compatibility builders', () => {
  it('builds a DEFAULT model', () => {
    const customLineItemDraftDefault = CustomLineItemDraft.random()
      .custom(CustomFieldBooleanType.random())
      .build();
    validateCommonFields(customLineItemDraftDefault);
  });

  it('builds a REST model', () => {
    const customLineItemDraftRest = CustomLineItemDraft.random()
      .custom(CustomFieldBooleanType.random())
      .buildRest();
    validateRestFields(customLineItemDraftRest);
  });

  it('builds a GraphQL model', () => {
    const customLineItemDraftGraphql = CustomLineItemDraft.random()
      .custom(CustomFieldBooleanType.random())
      .buildGraphql();
    validateGraphqlFields(customLineItemDraftGraphql);
  });
});
