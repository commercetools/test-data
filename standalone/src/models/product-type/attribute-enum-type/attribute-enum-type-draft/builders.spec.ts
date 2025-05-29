import {
  TAttributeEnumTypeDraftGraphql,
  TAttributeEnumTypeDraftRest,
} from '../types';
import {
  AttributeEnumTypeDraft,
  AttributeEnumTypeDraftGraphql,
  AttributeEnumTypeDraftRest,
} from './index';

const validateModel = (
  model: TAttributeEnumTypeDraftRest | TAttributeEnumTypeDraftGraphql
): void => {
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

describe('AttributeEnumTypeDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeEnumTypeDraftRest.random().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeEnumTypeDraftGraphql.random().build();

    validateModel(graphqlModel);
  });
});

describe('AttributeEnumTypeDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeEnumTypeDraft.random().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeEnumTypeDraft.random().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeEnumTypeDraft.random().buildGraphql<TAttributeEnumTypeDraftGraphql>();

    validateModel(graphqlModel);
  });
});
