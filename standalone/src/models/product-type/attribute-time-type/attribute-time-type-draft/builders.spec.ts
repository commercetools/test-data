import {
  TAttributeTimeTypeDraftGraphql,
  TAttributeTimeTypeDraftRest,
} from '../types';
import {
  AttributeTimeTypeDraft,
  AttributeTimeTypeDraftGraphql,
  AttributeTimeTypeDraftRest,
} from './index';

const validateRestModel = (model: TAttributeTimeTypeDraftRest): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'time',
    })
  );
};

const validateGraphqlModel = (model: TAttributeTimeTypeDraftGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      dummy: 'time',
    })
  );
};

describe('AttributeTextTypeDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeTimeTypeDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeTimeTypeDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeTextTypeDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeTimeTypeDraft.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeTimeTypeDraft.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeTimeTypeDraft.random().buildGraphql<TAttributeTimeTypeDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
