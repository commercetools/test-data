import { TAttributeMoneyTypeGraphql, TAttributeMoneyTypeRest } from './types';
import {
  AttributeMoneyType,
  AttributeMoneyTypeGraphql,
  AttributeMoneyTypeRest,
} from './index';

const validateModel = (
  model: TAttributeMoneyTypeRest | TAttributeMoneyTypeGraphql
): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'money',
    })
  );
};

describe('AttributeMoneyType model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeMoneyTypeRest.random().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeMoneyTypeGraphql.random().build();

    validateModel(graphqlModel);
    expect(graphqlModel.__typename).toEqual('MoneyAttributeDefinitionType');
  });
});

describe('AttributeMoneyType model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeMoneyType.random().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeMoneyType.random().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeMoneyType.random().buildGraphql<TAttributeMoneyTypeGraphql>();

    validateModel(graphqlModel);
    expect(graphqlModel.__typename).toEqual('MoneyAttributeDefinitionType');
  });
});
