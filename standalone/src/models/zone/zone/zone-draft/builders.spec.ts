import type { TZoneDraftGraphql, TZoneDraftRest } from '../types';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';

const validateModel = (model: TZoneDraftRest | TZoneDraftGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: expect.any(String),
      key: null,
      description: null,
      locations: [],
    })
  );
};

describe('ZoneDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = RestModelBuilder().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = GraphqlModelBuilder().build();

    validateModel(graphqlModel);
  });
});

describe('ZoneDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = CompatModelBuilder().build<TZoneDraftRest>();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = CompatModelBuilder().buildRest<TZoneDraftRest>();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = CompatModelBuilder().buildGraphql<TZoneDraftGraphql>();

    validateModel(graphqlModel);
  });
});
