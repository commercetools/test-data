import type {
  TAttributePlainEnumValueDraftGraphql,
  TAttributePlainEnumValueDraftRest,
} from '../types';
import {
  AttributePlainEnumValueDraft,
  AttributePlainEnumValueDraftGraphql,
  AttributePlainEnumValueDraftRest,
} from './index';

function validateModel(
  model:
    | TAttributePlainEnumValueDraftRest
    | TAttributePlainEnumValueDraftGraphql
) {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      label: expect.any(String),
    })
  );
}

describe('AttributePlainEnumValueDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributePlainEnumValueDraftRest.random().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributePlainEnumValueDraftGraphql.random().build();

    validateModel(graphqlModel);
  });
});

describe('AttributePlainEnumValueDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributePlainEnumValueDraft.random().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributePlainEnumValueDraft.random().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributePlainEnumValueDraft.random().buildGraphql<TAttributePlainEnumValueDraftGraphql>();

    validateModel(graphqlModel);
  });
});
