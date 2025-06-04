import type {
  TAttributeDateTypeGraphql,
  TAttributeDateTypeRest,
} from './types';
import {
  AttributeDateType,
  AttributeDateTypeGraphql,
  AttributeDateTypeRest,
} from './index';

function validateRestModel(model: TAttributeDateTypeRest) {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'date',
    })
  );
}

function validateGraphqlModel(model: TAttributeDateTypeGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'date',
      __typename: 'DateAttributeDefinitionType',
    })
  );
}

describe('AttributeDateType model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeDateTypeRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeDateTypeGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeDateType model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeDateType.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeDateType.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeDateType.random().buildGraphql<TAttributeDateTypeGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
