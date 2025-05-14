import type {
  TAttributeLocalizedEnumTypeDraftGraphql,
  TAttributeLocalizedEnumTypeDraftRest,
} from '../types';
import {
  AttributeLocalizedEnumTypeDraft,
  AttributeLocalizedEnumTypeDraftGraphql,
  AttributeLocalizedEnumTypeDraftRest,
} from './index';

function validateRestModel(model: TAttributeLocalizedEnumTypeDraftRest) {
  expect(model).toEqual(
    expect.objectContaining({
      name: expect.any(String),
      values: expect.arrayContaining([
        expect.objectContaining({
          key: expect.any(String),
          label: expect.objectContaining({
            en: expect.any(String),
            de: expect.any(String),
          }),
        }),
      ]),
    })
  );
}

function validateGraphqlModel(model: TAttributeLocalizedEnumTypeDraftGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      values: expect.arrayContaining([
        expect.objectContaining({
          key: expect.any(String),
          label: expect.arrayContaining([
            expect.objectContaining({
              locale: expect.any(String),
              value: expect.any(String),
            }),
          ]),
        }),
      ]),
    })
  );
}

describe('AttributeLocalizedEnumType model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeLocalizedEnumTypeDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeLocalizedEnumTypeDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeLocalizedEnumType model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeLocalizedEnumTypeDraft.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeLocalizedEnumTypeDraft.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeLocalizedEnumTypeDraft.random().buildGraphql<TAttributeLocalizedEnumTypeDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
