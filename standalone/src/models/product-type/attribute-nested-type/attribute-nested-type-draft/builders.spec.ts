import {
  TAttributeNestedTypeDraftGraphql,
  TAttributeNestedTypeDraftRest,
} from '../types';
import {
  AttributeNestedTypeDraftGraphql,
  AttributeNestedTypeDraftRest,
} from './index';

const validateRestModel = (model: TAttributeNestedTypeDraftRest): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'nested',
      typeReference: expect.objectContaining({
        id: expect.any(String),
        typeId: 'product-type',
      }),
    })
  );
};

const validateGraphqlModel = (
  model: TAttributeNestedTypeDraftGraphql
): void => {
  expect(model).toEqual(
    expect.objectContaining({
      dummy: 'nested',
    })
  );
};

describe('AttributeNestedTypeDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeNestedTypeDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeNestedTypeDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});
