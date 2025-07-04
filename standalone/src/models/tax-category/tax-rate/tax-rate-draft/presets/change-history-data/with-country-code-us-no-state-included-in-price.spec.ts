import { TTaxRateDraftGraphql, TTaxRateDraftRest } from '../../../types';
import * as withCountryCodeUsNoStateIncludedInPricePresets from './with-country-code-us-no-state-included-in-price';

const validateModel = (model: TTaxRateDraftGraphql | TTaxRateDraftRest) => {
  expect(model).toMatchObject({
    country: 'US',
    includedInPrice: true,
    state: null,
  });
};

describe('TaxRateDraft withCountryCodeUsNoStateIncludedInPricePresets preset builders', () => {
  it('builds a REST model', () => {
    const restModel = withCountryCodeUsNoStateIncludedInPricePresets
      .restPreset()
      .build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = withCountryCodeUsNoStateIncludedInPricePresets
      .graphqlPreset()
      .build();

    validateModel(graphqlModel);
  });
});

describe('TaxRateDraft withCountryCodeUsNoStateIncludedInPricePresets preset compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = withCountryCodeUsNoStateIncludedInPricePresets
      .compatPreset()
      .build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = withCountryCodeUsNoStateIncludedInPricePresets
      .compatPreset()
      .buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = withCountryCodeUsNoStateIncludedInPricePresets
      .compatPreset()
      .buildGraphql<TTaxRateDraftGraphql>();

    validateModel(graphqlModel);
  });
});
