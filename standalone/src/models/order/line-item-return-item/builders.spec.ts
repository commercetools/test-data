import type {
  TLineItemReturnItem,
  TLineItemReturnItemRest,
  TLineItemReturnItemGraphql,
} from './types';
import {
  LineItemReturnItemRest,
  LineItemReturnItemGraphql,
  LineItemReturnItem,
} from './index';

const validateCommonFields = (
  model: TLineItemReturnItemRest | TLineItemReturnItemGraphql
) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      createdAt: expect.any(String),
      key: null,
      custom: null,
    })
  );
};

const validateRestFields = (
  model: TLineItemReturnItemRest | TLineItemReturnItem
) => {
  validateCommonFields(model);
};

const validateGraphqlFields = (model: TLineItemReturnItemGraphql) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      __typename: 'LineItemReturnItem',
    })
  );
};

describe('LineItemReturnItem model builders', () => {
  it('builds a REST model', () => {
    const restModel = LineItemReturnItemRest.random().buildRest();
    validateRestFields(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = LineItemReturnItemGraphql.random().buildGraphql();
    validateGraphqlFields(graphqlModel);
  });
});

describe('LineItemReturnItem compatibility builder', () => {
  it('builds a DEFAULT model', () => {
    const defaultModel =
      LineItemReturnItem.random().build<TLineItemReturnItemRest>();
    validateRestFields(defaultModel);
  });

  it('builds a REST model', () => {
    const restModel =
      LineItemReturnItem.random().buildRest<TLineItemReturnItemRest>();
    validateRestFields(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      LineItemReturnItem.random().buildGraphql<TLineItemReturnItemGraphql>();
    validateGraphqlFields(graphqlModel);
  });
});
