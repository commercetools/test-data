import {
  TAttributeSetTypeDraftGraphql,
  TAttributeSetTypeDraftRest,
} from '../types';
import {
  AttributeSetTypeDraft,
  AttributeSetTypeDraftGraphql,
  AttributeSetTypeDraftRest,
} from './index';

const validateRestModel = (model: TAttributeSetTypeDraftRest): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'set',
      elementType: expect.objectContaining({
        name: 'boolean',
      }),
    })
  );
};

const validateGraphqlModel = (model: TAttributeSetTypeDraftGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      elementType: expect.objectContaining({
        dummy: 'boolean',
      }),
    })
  );
};

describe('AttributeSetTypeDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeSetTypeDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeSetTypeDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeSetTypeDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeSetTypeDraft.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeSetTypeDraft.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeSetTypeDraft.random().buildGraphql<TAttributeSetTypeDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
