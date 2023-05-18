import type { TProductVariantDraft } from '../../../types';
import toddlerTrousersVariant03 from './toddler-trousers-variant-03';

describe(`with toddlerTrousersVariant03 preset`, () => {
  it(`should return a toddlerTrousersVariant03 preset`, () => {
    const toddlerTrousersVariant03Preset =
      toddlerTrousersVariant03().build<TProductVariantDraft>();
    expect(toddlerTrousersVariant03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "size",
            "value": {
              "key": "Large",
              "label": "Large",
            },
          },
          {
            "name": "fit",
            "value": {
              "key": "Straight",
              "label": "Straight",
            },
          },
          {
            "name": "color",
            "value": {
              "key": "White",
              "label": "White",
            },
          },
          {
            "name": "length",
            "value": {
              "key": "Ankle",
              "label": "Ankle",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 792,
              "w": 612,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-i2b2bEGD.gif",
          },
        ],
        "key": "855486",
        "prices": [
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
              "centAmount": 2599,
              "currencyCode": "USD",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "855486",
      }
    `);
  });

  it(`should return a toddlerTrousersVariant03 preset when built for graphql`, () => {
    const toddlerTrousersVariant03PresetGraphql =
      toddlerTrousersVariant03().buildGraphql<TProductVariantDraft>();
    expect(toddlerTrousersVariant03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "size",
            "value": {
              "key": "Large",
              "label": "Large",
            },
          },
          {
            "name": "fit",
            "value": {
              "key": "Straight",
              "label": "Straight",
            },
          },
          {
            "name": "color",
            "value": {
              "key": "White",
              "label": "White",
            },
          },
          {
            "name": "length",
            "value": {
              "key": "Ankle",
              "label": "Ankle",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 792,
              "width": 612,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-i2b2bEGD.gif",
          },
        ],
        "key": "855486",
        "prices": [
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
                "centAmount": 2599,
                "currencyCode": "USD",
                "fractionDigits": 2,
                "type": "centPrecision",
              },
            },
          },
        ],
        "sku": "855486",
      }
    `);
  });
});
