import { TProductSelectionGraphql, TProductSelectionRest } from './types';
import {
  ProductSelection,
  ProductSelectionGraphql,
  ProductSelectionRest,
} from './index';

const validateModel = (
  model: TProductSelectionGraphql | TProductSelectionRest
): void => {
  expect(model).toMatchObject({
    version: expect.any(Number),
    id: expect.any(String),
    createdAt: expect.any(String),
    lastModifiedAt: expect.any(String),
    lastModifiedBy: expect.any(Object),
    createdBy: expect.any(Object),
    key: expect.any(String),
    productCount: expect.any(Number),
    mode: expect.any(String),
    custom: expect.any(Object),
  });
};

describe('ProductSelection model builders', () => {
  it('builds a REST model', () => {
    const restModel = ProductSelectionRest.random().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ProductSelectionGraphql.random().build();

    validateModel(graphqlModel);
    expect(graphqlModel.__typename).toEqual('ProductSelection');
  });
});

describe('ProductSelection model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = ProductSelection.random().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = ProductSelection.random().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      ProductSelection.random().buildGraphql<TProductSelectionGraphql>();

    validateModel(graphqlModel);
    expect(graphqlModel.__typename).toEqual('ProductSelection');
  });
});
