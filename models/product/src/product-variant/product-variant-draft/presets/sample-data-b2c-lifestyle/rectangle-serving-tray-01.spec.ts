import type { TProductVariantDraft } from '../../../types';
import rectangleServingTray01 from './rectangle-serving-tray-01';

describe(`with rectangleServingTray01 preset`, () => {
  it(`should return a rectangleServingTray01 preset`, () => {
    const rectangleServingTray01Preset =
      rectangleServingTray01().build<TProductVariantDraft>();
    expect(rectangleServingTray01Preset).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": {
        "de-DE": "- Handwäsche nur
- Naturholz",
        "en-GB": "- Hand wash only
- Natural wood",
        "en-US": "- Hand wash only
- Natural wood",
      },
    },
    {
      "name": "color",
      "value": {
        "de-DE": "Braun:#a52a2a",
        "en-GB": "Brown:#a52a2a",
        "en-US": "Brown:#a52a2a",
      },
    },
  ],
  "images": [
    {
      "dimensions": {
        "h": 4024,
        "w": 6048,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rectangle_Serving_Tray-1.1.jpeg",
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
        "centAmount": 599,
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
        "centAmount": 599,
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
        "centAmount": 599,
        "currencyCode": "USD",
      },
    },
  ],
  "sku": "RST-02",
}
`);
  });

  it(`should return a rectangleServingTray01 preset when built for graphql`, () => {
    const rectangleServingTray01PresetGraphql =
      rectangleServingTray01().buildGraphql<TProductVariantDraft>();
    expect(rectangleServingTray01PresetGraphql).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": "{"en-GB":"- Hand wash only\\n- Natural wood","en-US":"- Hand wash only\\n- Natural wood","de-DE":"- Handwäsche nur\\n- Naturholz"}",
    },
    {
      "name": "color",
      "value": "{"en-GB":"Brown:#a52a2a","de-DE":"Braun:#a52a2a","en-US":"Brown:#a52a2a"}",
    },
  ],
  "images": [
    {
      "dimensions": {
        "height": 4024,
        "width": 6048,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rectangle_Serving_Tray-1.1.jpeg",
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
          "centAmount": 599,
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
          "centAmount": 599,
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
          "centAmount": 599,
          "currencyCode": "USD",
        },
      },
    },
  ],
  "sku": "RST-02",
}
`);
  });
});
