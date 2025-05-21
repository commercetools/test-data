import type {
  TProductSelectionDraftGraphql,
  TProductSelectionDraftRest,
} from '../types';
import {
  ProductSelectionDraft,
  ProductSelectionDraftGraphql,
  ProductSelectionDraftRest,
} from './index';

const validateModel = (
  model: TProductSelectionDraftGraphql | TProductSelectionDraftRest
): void => {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      name: expect.any(Object),
      mode: expect.any(String),
      custom: expect.any(Object),
    })
  );
};

describe('ProductSelectionDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = ProductSelectionDraftRest.random().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ProductSelectionDraftGraphql.random().build();
    validateModel(graphqlModel);
  });
});

describe('ProductSelectionDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = ProductSelectionDraft.random().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = ProductSelectionDraft.random().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ProductSelectionDraft.random().buildGraphql();

    validateModel(graphqlModel);
  });
});
