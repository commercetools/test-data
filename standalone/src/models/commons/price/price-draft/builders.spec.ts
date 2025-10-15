import { TPriceDraftGraphql, TPriceDraftRest } from '../types';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';

const validateModel = (model: TPriceDraftRest | TPriceDraftGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      channel: null,
      country: expect.stringMatching(/^[A-Z]{2}$/),
      custom: null,
      customerGroup: null,
      discounted: null,
      key: null,
      recurrencePolicy: null,
      tiers: null,
      validFrom: expect.dateBeforeToday(),
      validUntil: expect.dateAfterToday(),
    })
  );
};

const validateRestModel = (model: TPriceDraftRest) => {
  validateModel(model);
  expect(model.value).toEqual(
    expect.objectContaining({
      centAmount: expect.any(Number),
      currencyCode: expect.any(String),
    })
  );
};

const validateGraphqlModel = (model: TPriceDraftGraphql) => {
  validateModel(model);
  expect(model.value).toEqual(
    expect.objectContaining({
      centPrecision: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
    })
  );
};

describe('PriceDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = RestModelBuilder().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = GraphqlModelBuilder().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('Channel model compatibility builders', () => {
  it('builds a default model', () => {
    const model = CompatModelBuilder().build();

    validateRestModel(model);
  });

  it('builds a REST model', () => {
    const restModel = CompatModelBuilder().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      CompatModelBuilder().buildGraphql<TPriceDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
