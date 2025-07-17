import type {
  TAssociateRoleDraftRest,
  TAssociateRoleDraftGraphql,
} from '../../types';
import { restPreset, graphqlPreset, compatPreset } from './empty';

const validateModel = (
  model: TAssociateRoleDraftRest | TAssociateRoleDraftGraphql
) => {
  expect(model).toMatchObject({
    key: expect.any(String),
    name: undefined,
    buyerAssignable: expect.any(Boolean),
    permissions: [],
    custom: undefined,
  });
};

describe('AssociateRoleDraft model builders', () => {
  it('should build a valid REST model', () => {
    const model = restPreset().build();

    validateModel(model);
  });

  it('should build a valid GraphQL model', () => {
    const model = graphqlPreset().build();

    validateModel(model);
  });
});

describe('AssociateRoleDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = compatPreset().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = compatPreset().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      compatPreset().buildGraphql<TAssociateRoleDraftGraphql>();

    validateModel(graphqlModel);
  });
});
