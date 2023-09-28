import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import doubleWalledEspressoGlass01 from './double-walled-espresso-glass-01';

describe(`with doubleWalledEspressoGlass01 preset`, () => {
  it(`should return a doubleWalledEspressoGlass01 preset`, () => {
    const doubleWalledEspressoGlass01Preset =
      doubleWalledEspressoGlass01().build<TProductVariantDraft>();
    expect(doubleWalledEspressoGlass01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Das Set enthält 4 Gläser",
              "en-GB": "- Set includes 4 glasses",
              "en-US": "- Set includes 4 glasses",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3098,
              "w": 3371,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_571236838-yanGZ5gf.jpeg",
          },
          {
            "dimensions": {
              "h": 1481,
              "w": 987,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/photo-1585975761152--ZGxY2KXD.jpeg",
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
              "centAmount": 4299,
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
              "centAmount": 4299,
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
              "centAmount": 4299,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "DWEG-09",
      }
    `);
  });

  it(`should return a doubleWalledEspressoGlass01 preset when built for graphql`, () => {
    const doubleWalledEspressoGlass01PresetGraphql =
      doubleWalledEspressoGlass01().buildGraphql<TProductVariantDraftGraphql>();
    expect(doubleWalledEspressoGlass01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Set includes 4 glasses","de-DE":"- Das Set enthält 4 Gläser","en-US":"- Set includes 4 glasses"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3098,
              "width": 3371,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_571236838-yanGZ5gf.jpeg",
          },
          {
            "dimensions": {
              "height": 1481,
              "width": 987,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/photo-1585975761152--ZGxY2KXD.jpeg",
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
                "centAmount": 4299,
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
                "centAmount": 4299,
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
                "centAmount": 4299,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "DWEG-09",
      }
    `);
  });
});
