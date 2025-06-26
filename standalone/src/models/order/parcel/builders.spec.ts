import type { TParcel, TParcelRest, TParcelGraphql } from './types';
import { ParcelRest, ParcelGraphql, Parcel } from './index';

const validateCommonFields = (model: TParcelRest | TParcelGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      createdAt: expect.any(String),
      key: null,
      custom: null,
    })
  );
};

const validateRestFields = (model: TParcelRest | TParcel) => {
  validateCommonFields(model);
};

const validateGraphqlFields = (model: TParcelGraphql) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      __typename: 'Parcel',
    })
  );
};

describe('Parcel model builders', () => {
  it('builds a REST model', () => {
    const restModel = ParcelRest.random().buildRest();
    validateRestFields(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ParcelGraphql.random().buildGraphql();
    validateGraphqlFields(graphqlModel);
  });
});

describe('Parcel compatibility builder', () => {
  it('builds a DEFAULT model', () => {
    const defaultModel = Parcel.random().build<TParcelRest>();
    validateRestFields(defaultModel);
  });

  it('builds a REST model', () => {
    const restModel = Parcel.random().buildRest<TParcelRest>();
    validateRestFields(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = Parcel.random().buildGraphql<TParcelGraphql>();
    validateGraphqlFields(graphqlModel);
  });
});
