import type { TAssociateRoleRest, TAssociateRoleGraphql } from './types';
import {
  AssociateRole,
  AssociateRoleGraphql,
  AssociateRoleRest,
} from './index';

const validateModel = (model: TAssociateRoleGraphql | TAssociateRoleRest) => {
  expect(model).toMatchObject({
    buyerAssignable: expect.any(Boolean),
    createdAt: expect.any(String),
    createdBy: expect.objectContaining({
      clientId: expect.any(String),
    }),
    custom: null,
    id: expect.any(String),
    key: expect.any(String),
    lastModifiedAt: expect.any(String),
    lastModifiedBy: expect.objectContaining({
      clientId: expect.any(String),
    }),
    name: null,
    permissions: [],
    version: expect.any(Number),
  });
};

describe('AssociateRole model builders', () => {
  it('should build a valid REST model', () => {
    const model = AssociateRoleRest.random().build();

    validateModel(model);
  });

  it('should build a valid GraphQL model', () => {
    const model = AssociateRoleGraphql.random().build();

    validateModel(model);
    expect(model.__typename).toBe('AssociateRole');
  });
});

describe('AssociateRole model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AssociateRole.random().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AssociateRole.random().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AssociateRole.random().buildGraphql<TAssociateRoleGraphql>();

    validateModel(graphqlModel);
  });
});
