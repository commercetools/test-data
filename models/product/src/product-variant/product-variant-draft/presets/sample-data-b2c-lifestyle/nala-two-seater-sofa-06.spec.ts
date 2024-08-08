import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import nalaTwoSeaterSofa06 from './nala-two-seater-sofa-06';

describe(`with nalaTwoSeaterSofa06 preset`, () => {
  it(`should return a nalaTwoSeaterSofa06 preset`, () => {
    const nalaTwoSeaterSofa06Preset =
      nalaTwoSeaterSofa06().build<TProductVariantDraft>();
    expect(nalaTwoSeaterSofa06Preset).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "color",
      "value": {
        "de-DE": "Dunkles See grün:#8FBC8F",
        "en-GB": "Dark Sea Green:#8FBC8F",
        "en-US": "Dark Sea Green:#8FBC8F",
      },
    },
    {
      "name": "finish",
      "value": {
        "de-DE": "Schwarz:#000000",
        "en-GB": "Black:#000000",
        "en-US": "Black:#000000",
      },
    },
    {
      "name": "new-arrival",
      "value": true,
    },
    {
      "name": "productspec",
      "value": {
        "de-DE": "- Zweisitzer-Sofa
- Polsterung aus Baumwollleinen",
        "en-GB": "- Two-seater sofa
- Cotton linen upholstery",
        "en-US": "- Two-seater sofa
- Cotton linen upholstery",
      },
    },
  ],
  "images": [
    {
      "dimensions": {
        "h": 3376,
        "w": 6000,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-6.1.jpeg",
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
        "centAmount": 129900,
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
        "centAmount": 129900,
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
        "centAmount": 129900,
        "currencyCode": "USD",
      },
    },
  ],
  "sku": "NTSS-06",
}
`);
  });

  it(`should return a nalaTwoSeaterSofa06 preset when built for graphql`, () => {
    const nalaTwoSeaterSofa06PresetGraphql =
      nalaTwoSeaterSofa06().buildGraphql<TProductVariantDraftGraphql>();
    expect(nalaTwoSeaterSofa06PresetGraphql).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "color",
      "value": "{"en-GB":"Dark Sea Green:#8FBC8F","de-DE":"Dunkles See grün:#8FBC8F","en-US":"Dark Sea Green:#8FBC8F"}",
    },
    {
      "name": "finish",
      "value": "{"en-GB":"Black:#000000","de-DE":"Schwarz:#000000","en-US":"Black:#000000"}",
    },
    {
      "name": "new-arrival",
      "value": "true",
    },
    {
      "name": "productspec",
      "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
    },
  ],
  "images": [
    {
      "dimensions": {
        "height": 3376,
        "width": 6000,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-6.1.jpeg",
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
          "centAmount": 129900,
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
          "centAmount": 129900,
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
          "centAmount": 129900,
          "currencyCode": "USD",
        },
      },
    },
  ],
  "sku": "NTSS-06",
}
`);
  });
});
