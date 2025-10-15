import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import { TPriceRest, TPriceGraphql } from './types';

const validateRestModel = (model: TPriceRest) => {
  expect(model).toEqual(
    expect.objectContaining({
      channel: null,
      country: expect.stringMatching(/^[A-Z]{2}$/),
      custom: null,
      customerGroup: null,
      discounted: null,
      key: null,
      id: expect.any(String),
      recurrencePolicy: null,
      tiers: null,
      validFrom: expect.any(String),
      validUntil: expect.any(String),
      value: expect.objectContaining({
        type: 'centPrecision',
      }),
    })
  );
  // Dates extra checks
  expect(new Date(model.validFrom!)).toEqual(expect.dateBeforeToday());
  expect(new Date(model.validUntil as string)).toEqual(expect.dateAfterToday());
};

const validateGraphqlModel = (model: TPriceGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      channel: null,
      channelRef: null,
      country: expect.stringMatching(/^[A-Z]{2}$/),
      custom: null,
      customerGroup: null,
      customerGroupRef: null,
      discounted: null,
      id: expect.any(String),
      key: null,
      recurrencePolicy: null,
      recurrencePolicyRef: null,
      tiers: null,
      validFrom: expect.any(String),
      validUntil: expect.any(String),
      value: expect.objectContaining({
        type: 'centPrecision',
        __typename: 'Money',
      }),
      __typename: 'ProductPrice',
    })
  );
  // Dates extra checks
  expect(new Date(model.validFrom!)).toEqual(expect.dateBeforeToday());
  expect(new Date(model.validUntil as string)).toEqual(expect.dateAfterToday());
};

describe('Price model builders', () => {
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
    const graphqlModel = CompatModelBuilder().buildGraphql<TPriceGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
