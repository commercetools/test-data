import {
  TAttributeTextTypeDraftGraphql,
  TAttributeTextTypeDraftRest,
} from '../types';
import {
  AttributeTextTypeDraft,
  AttributeTextTypeDraftGraphql,
  AttributeTextTypeDraftRest,
} from './index';

const validateRestModel = (model: TAttributeTextTypeDraftRest): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'text',
    })
  );
};

const validateGraphqlModel = (model: TAttributeTextTypeDraftGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      dummy: null,
    })
  );
};

describe('AttributeTextTypeDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeTextTypeDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeTextTypeDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeTextTypeDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeTextTypeDraft.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeTextTypeDraft.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeTextTypeDraft.random().buildGraphql<TAttributeTextTypeDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
