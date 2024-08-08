import type { TProductVariantDraft } from '../../../types';
import leahArmchair01 from './leah-armchair-01';

describe(`with leahArmchair01 preset`, () => {
  it(`should return a leahArmchair01 preset`, () => {
    const leahArmchair01Preset = leahArmchair01().build<TProductVariantDraft>();
    expect(leahArmchair01Preset).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": {
        "de-DE": "- Nur chemische Reinigung",
        "en-GB": "- Dry clean only",
        "en-US": "- Dry clean only",
      },
    },
    {
      "name": "color",
      "value": {
        "de-DE": "Grau:#808080",
        "en-GB": "Grey:#808080",
        "en-US": "Gray:#808080",
      },
    },
    {
      "name": "finish",
      "value": {
        "de-DE": "Bräunen:#D2B48C",
        "en-GB": "Tan:#D2B48C",
        "en-US": "Tan:#D2B48C",
      },
    },
  ],
  "images": [
    {
      "dimensions": {
        "h": 3200,
        "w": 2400,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Leah_Armchair-1.1.jpeg",
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
        "centAmount": 39900,
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
        "centAmount": 39900,
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
        "centAmount": 39900,
        "currencyCode": "USD",
      },
    },
  ],
  "sku": "LAMR-03",
}
`);
  });

  it(`should return a leahArmchair01 preset when built for graphql`, () => {
    const leahArmchair01PresetGraphql =
      leahArmchair01().buildGraphql<TProductVariantDraft>();
    expect(leahArmchair01PresetGraphql).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": "{"en-GB":"- Dry clean only","de-DE":"- Nur chemische Reinigung","en-US":"- Dry clean only"}",
    },
    {
      "name": "color",
      "value": "{"en-GB":"Grey:#808080","de-DE":"Grau:#808080","en-US":"Gray:#808080"}",
    },
    {
      "name": "finish",
      "value": "{"en-GB":"Tan:#D2B48C","de-DE":"Bräunen:#D2B48C","en-US":"Tan:#D2B48C"}",
    },
  ],
  "images": [
    {
      "dimensions": {
        "height": 3200,
        "width": 2400,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Leah_Armchair-1.1.jpeg",
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
          "centAmount": 39900,
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
          "centAmount": 39900,
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
          "centAmount": 39900,
          "currencyCode": "USD",
        },
      },
    },
  ],
  "sku": "LAMR-03",
}
`);
  });
});
