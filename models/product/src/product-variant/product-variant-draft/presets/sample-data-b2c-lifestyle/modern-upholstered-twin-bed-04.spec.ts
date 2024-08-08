import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernUpholsteredTwinBed04 from './modern-upholstered-twin-bed-04';

describe(`with modernUpholsteredTwinBed04 preset`, () => {
  it(`should return a modernUpholsteredTwinBed04 preset`, () => {
    const modernUpholsteredTwinBed04Preset =
      modernUpholsteredTwinBed04().build<TProductVariantDraft>();
    expect(modernUpholsteredTwinBed04Preset).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": {
        "de-DE": "- Cotton upholstery 
- Manufactured wood
- Twin size
- Assembled on site",
        "en-GB": "- Cotton upholstery 
- Manufactured wood
- Twin size
- Assembled on site",
        "en-US": "- Cotton upholstery 
- Manufactured wood
- Twin size
- Assembled on site",
      },
    },
    {
      "name": "finish",
      "value": {
        "de-DE": "Helles Schiefer grau:#778899",
        "en-GB": "Lightslate Grey:#778899",
        "en-US": "Lightslate Gray:#778899",
      },
    },
    {
      "name": "color",
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
        "h": 3000,
        "w": 3000,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-4.2.jpeg",
    },
    {
      "dimensions": {
        "h": 3000,
        "w": 3000,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-4.1.jpeg",
    },
    {
      "dimensions": {
        "h": 3000,
        "w": 3000,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-4.3.jpeg",
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
        "centAmount": 45000,
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
        "centAmount": 45000,
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
        "centAmount": 45000,
        "currencyCode": "USD",
      },
    },
  ],
  "sku": "MUTB-04",
}
`);
  });

  it(`should return a modernUpholsteredTwinBed04 preset when built for graphql`, () => {
    const modernUpholsteredTwinBed04PresetGraphql =
      modernUpholsteredTwinBed04().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernUpholsteredTwinBed04PresetGraphql).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": "{"en-US":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site","en-GB":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site","de-DE":"- Cotton upholstery \\n- Manufactured wood\\n- Twin size\\n- Assembled on site"}",
    },
    {
      "name": "finish",
      "value": "{"en-US":"Lightslate Gray:#778899","en-GB":"Lightslate Grey:#778899","de-DE":"Helles Schiefer grau:#778899"}",
    },
    {
      "name": "color",
      "value": "{"en-US":"Tan:#D2B48C","en-GB":"Tan:#D2B48C","de-DE":"Bräunen:#D2B48C"}",
    },
  ],
  "images": [
    {
      "dimensions": {
        "height": 3000,
        "width": 3000,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-4.2.jpeg",
    },
    {
      "dimensions": {
        "height": 3000,
        "width": 3000,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-4.1.jpeg",
    },
    {
      "dimensions": {
        "height": 3000,
        "width": 3000,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-4.3.jpeg",
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
          "centAmount": 45000,
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
          "centAmount": 45000,
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
          "centAmount": 45000,
          "currencyCode": "USD",
        },
      },
    },
  ],
  "sku": "MUTB-04",
}
`);
  });
});
