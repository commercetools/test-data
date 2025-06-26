import type { TReturnInfo, TReturnInfoRest, TReturnInfoGraphql } from './types';
import { ReturnInfoRest, ReturnInfoGraphql, ReturnInfo } from './index';

const validateCommonFields = (model: TReturnInfoRest | TReturnInfoGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      returnTrackingId: expect.any(String),
      returnDate: expect.any(String),
      items: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          key: null,
          quantity: expect.any(Number),
          type: expect.any(String),
          comment: null,
        }),
      ]),
    })
  );
};

const validateRestFields = (model: TReturnInfoRest | TReturnInfo) => {
  validateCommonFields(model);
};

const validateGraphqlFields = (model: TReturnInfoGraphql) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      __typename: 'ReturnInfo',
      items: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LineItemReturnItem',
        }),
      ]),
    })
  );
};

describe('ReturnInfo model builders', () => {
  it('builds a REST model', () => {
    const restModel = ReturnInfoRest.random().buildRest();
    validateRestFields(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ReturnInfoGraphql.random().buildGraphql();
    validateGraphqlFields(graphqlModel);
  });
});

describe('ReturnInfo compatibility builder', () => {
  it('builds a DEFAULT model', () => {
    const defaultModel = ReturnInfo.random().build<TReturnInfoRest>();
    validateRestFields(defaultModel);
  });

  it('builds a REST model', () => {
    const restModel = ReturnInfo.random().buildRest<TReturnInfoRest>();
    validateRestFields(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ReturnInfo.random().buildGraphql<TReturnInfoGraphql>();
    validateGraphqlFields(graphqlModel);
  });
});
