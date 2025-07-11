import {
  TAssociateRoleDraftRest,
  TAssociateRoleDraftGraphql,
} from '../../types';
import { restPreset, graphqlPreset, compatPreset } from './empty';

const expectFieldsUndefined = (
  model: TAssociateRoleDraftRest | TAssociateRoleDraftGraphql
) => {
  expect(model).toMatchObject({
    name: undefined,
    buyerAssignable: undefined,
    permissions: undefined,
    custom: undefined,
  });
};

describe('AssociateRoleDraft empty preset', () => {
  it('[REST] sets optional fields to undefined', () => {
    const model = restPreset().build();
    expectFieldsUndefined(model);
  });

  it('[GraphQL] sets optional fields to undefined', () => {
    const model = graphqlPreset().build();
    expectFieldsUndefined(model);
  });

  it('[Compat - REST] sets optional fields to undefined', () => {
    const model = compatPreset().buildRest();
    expectFieldsUndefined(model);
  });

  it('[Compat - GraphQL] sets optional fields to undefined', () => {
    const model = compatPreset().buildGraphql();
    expectFieldsUndefined(model);
  });
});
