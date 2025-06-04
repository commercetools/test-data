import { TAttributeTimeTypeGraphql, TAttributeTimeTypeRest } from './types';
import {
  AttributeTimeType,
  AttributeTimeTypeGraphql,
  AttributeTimeTypeRest,
} from './index';

const validateModel = (
  model: TAttributeTimeTypeRest | TAttributeTimeTypeGraphql
): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'time',
    })
  );
};

describe('AttributeTimeType model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeTimeTypeRest.random().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeTimeTypeGraphql.random().build();

    validateModel(graphqlModel);
    expect(graphqlModel.__typename).toEqual('TimeAttributeDefinitionType');
  });
});

describe('AttributeTimeType model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeTimeType.random().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeTimeType.random().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeTimeType.random().buildGraphql<TAttributeTimeTypeGraphql>();

    validateModel(graphqlModel);
    expect(graphqlModel.__typename).toEqual('TimeAttributeDefinitionType');
  });
});
