import type {
  TAttributeDateTimeTypeGraphql,
  TAttributeDateTimeTypeRest,
} from './types';
import {
  AttributeDateTimeType,
  AttributeDateTimeTypeGraphql,
  AttributeDateTimeTypeRest,
} from './index';

function validateRestModel(model: TAttributeDateTimeTypeRest) {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'datetime',
    })
  );
}

function validateGraphqlModel(model: TAttributeDateTimeTypeGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'datetime',
      __typename: 'DateTimeAttributeDefinitionType',
    })
  );
}

describe('AttributeDateTimeType model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeDateTimeTypeRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeDateTimeTypeGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeDateTimeType model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeDateTimeType.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeDateTimeType.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeDateTimeType.random().buildGraphql<TAttributeDateTimeTypeGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
