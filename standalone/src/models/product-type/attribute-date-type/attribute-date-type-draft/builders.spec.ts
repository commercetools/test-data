import type {
  TAttributeDateTypeDraftGraphql,
  TAttributeDateTypeDraftRest,
} from '../types';
import {
  AttributeDateTypeDraft,
  AttributeDateTypeDraftGraphql,
  AttributeDateTypeDraftRest,
} from './index';

function validateRestModel(model: TAttributeDateTypeDraftRest) {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'date',
    })
  );
}

function validateGraphqlModel(model: TAttributeDateTypeDraftGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      dummy: 'date',
    })
  );
}

describe('AttributeDateTypeDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeDateTypeDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeDateTypeDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeDateTypeDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeDateTypeDraft.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeDateTypeDraft.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeDateTypeDraft.random().buildGraphql<TAttributeDateTypeDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
