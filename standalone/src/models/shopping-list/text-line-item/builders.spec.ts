import { TBuilder } from '@/core';
import { CustomFieldBooleanType } from '@/models/type';
import { TTextLineItemRest, TTextLineItemGraphql } from './types';
import { TextLineItemRest, TextLineItemGraphql } from './index';

const populateRestModel = (model: TBuilder<TTextLineItemRest>) =>
  model.custom(CustomFieldBooleanType.random());

const populateGraphqlModel = (model: TBuilder<TTextLineItemGraphql>) =>
  model.custom(CustomFieldBooleanType.random());

const validateCommonFields = (
  model: TTextLineItemRest | TTextLineItemGraphql
) => {
  expect(model).toEqual(
    expect.objectContaining({
      addedAt: expect.any(String),
      custom: expect.objectContaining({
        name: 'Boolean',
      }),
      id: expect.any(String),
      quantity: expect.any(Number),
    })
  );
};

const validateRestFields = (model: TTextLineItemRest) => {
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

const validateGraphqlFields = (model: TTextLineItemGraphql) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      name: expect.any(String),
      nameAllLocales: expect.arrayContaining([
        {
          locale: expect.any(String),
          value: expect.any(String),
          __typename: 'LocalizedString',
        },
      ]),
      custom: expect.objectContaining({
        __typename: 'BooleanType',
      }),
      __typename: 'TextLineItem',
    })
  );
};

describe('TextLineItem model builders', () => {
  it('builds a REST model', () => {
    const model = populateRestModel(TextLineItemRest.random()).build();
    validateRestFields(model);
  });

  it('builds a GraphQL model', () => {
    const model = populateGraphqlModel(TextLineItemGraphql.random()).build();
    validateGraphqlFields(model);
  });
});
