import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import doubleWalledEspressoGlass01 from './double-walled-espresso-glass-01';

describe(`with doubleWalledEspressoGlass01 preset`, () => {
  it(`should return a doubleWalledEspressoGlass01 preset`, () => {
    const doubleWalledEspressoGlass01Preset =
      doubleWalledEspressoGlass01().build<TProductVariantDraft>();
    expect(doubleWalledEspressoGlass01Preset).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": {
        "de-DE": "- Das Set enthält 4 Gläser",
        "en-GB": "- Set includes 4 glasses",
        "en-US": "- Set includes 4 glasses",
      },
    },
    {
      "name": "color",
      "value": {
        "de-DE": "Transparent:transparent",
        "en-GB": "Transparent:transparent",
        "en-US": "Transparent:transparent",
      },
    },
    {
      "name": "finish",
      "value": {
        "de-DE": "Glas:transparent",
        "en-GB": "Glass:transparent",
        "en-US": "Glass:transparent",
      },
    },
  ],
  "images": [
    {
      "dimensions": {
        "h": 3098,
        "w": 3371,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Double_Walled_Espresso_Glass-1.1.jpeg",
    },
    {
      "dimensions": {
        "h": 1481,
        "w": 987,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Double_Walled_Espresso_Glass-1.2.jpeg",
    },
  ],
  "key": undefined,
  "prices": [
    {
      "channel": undefined,
      "country": "DE",
      "custom": undefined,
      "customerGroup": undefined,
      "discounted": undefined,
      "key": undefined,
      "tiers": undefined,
      "validFrom": undefined,
      "validUntil": undefined,
      "value": {
        "centAmount": 4299,
        "currencyCode": "EUR",
      },
    },
    {
      "channel": undefined,
      "country": "GB",
      "custom": undefined,
      "customerGroup": undefined,
      "discounted": undefined,
      "key": undefined,
      "tiers": undefined,
      "validFrom": undefined,
      "validUntil": undefined,
      "value": {
        "centAmount": 4299,
        "currencyCode": "GBP",
      },
    },
    {
      "channel": undefined,
      "country": "US",
      "custom": undefined,
      "customerGroup": undefined,
      "discounted": undefined,
      "key": undefined,
      "tiers": undefined,
      "validFrom": undefined,
      "validUntil": undefined,
      "value": {
        "centAmount": 4299,
        "currencyCode": "USD",
      },
    },
  ],
  "sku": "DWEG-09",
}
`);
  });

  it(`should return a doubleWalledEspressoGlass01 preset when built for graphql`, () => {
    const doubleWalledEspressoGlass01PresetGraphql =
      doubleWalledEspressoGlass01().buildGraphql<TProductVariantDraftGraphql>();
    expect(doubleWalledEspressoGlass01PresetGraphql).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": "{"en-GB":"- Set includes 4 glasses","de-DE":"- Das Set enthält 4 Gläser","en-US":"- Set includes 4 glasses"}",
    },
    {
      "name": "color",
      "value": "{"en-GB":"Transparent:transparent","de-DE":"Transparent:transparent","en-US":"Transparent:transparent"}",
    },
    {
      "name": "finish",
      "value": "{"en-GB":"Glass:transparent","de-DE":"Glas:transparent","en-US":"Glass:transparent"}",
    },
  ],
  "images": [
    {
      "dimensions": {
        "height": 3098,
        "width": 3371,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Double_Walled_Espresso_Glass-1.1.jpeg",
    },
    {
      "dimensions": {
        "height": 1481,
        "width": 987,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Double_Walled_Espresso_Glass-1.2.jpeg",
    },
  ],
  "key": undefined,
  "prices": [
    {
      "channel": undefined,
      "country": "DE",
      "custom": undefined,
      "customerGroup": undefined,
      "discounted": undefined,
      "key": undefined,
      "tiers": undefined,
      "validFrom": undefined,
      "validUntil": undefined,
      "value": {
        "centPrecision": {
          "centAmount": 4299,
          "currencyCode": "EUR",
        },
      },
    },
    {
      "channel": undefined,
      "country": "GB",
      "custom": undefined,
      "customerGroup": undefined,
      "discounted": undefined,
      "key": undefined,
      "tiers": undefined,
      "validFrom": undefined,
      "validUntil": undefined,
      "value": {
        "centPrecision": {
          "centAmount": 4299,
          "currencyCode": "GBP",
        },
      },
    },
    {
      "channel": undefined,
      "country": "US",
      "custom": undefined,
      "customerGroup": undefined,
      "discounted": undefined,
      "key": undefined,
      "tiers": undefined,
      "validFrom": undefined,
      "validUntil": undefined,
      "value": {
        "centPrecision": {
          "centAmount": 4299,
          "currencyCode": "USD",
        },
      },
    },
  ],
  "sku": "DWEG-09",
}
`);
  });
});
