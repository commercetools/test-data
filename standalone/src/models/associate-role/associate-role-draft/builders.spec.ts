import type {
  TAssociateRoleDraftRest,
  TAssociateRoleDraftGraphql,
} from '../types';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';

const validateModel = (
  model: TAssociateRoleDraftRest | TAssociateRoleDraftGraphql
) => {
  expect(model).toMatchObject({
    key: expect.any(String),
    name: null,
    buyerAssignable: expect.any(Boolean),
    permissions: expect.any(Array),
    custom: null,
  });
};

describe('AssociateRoleDraft model builders', () => {
  it('should build a valid REST model', () => {
    const model = RestModelBuilder().build();

    validateModel(model);
  });

  it('should build a valid GraphQL model', () => {
    const model = GraphqlModelBuilder().build();

    validateModel(model);
  });
});

describe('AssociateRoleDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = CompatModelBuilder().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = CompatModelBuilder().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      CompatModelBuilder().buildGraphql<TAssociateRoleDraftGraphql>();

    validateModel(graphqlModel);
  });
});
