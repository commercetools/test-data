import type {
  TAttributeBooleanTypeGraphql,
  TAttributeBooleanTypeRest,
} from './types';
import {
  AttributeBooleanType,
  AttributeBooleanTypeGraphql,
  AttributeBooleanTypeRest,
} from './index';

function validateRestModel(model: TAttributeBooleanTypeRest) {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'boolean',
    })
  );
}

function validateGraphqlModel(model: TAttributeBooleanTypeGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'boolean',
      __typename: 'BooleanAttributeDefinitionType',
    })
  );
}

describe('AttributeBooleanType model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeBooleanTypeRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeBooleanTypeGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeBooleanType model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeBooleanType.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeBooleanType.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeBooleanType.random().buildGraphql<TAttributeBooleanTypeGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
