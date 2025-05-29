import {
  TAttributeMoneyTypeDraftGraphql,
  TAttributeMoneyTypeDraftRest,
} from '../types';
import {
  AttributeMoneyTypeDraft,
  AttributeMoneyTypeDraftGraphql,
  AttributeMoneyTypeDraftRest,
} from './index';

const validateRestModel = (model: TAttributeMoneyTypeDraftRest): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'money',
    })
  );
};

const validateGraphqlModel = (model: TAttributeMoneyTypeDraftGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      dummy: 'money',
    })
  );
};

describe('AttributeMoneyTypeDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeMoneyTypeDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeMoneyTypeDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeMoneyType model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeMoneyTypeDraft.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeMoneyTypeDraft.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeMoneyTypeDraft.random().buildGraphql<TAttributeMoneyTypeDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
