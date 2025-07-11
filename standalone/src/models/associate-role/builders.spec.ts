import type { TAssociateRoleRest, TAssociateRoleGraphql } from './types';
import {
  AssociateRoleRest,
  AssociateRoleGraphql,
  AssociateRole,
} from './index';

const validateRest = (model: TAssociateRoleRest): void => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      version: expect.any(Number),
      key: expect.any(String),
      name: null,
      buyerAssignable: expect.any(Boolean),
      permissions: expect.any(Array),
      custom: null,
      createdAt: expect.any(String),
      createdBy: null,
      lastModifiedAt: expect.any(String),
      lastModifiedBy: null,
    })
  );
};

const validateGraphql = (model: TAssociateRoleGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      __typename: 'AssociateRole',
      id: expect.any(String),
      version: expect.any(Number),
      key: expect.any(String),
      name: null,
      buyerAssignable: expect.any(Boolean),
      permissions: expect.any(Array),
      custom: null,
      createdAt: expect.any(String),
      createdBy: null,
      lastModifiedAt: expect.any(String),
      lastModifiedBy: null,
    })
  );
};

describe('AssociateRole model builders', () => {
  it('builds a REST model', () => {
    const model = AssociateRoleRest.random().build();
    validateRest(model);
  });

  it('builds a GraphQL model', () => {
    const model = AssociateRoleGraphql.random().build();
    validateGraphql(model);
  });
});

describe('AssociateRole compat builders', () => {
  it('builds default (REST) model', () => {
    const model = AssociateRole.random().build();
    validateRest(model);
  });

  it('builds REST model via compat', () => {
    const model = AssociateRole.random().buildRest();
    validateRest(model);
  });

  it('builds GraphQL model via compat', () => {
    const model = AssociateRole.random().buildGraphql<TAssociateRoleGraphql>();
    validateGraphql(model);
  });
});
