import { TProductSelectionGraphql, TProductSelectionRest } from './types';
import {
  ProductSelection,
  ProductSelectionGraphql,
  ProductSelectionRest,
} from './index';

const validateRestModel = (model: TProductSelectionRest): void => {
  expect(model).toMatchObject({
    version: expect.any(Number),
    id: expect.any(String),
    createdAt: expect.any(String),
    lastModifiedAt: expect.any(String),
    lastModifiedBy: expect.objectContaining({
      externalUserId: expect.any(String),
      anonymousId: expect.any(String),
      clientId: expect.any(String),
      customer: expect.objectContaining({
        id: expect.any(String),
        typeId: 'customer',
        obj: expect.objectContaining({
          id: expect.any(String),
        }),
      }),
    }),
    createdBy: expect.objectContaining({
      externalUserId: expect.any(String),
      anonymousId: expect.any(String),
      clientId: expect.any(String),
      customer: expect.objectContaining({
        id: expect.any(String),
        typeId: 'customer',
        obj: expect.objectContaining({
          id: expect.any(String),
        }),
      }),
    }),
    key: expect.any(String),
    productCount: expect.any(Number),
    mode: expect.any(String),
    custom: expect.any(Object),
    name: expect.objectContaining({
      en: expect.any(String),
    }),
  });
};

const validateGraphqlModel = (model: TProductSelectionGraphql): void => {
  expect(model).toMatchObject({
    version: expect.any(Number),
    id: expect.any(String),
    createdAt: expect.any(String),
    lastModifiedAt: expect.any(String),
    lastModifiedBy: expect.objectContaining({
      __typename: 'Initiator',
    }),
    createdBy: expect.objectContaining({
      __typename: 'Initiator',
    }),
    nameAllLocales: expect.arrayContaining([
      expect.objectContaining({
        __typename: 'LocalizedString',
      }),
    ]),
    name: expect.any(String),
    key: expect.any(String),
    productCount: expect.any(Number),
    mode: expect.any(String),
    custom: expect.any(Object),
    productRefs: expect.objectContaining({
      __typename: 'SelectionOfProductQueryResult',
      results: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'ProductOfSelection',
        }),
      ]),
    }),
    __typename: 'ProductSelection',
  });
};

describe('ProductSelection model builders', () => {
  it('builds a REST model', () => {
    const restModel = ProductSelectionRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ProductSelectionGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('ProductSelection model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = ProductSelection.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = ProductSelection.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      ProductSelection.random().buildGraphql<TProductSelectionGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
