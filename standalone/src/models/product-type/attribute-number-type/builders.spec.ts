import { TAttributeNumberTypeGraphql, TAttributeNumberTypeRest } from './types';
import {
  AttributeNumberType,
  AttributeNumberTypeGraphql,
  AttributeNumberTypeRest,
} from './index';

const validateModel = (
  model: TAttributeNumberTypeRest | TAttributeNumberTypeGraphql
): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'number',
    })
  );
};

describe('AttributeMoneyType model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeNumberTypeRest.random().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeNumberTypeGraphql.random().build();

    validateModel(graphqlModel);
    expect(graphqlModel.__typename).toEqual('NumberAttributeDefinitionType');
  });
});

describe('AttributeNumberType model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeNumberType.random().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeNumberType.random().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeNumberType.random().buildGraphql<TAttributeNumberTypeGraphql>();

    validateModel(graphqlModel);
    expect(graphqlModel.__typename).toEqual('NumberAttributeDefinitionType');
  });
});
