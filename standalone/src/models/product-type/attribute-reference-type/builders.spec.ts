import { attributeReferenceTypeId } from './constants';
import {
  TAttributeReferenceTypeGraphql,
  TAttributeReferenceTypeRest,
} from './types';
import {
  AttributeReferenceType,
  AttributeReferenceTypeGraphql,
  AttributeReferenceTypeRest,
} from './index';

const validateModel = (
  model: TAttributeReferenceTypeRest | TAttributeReferenceTypeGraphql
): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'reference',
    })
  );
  expect(Object.values(attributeReferenceTypeId)).toContain(
    model.referenceTypeId
  );
};

describe('AttributeReferenceType model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeReferenceTypeRest.random().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeReferenceTypeGraphql.random().build();

    validateModel(graphqlModel);
    expect(graphqlModel.__typename).toEqual('ReferenceAttributeDefinitionType');
  });
});

describe('AttributeReferenceType model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeReferenceType.random().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeReferenceType.random().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeReferenceType.random().buildGraphql<TAttributeReferenceTypeGraphql>();

    validateModel(graphqlModel);
    expect(graphqlModel.__typename).toEqual('ReferenceAttributeDefinitionType');
  });
});
