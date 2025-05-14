import type {
  TAttributePlainEnumValueGraphql,
  TAttributePlainEnumValueRest,
} from './types';
import {
  AttributePlainEnumValue,
  AttributePlainEnumValueGraphql,
  AttributePlainEnumValueRest,
} from './index';

function validateModel(
  model: TAttributePlainEnumValueRest | TAttributePlainEnumValueGraphql
) {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      label: expect.any(String),
    })
  );
}

describe('AttributePlainEnumValue model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributePlainEnumValueRest.random().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributePlainEnumValueGraphql.random().build();

    validateModel(graphqlModel);
  });
});

describe('AttributePlainEnumValue model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributePlainEnumValue.random().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributePlainEnumValue.random().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributePlainEnumValue.random().buildGraphql<TAttributePlainEnumValueGraphql>();

    validateModel(graphqlModel);
  });
});
