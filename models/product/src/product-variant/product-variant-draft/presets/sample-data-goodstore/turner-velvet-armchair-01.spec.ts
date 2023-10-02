import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import turnerVelvetArmchair01 from './turner-velvet-armchair-01';

describe(`with turnerVelvetArmchair01 preset`, () => {
  it(`should return a turnerVelvetArmchair01 preset`, () => {
    const turnerVelvetArmchair01Preset =
      turnerVelvetArmchair01().build<TProductVariantDraft>();
    expect(turnerVelvetArmchair01Preset).toMatchInlineSnapshot(`
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
            "name": "colorlabel",
            "value": {
              "de-DE": "Königsblau",
              "en-GB": "Royal Blue",
              "en-US": "Royal Blue",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#0000FF",
              "label": {
                "de-DE": "Blau",
                "en-GB": "Blue",
                "en-US": "Blue",
              },
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#405A76",
              "en-GB": "#405A76",
              "en-US": "#405A76",
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
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305709767-0-udvSbN.jpeg",
          },
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305709866-REVRy5ph.jpeg",
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
        "sku": "TARM-03",
      }
    `);
  });

  it(`should return a turnerVelvetArmchair01 preset when built for graphql`, () => {
    const turnerVelvetArmchair01PresetGraphql =
      turnerVelvetArmchair01().buildGraphql<TProductVariantDraftGraphql>();
    expect(turnerVelvetArmchair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Dry clean only","en-US":"- Dry clean only","de-DE":"- Nur chemische Reinigung"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Royal Blue","de-DE":"Königsblau","en-US":"Royal Blue"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#0000FF","label":{"de-DE":"Blau","en-GB":"Blue","en-US":"Blue"}}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#405A76","de-DE":"#405A76","en-US":"#405A76"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305709767-0-udvSbN.jpeg",
          },
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305709866-REVRy5ph.jpeg",
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
        "sku": "TARM-03",
      }
    `);
  });
});
