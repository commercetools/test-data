import { TTaxRateDraftGraphql, TTaxRateDraftRest } from '../../../types';
import * as withCountryCodeUsNoStatePresets from './with-country-code-us-no-state';

const validateModel = (model: TTaxRateDraftGraphql | TTaxRateDraftRest) => {
  expect(model).toMatchObject({
    country: 'US',
    state: null,
  });
};

describe('TaxRateDraft withCountryCodeUsNoState preset builders', () => {
  it('builds a REST model', () => {
    const restModel = withCountryCodeUsNoStatePresets.restPreset().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = withCountryCodeUsNoStatePresets
      .graphqlPreset()
      .build();

    validateModel(graphqlModel);
  });
});

describe('TaxRateDraft withCountryCodeUsNoState preset compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = withCountryCodeUsNoStatePresets.compatPreset().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = withCountryCodeUsNoStatePresets
      .compatPreset()
      .buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = withCountryCodeUsNoStatePresets
      .compatPreset()
      .buildGraphql<TTaxRateDraftGraphql>();

    validateModel(graphqlModel);
  });
});
