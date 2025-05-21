import { TAttributeSetTypeGraphql, TAttributeSetTypeRest } from './types';
import {
  AttributeSetType,
  AttributeSetTypeGraphql,
  AttributeSetTypeRest,
} from './index';

const validateRestModel = (model: TAttributeSetTypeRest): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'set',
      elementType: expect.objectContaining({
        name: 'boolean',
      }),
    })
  );
};

const validateGraphqlModel = (model: TAttributeSetTypeGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'set',
      elementType: expect.objectContaining({
        __typename: 'BooleanAttributeDefinitionType',
      }),
      __typename: 'SetAttributeDefinitionType',
    })
  );
};

describe('AttributeSetType model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeSetTypeRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeSetTypeGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeSetType model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeSetType.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeSetType.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeSetType.random().buildGraphql<TAttributeSetTypeGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
