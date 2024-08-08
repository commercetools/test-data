import type { TProductVariantDraft } from '../../../types';
import rusticCountryDresser01 from './rustic-country-dresser-01';

describe(`with rusticCountryDresser01 preset`, () => {
  it(`should return a rusticCountryDresser01 preset`, () => {
    const rusticCountryDresser01Preset =
      rusticCountryDresser01().build<TProductVariantDraft>();
    expect(rusticCountryDresser01Preset).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": {
        "de-DE": "- 3 small drawers and 4 large drawers
- Nickel drawer handles
- Assembled on site",
        "en-GB": "- 3 small drawers and 4 large drawers
- Nickel drawer handles
- Assembled on site",
        "en-US": "- 3 small drawers and 4 large drawers
- Nickel drawer handles
- Assembled on site",
      },
    },
    {
      "name": "finish",
      "value": {
        "de-DE": "Hell grau:#D3D3D3",
        "en-GB": "Light Gray:#D3D3D3",
        "en-US": "Light Gray:#D3D3D3",
      },
    },
  ],
  "images": [
    {
      "dimensions": {
        "h": 2500,
        "w": 2500,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Dresser-1.2.jpeg",
    },
    {
      "dimensions": {
        "h": 2500,
        "w": 2500,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Dresser-1.3.jpeg",
    },
    {
      "dimensions": {
        "h": 2500,
        "w": 2500,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Dresser-1.1.jpeg",
    },
    {
      "dimensions": {
        "h": 3840,
        "w": 5760,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Dresser-1.4.jpeg",
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
        "centAmount": 159900,
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
        "centAmount": 159900,
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
        "centAmount": 159900,
        "currencyCode": "USD",
      },
    },
  ],
  "sku": "RCD-01",
}
`);
  });

  it(`should return a rusticCountryDresser01 preset when built for graphql`, () => {
    const rusticCountryDresser01PresetGraphql =
      rusticCountryDresser01().buildGraphql<TProductVariantDraft>();
    expect(rusticCountryDresser01PresetGraphql).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": "{"en-US":"- 3 small drawers and 4 large drawers\\n- Nickel drawer handles\\n- Assembled on site","en-GB":"- 3 small drawers and 4 large drawers\\n- Nickel drawer handles\\n- Assembled on site","de-DE":"- 3 small drawers and 4 large drawers\\n- Nickel drawer handles\\n- Assembled on site"}",
    },
    {
      "name": "finish",
      "value": "{"en-US":"Light Gray:#D3D3D3","en-GB":"Light Gray:#D3D3D3","de-DE":"Hell grau:#D3D3D3"}",
    },
  ],
  "images": [
    {
      "dimensions": {
        "height": 2500,
        "width": 2500,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Dresser-1.2.jpeg",
    },
    {
      "dimensions": {
        "height": 2500,
        "width": 2500,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Dresser-1.3.jpeg",
    },
    {
      "dimensions": {
        "height": 2500,
        "width": 2500,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Dresser-1.1.jpeg",
    },
    {
      "dimensions": {
        "height": 3840,
        "width": 5760,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Dresser-1.4.jpeg",
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
          "centAmount": 159900,
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
          "centAmount": 159900,
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
          "centAmount": 159900,
          "currencyCode": "USD",
        },
      },
    },
  ],
  "sku": "RCD-01",
}
`);
  });
});
