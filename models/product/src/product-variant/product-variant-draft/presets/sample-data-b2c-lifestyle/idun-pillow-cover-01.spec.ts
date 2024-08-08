import type { TProductVariantDraft } from '../../../types';
import idunPillowCover01 from './idun-pillow-cover-01';

describe(`with idunPillowCover01 preset`, () => {
  it(`should return a idunPillowCover01 preset`, () => {
    const idunPillowCover01Preset =
      idunPillowCover01().build<TProductVariantDraft>();
    expect(idunPillowCover01Preset).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": {
        "de-DE": "- Waschmaschinenfest
- Kissen nicht im Lieferumfang enthalten",
        "en-GB": "- Machine washable
- Pillow not included",
        "en-US": "- Machine washable
- Pillow not included",
      },
    },
    {
      "name": "color",
      "value": {
        "de-DE": "Siena:#A0522D",
        "en-GB": "Siena:#A0522D",
        "en-US": "Siena:#A0522D",
      },
    },
  ],
  "images": [
    {
      "dimensions": {
        "h": 3996,
        "w": 5994,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Idun_Pillow_Cover-1.1.jpeg",
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
        "centAmount": 1399,
        "currencyCode": "EUR",
      },
    },
    {
      "channel": {
        "key": "distribution-channel",
        "typeId": "channel",
      },
      "country": "GB",
      "custom": undefined,
      "customerGroup": undefined,
      "discounted": undefined,
      "key": undefined,
      "tiers": undefined,
      "validFrom": undefined,
      "validUntil": undefined,
      "value": {
        "centAmount": 1399,
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
        "centAmount": 1399,
        "currencyCode": "USD",
      },
    },
  ],
  "sku": "IPC-09",
}
`);
  });

  it(`should return a idunPillowCover01 preset when built for graphql`, () => {
    const idunPillowCover01PresetGraphql =
      idunPillowCover01().buildGraphql<TProductVariantDraft>();
    expect(idunPillowCover01PresetGraphql).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": "{"en-GB":"- Machine washable\\n- Pillow not included","de-DE":"- Waschmaschinenfest\\n- Kissen nicht im Lieferumfang enthalten","en-US":"- Machine washable\\n- Pillow not included"}",
    },
    {
      "name": "color",
      "value": "{"en-GB":"Siena:#A0522D","de-DE":"Siena:#A0522D","en-US":"Siena:#A0522D"}",
    },
  ],
  "images": [
    {
      "dimensions": {
        "height": 3996,
        "width": 5994,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Idun_Pillow_Cover-1.1.jpeg",
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
          "centAmount": 1399,
          "currencyCode": "EUR",
        },
      },
    },
    {
      "channel": {
        "key": "distribution-channel",
        "typeId": "channel",
      },
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
          "centAmount": 1399,
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
          "centAmount": 1399,
          "currencyCode": "USD",
        },
      },
    },
  ],
  "sku": "IPC-09",
}
`);
  });
});
