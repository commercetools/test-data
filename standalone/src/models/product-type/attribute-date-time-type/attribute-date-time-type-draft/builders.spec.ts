import type {
  TAttributeDateTimeTypeDraftGraphql,
  TAttributeDateTimeTypeDraftRest,
} from '../types';
import {
  AttributeDateTimeTypeDraft,
  AttributeDateTimeTypeDraftGraphql,
  AttributeDateTimeTypeDraftRest,
} from './index';

function validateRestModel(model: TAttributeDateTimeTypeDraftRest) {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'datetime',
    })
  );
}

function validateGraphqlModel(model: TAttributeDateTimeTypeDraftGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      dummy: 'datetime',
    })
  );
}

describe('AttributeDateTimeTypeDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeDateTimeTypeDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeDateTimeTypeDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeDateTimeTypeDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeDateTimeTypeDraft.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeDateTimeTypeDraft.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeDateTimeTypeDraft.random().buildGraphql<TAttributeDateTimeTypeDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
