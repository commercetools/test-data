import type {
  TAttributeBooleanTypeDraftGraphql,
  TAttributeBooleanTypeDraftRest,
} from '../types';
import {
  AttributeBooleanTypeDraft,
  AttributeBooleanTypeDraftGraphql,
  AttributeBooleanTypeDraftRest,
} from './index';

function validateRestModel(model: TAttributeBooleanTypeDraftRest) {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'boolean',
    })
  );
}

function validateGraphqlModel(model: TAttributeBooleanTypeDraftGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      dummy: 'boolean',
    })
  );
}

describe('AttributeBooleanTypeDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeBooleanTypeDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeBooleanTypeDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeBooleanTypeDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeBooleanTypeDraft.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeBooleanTypeDraft.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeBooleanTypeDraft.random().buildGraphql<TAttributeBooleanTypeDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
