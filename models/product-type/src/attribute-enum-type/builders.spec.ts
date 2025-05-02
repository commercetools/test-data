import { TAttributeEnumTypeGraphql, TAttributeEnumTypeRest } from './types';
import {
  AttributeEnumType,
  AttributeEnumTypeGraphql,
  AttributeEnumTypeRest,
} from './index';

const validateRestModel = (model: TAttributeEnumTypeRest): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'enum',
      values: expect.arrayContaining([
        expect.objectContaining({
          key: expect.any(String),
          label: expect.any(String),
        }),
      ]),
    })
  );
};

const validateGraphqlModel = (model: TAttributeEnumTypeGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'enum',
      values: expect.objectContaining({
        results: [
          expect.objectContaining({
            key: expect.any(String),
            label: expect.any(String),
            __typename: 'PlainEnumValue',
          }),
        ],
        total: 1,
        __typename: 'PlainEnumValueResult',
      }),
      __typename: 'EnumAttributeDefinitionType',
    })
  );
};

describe('AttributeEnumType model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeEnumTypeRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeEnumTypeGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeEnumType model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeEnumType.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeEnumType.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeEnumType.random().buildGraphql<TAttributeEnumTypeGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
