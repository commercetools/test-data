import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import traditionalLSeaterSofa01 from './traditional-l-seater-sofa-01';

describe(`with traditionalLSeaterSofa01 preset`, () => {
  it(`should return a traditionalLSeaterSofa01 preset`, () => {
    const traditionalLSeaterSofa01Preset =
      traditionalLSeaterSofa01().build<TProductVariantDraft>();
    expect(traditionalLSeaterSofa01Preset).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "color",
      "value": {
        "de-DE": "Beige:#F5F5DC",
        "en-GB": "Beige:#F5F5DC",
        "en-US": "Beige:#F5F5DC",
      },
    },
    {
      "name": "finish",
      "value": {
        "de-DE": "Sattel braun:#8b4513",
        "en-GB": "Saddle Brown:#8b4513",
        "en-US": "Saddle Brown:#8b4513",
      },
    },
    {
      "name": "productspec",
      "value": {
        "de-DE": "- Baumwollbezug
- Wurfkissen um Lieferumfang enthalten
- Selbstmontage",
        "en-GB": "- Cotton upholstery
- Comes with accent pillows
- Assembly on site",
        "en-US": "- Cotton upholstery
- Comes with accent pillows
- Assembly on site",
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
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_L_Seater_Sofa-1.2.jpeg",
    },
    {
      "dimensions": {
        "h": 2500,
        "w": 2500,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_L_Seater_Sofa-1.1.jpeg",
    },
    {
      "dimensions": {
        "h": 3840,
        "w": 5760,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_L_Seater_Sofa-1.3.jpeg",
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
        "centAmount": 359900,
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
        "centAmount": 359900,
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
        "centAmount": 359900,
        "currencyCode": "USD",
      },
    },
  ],
  "sku": "TLSS-01",
}
`);
  });

  it(`should return a traditionalLSeaterSofa01 preset when built for graphql`, () => {
    const traditionalLSeaterSofa01PresetGraphql =
      traditionalLSeaterSofa01().buildGraphql<TProductVariantDraftGraphql>();
    expect(traditionalLSeaterSofa01PresetGraphql).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "color",
      "value": "{"en-US":"Beige:#F5F5DC","en-GB":"Beige:#F5F5DC","de-DE":"Beige:#F5F5DC"}",
    },
    {
      "name": "finish",
      "value": "{"en-US":"Saddle Brown:#8b4513","en-GB":"Saddle Brown:#8b4513","de-DE":"Sattel braun:#8b4513"}",
    },
    {
      "name": "productspec",
      "value": "{"en-US":"- Cotton upholstery\\n- Comes with accent pillows\\n- Assembly on site","en-GB":"- Cotton upholstery\\n- Comes with accent pillows\\n- Assembly on site","de-DE":"- Baumwollbezug\\n- Wurfkissen um Lieferumfang enthalten\\n- Selbstmontage"}",
    },
  ],
  "images": [
    {
      "dimensions": {
        "height": 2500,
        "width": 2500,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_L_Seater_Sofa-1.2.jpeg",
    },
    {
      "dimensions": {
        "height": 2500,
        "width": 2500,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_L_Seater_Sofa-1.1.jpeg",
    },
    {
      "dimensions": {
        "height": 3840,
        "width": 5760,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_L_Seater_Sofa-1.3.jpeg",
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
          "centAmount": 359900,
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
          "centAmount": 359900,
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
          "centAmount": 359900,
          "currencyCode": "USD",
        },
      },
    },
  ],
  "sku": "TLSS-01",
}
`);
  });
});
