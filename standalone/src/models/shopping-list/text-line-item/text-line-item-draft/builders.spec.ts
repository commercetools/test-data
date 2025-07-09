import { CustomFieldBooleanType } from '@/models/type';
import { TTextLineItemDraftGraphql, TTextLineItemDraftRest } from '../types';
import { TextLineItemDraftRest, TextLineItemDraftGraphql } from './index';

const validateCommonFields = (
  model: TTextLineItemDraftRest | TTextLineItemDraftGraphql
) => {
  expect(model).toEqual(
    expect.objectContaining({
      custom: expect.objectContaining({
        name: 'Boolean',
      }),
      quantity: expect.any(Number),
    })
  );
};

const validateRestFields = (model: TTextLineItemDraftRest) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      name: expect.objectContaining({
        en: expect.any(String),
        de: expect.any(String),
        fr: expect.any(String),
      }),
    })
  );
};

const validateGraphqlFields = (model: TTextLineItemDraftGraphql) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      custom: expect.objectContaining({
        __typename: 'BooleanType',
      }),
      name: expect.arrayContaining([
        {
          locale: expect.any(String),
          value: expect.any(String),
          __typename: 'LocalizedString',
        },
      ]),
    })
  );
};

describe('LineItemDraft model builders', () => {
  it('builds a REST model', () => {
    const model = TextLineItemDraftRest.random()
      .custom(CustomFieldBooleanType.random())
      .build();
    validateRestFields(model);
  });

  it('builds a GraphQL model', () => {
    const model = TextLineItemDraftGraphql.random()
      .custom(CustomFieldBooleanType.random())
      .build();
    validateGraphqlFields(model);
  });
});
