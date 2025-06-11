import { TStoreDraftGraphql, TStoreDraftRest } from '../../types';
import { restPreset, graphqlPreset, compatPreset } from './empty';

const validateCommonFields = (model: TStoreDraftRest | TStoreDraftGraphql) => {
  expect(model).toMatchObject({
    key: expect.any(String),
    name: undefined,
    languages: undefined,
    countries: undefined,
    distributionChannels: undefined,
    supplyChannels: undefined,
    productSelections: undefined,
    custom: undefined,
  });
};

describe('store with empty fields', () => {
  it('[REST] should set all specified fields to undefined', () => {
    const model = restPreset().buildRest();
    validateCommonFields(model);
  });

  it('[GraphQL] should set all specified fields to undefined', () => {
    const model = graphqlPreset().buildGraphql();
    validateCommonFields(model);
  });

  it('[Compat - DEFAULT] should set all specified fields to undefined', () => {
    const model = compatPreset().build();
    validateCommonFields(model);
  });

  it('[Compat - REST] should set all specified fields to undefined', () => {
    const model = compatPreset().buildRest();
    validateCommonFields(model);
  });

  it('[Compat - GraphQL] should set all specified fields to undefined', () => {
    const model = compatPreset().buildGraphql();
    validateCommonFields(model);
  });
});
