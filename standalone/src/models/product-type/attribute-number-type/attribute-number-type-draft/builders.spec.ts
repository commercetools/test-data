import {
  TAttributeNumberTypeDraftGraphql,
  TAttributeNumberTypeDraftRest,
} from '../types';
import {
  AttributeNumberTypeDraft,
  AttributeNumberTypeDraftGraphql,
  AttributeNumberTypeDraftRest,
} from './index';

const validateRestModel = (model: TAttributeNumberTypeDraftRest): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'number',
    })
  );
};

const validateGraphqlModel = (
  model: TAttributeNumberTypeDraftGraphql
): void => {
  expect(model).toEqual(
    expect.objectContaining({
      dummy: null,
    })
  );
};

describe('AttributeNumberTypeDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeNumberTypeDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeNumberTypeDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeNumberTypeDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeNumberTypeDraft.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeNumberTypeDraft.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeNumberTypeDraft.random().buildGraphql<TAttributeNumberTypeDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
