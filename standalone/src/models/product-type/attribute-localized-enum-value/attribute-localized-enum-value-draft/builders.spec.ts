import type {
  TAttributeLocalizedEnumValueDraftGraphql,
  TAttributeLocalizedEnumValueDraftRest,
} from '../types';
import {
  AttributeLocalizedEnumValueDraft,
  AttributeLocalizedEnumValueDraftGraphql,
  AttributeLocalizedEnumValueDraftRest,
} from './index';

function validateRestModel(model: TAttributeLocalizedEnumValueDraftRest) {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      label: expect.objectContaining({
        en: expect.any(String),
        de: expect.any(String),
      }),
    })
  );
}

function validateGraphqlModel(model: TAttributeLocalizedEnumValueDraftGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      label: expect.arrayContaining([
        expect.objectContaining({
          locale: expect.any(String),
          value: expect.any(String),
        }),
      ]),
    })
  );
}

describe('AttributePlainEnumValue model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeLocalizedEnumValueDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeLocalizedEnumValueDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributePlainEnumValue model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeLocalizedEnumValueDraft.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeLocalizedEnumValueDraft.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeLocalizedEnumValueDraft.random().buildGraphql<TAttributeLocalizedEnumValueDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
