import {
  attributeConstraints,
  inputHints,
} from '../../attribute-definition/constants';
import { TProductTypeGraphql, TProductTypeRest } from '../types';
import * as presets from './tshirt';

const validateRestModel = (
  model: TProductTypeRest | TProductTypeGraphql
): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'T-shirt Product Type',
      attributes: expect.arrayContaining([
        expect.objectContaining({
          name: 'country-of-origin',
        }),
        expect.objectContaining({
          name: 'size',
        }),
      ]),
    })
  );
};

const validateGraphqlModel = (model: TProductTypeGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'T-shirt Product Type',
      attributeDefinitions: expect.objectContaining({
        results: expect.arrayContaining([
          expect.objectContaining({
            name: 'country-of-origin',
          }),
          expect.objectContaining({
            name: 'size',
          }),
        ]),
      }),
    })
  );
};

describe('ProductType model tshirt preset builders', () => {
  it('builds a REST model', () => {
    const restModel = presets.restPreset().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = presets.graphqlPreset().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('ProductType model tshirt preset compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = presets.compatPreset().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = presets.compatPreset().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = presets
      .compatPreset()
      .buildGraphql<TProductTypeGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
