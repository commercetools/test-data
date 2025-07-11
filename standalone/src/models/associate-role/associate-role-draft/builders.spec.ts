import type {
  TAssociateRoleDraftRest,
  TAssociateRoleDraftGraphql,
  TAssociateRoleDraft,
} from '../types';
import {
  AssociateRoleDraftRest,
  AssociateRoleDraftGraphql,
  AssociateRoleDraft,
} from './index';

const validateFields = (
  model: TAssociateRoleDraftRest | TAssociateRoleDraftGraphql
) => {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      buyerAssignable: null,
      name: null,
      permissions: null,
      custom: null,
    })
  );
};

describe('AssociateRoleDraft builders', () => {
  it('builds a REST model', () => {
    const model = AssociateRoleDraftRest.random().build();
    validateFields(model);
  });

  it('builds a GraphQL model', () => {
    const model = AssociateRoleDraftGraphql.random().build();
    validateFields(model);
  });
});

describe('AssociateRoleDraft compat builder', () => {
  it('builds REST via compat', () => {
    const model =
      AssociateRoleDraft.random().buildRest<TAssociateRoleDraftRest>();
    validateFields(model);
  });

  it('builds GraphQL via compat', () => {
    const model =
      AssociateRoleDraft.random().buildGraphql<TAssociateRoleDraftGraphql>();
    validateFields(model);
  });
});
