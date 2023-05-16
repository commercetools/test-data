import type { TProductVariantDraft } from '../../../types';
import sportCoatVariant01 from './sport-coat-variant-01';

describe(`with sportCoatVariant01 preset`, () => {
  it(`should return a sportCoatVariant01 preset`, () => {
    const sportCoatVariant01Preset =
      sportCoatVariant01().build<TProductVariantDraft>();
    expect(sportCoatVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "sleeve_length",
            "value": {
              "key": "Crop",
              "label": "Crop",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 225,
              "w": 225,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/coat-VmXqw3Xo.jpeg",
          },
        ],
        "key": "692457",
        "prices": [
          {
            "channel": undefined,
            "country": "AU",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 20000,
              "currencyCode": "AUD",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "692457",
      }
    `);
  });

  it(`should return a sportCoatVariant01 preset when built for graphql`, () => {
    const sportCoatVariant01PresetGraphql =
      sportCoatVariant01().buildGraphql<TProductVariantDraft>();
    expect(sportCoatVariant01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "sleeve_length",
            "value": {
              "key": "Crop",
              "label": "Crop",
            },
          },
        ],
        "images": [
          {
            "__typename": "Image",
            "dimensions": {
              "h": 225,
              "w": 225,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/coat-VmXqw3Xo.jpeg",
          },
        ],
        "key": "692457",
        "prices": [
          {
            "channel": undefined,
            "country": "AU",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 20000,
              "currencyCode": "AUD",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "692457",
      }
    `);
  });
});
