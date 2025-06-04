import { TAttributeTextTypeGraphql, TAttributeTextTypeRest } from './types';
import {
  AttributeTextType,
  AttributeTextTypeGraphql,
  AttributeTextTypeRest,
} from './index';

const validateModel = (
  model: TAttributeTextTypeRest | TAttributeTextTypeGraphql
): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'text',
    })
  );
};

describe('AttributeTextType model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeTextTypeRest.random().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeTextTypeGraphql.random().build();

    validateModel(graphqlModel);
    expect(graphqlModel.__typename).toEqual('TextAttributeDefinitionType');
  });
});

describe('AttributeTextType model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeTextType.random().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeTextType.random().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeTextType.random().buildGraphql<TAttributeTextTypeGraphql>();

    validateModel(graphqlModel);
    expect(graphqlModel.__typename).toEqual('TextAttributeDefinitionType');
  });
});
