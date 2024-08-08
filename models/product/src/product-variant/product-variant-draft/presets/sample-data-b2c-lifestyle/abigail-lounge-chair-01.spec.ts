import type { TProductVariantDraft } from '../../../types';
import abigailLoungeChair01 from './abigail-lounge-chair-01';

describe(`with abigailLoungeChair01 preset`, () => {
  it(`should return a abigailLoungeChair01 preset`, () => {
    const abigailLoungeChair01Preset =
      abigailLoungeChair01().build<TProductVariantDraft>();
    expect(abigailLoungeChair01Preset).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "color",
      "value": {
        "de-DE": "Hell rosa:#FFB6C1",
        "en-GB": "Light Pink:#FFB6C1",
        "en-US": "Light Pink:#FFB6C1",
      },
    },
    {
      "name": "finish",
      "value": {
        "de-DE": "Gold:#FFD700",
        "en-GB": "Gold:#FFD700",
        "en-US": "Gold:#FFD700",
      },
    },
    {
      "name": "productspec",
      "value": {
        "de-DE": "- Wird mit passendem Kissen geliefert
- Samtpolsterung
- Wird zusammengebaut geliefert",
        "en-GB": "- Comes with matching throw pillow
- Velvet upholstery
- Pre-assembled",
        "en-US": "- Comes with matching throw pillow
- Velvet upholstery
- Pre-assembled",
      },
    },
  ],
  "images": [
    {
      "dimensions": {
        "h": 4000,
        "w": 5000,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Abigail_Lounge_Chair-1.1.jpeg",
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
        "centAmount": 75000,
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
        "centAmount": 75000,
        "currencyCode": "GBP",
      },
    },
    {
      "channel": {
        "key": "distribution-channel",
        "typeId": "channel",
      },
      "country": "US",
      "custom": undefined,
      "customerGroup": undefined,
      "discounted": undefined,
      "key": undefined,
      "tiers": undefined,
      "validFrom": undefined,
      "validUntil": undefined,
      "value": {
        "centAmount": 75000,
        "currencyCode": "USD",
      },
    },
  ],
  "sku": "ALC-01",
}
`);
  });

  it(`should return a abigailLoungeChair01 preset when built for graphql`, () => {
    const abigailLoungeChair01PresetGraphql =
      abigailLoungeChair01().buildGraphql<TProductVariantDraft>();
    expect(abigailLoungeChair01PresetGraphql).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "color",
      "value": "{"en-US":"Light Pink:#FFB6C1","en-GB":"Light Pink:#FFB6C1","de-DE":"Hell rosa:#FFB6C1"}",
    },
    {
      "name": "finish",
      "value": "{"en-US":"Gold:#FFD700","en-GB":"Gold:#FFD700","de-DE":"Gold:#FFD700"}",
    },
    {
      "name": "productspec",
      "value": "{"en-US":"- Comes with matching throw pillow\\n- Velvet upholstery\\n- Pre-assembled","en-GB":"- Comes with matching throw pillow\\n- Velvet upholstery\\n- Pre-assembled","de-DE":"- Wird mit passendem Kissen geliefert\\n- Samtpolsterung\\n- Wird zusammengebaut geliefert"}",
    },
  ],
  "images": [
    {
      "dimensions": {
        "height": 4000,
        "width": 5000,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Abigail_Lounge_Chair-1.1.jpeg",
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
          "centAmount": 75000,
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
          "centAmount": 75000,
          "currencyCode": "GBP",
        },
      },
    },
    {
      "channel": {
        "key": "distribution-channel",
        "typeId": "channel",
      },
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
          "centAmount": 75000,
          "currencyCode": "USD",
        },
      },
    },
  ],
  "sku": "ALC-01",
}
`);
  });
});
