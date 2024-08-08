import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import minimalistModernSideTable01 from './minimalist-modern-side-table-01';

describe(`with minimalistModernSideTable01 preset`, () => {
  it(`should return a minimalistModernSideTable01 preset`, () => {
    const minimalistModernSideTable01Preset =
      minimalistModernSideTable01().build<TProductVariantDraft>();
    expect(minimalistModernSideTable01Preset).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "color",
      "value": {
        "de-DE": "White:#FFFFFF",
        "en-GB": "Weiß:#FFFFFF",
        "en-US": "White:#FFFFFF",
      },
    },
    {
      "name": "finish",
      "value": {
        "de-DE": "Saddle Brown:#8b4513",
        "en-GB": "Sattel braun:#8b4513",
        "en-US": "Saddle Brown:#8b4513",
      },
    },
    {
      "name": "productspec",
      "value": {
        "de-DE": "- 4 legged side table
- Walnut legs
- Pre-assembled",
        "en-GB": "- 4 legged side table
- Walnut legs
- Pre-assembled",
        "en-US": "- 4 legged side table
- Walnut legs
- Pre-assembled",
      },
    },
  ],
  "images": [
    {
      "dimensions": {
        "h": 6232,
        "w": 6000,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Modern_Side_Table-1.1.jpeg",
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
        "centAmount": 12000,
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
        "centAmount": 12000,
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
        "centAmount": 12000,
        "currencyCode": "USD",
      },
    },
  ],
  "sku": "MMST-01",
}
`);
  });

  it(`should return a minimalistModernSideTable01 preset when built for graphql`, () => {
    const minimalistModernSideTable01PresetGraphql =
      minimalistModernSideTable01().buildGraphql<TProductVariantDraftGraphql>();
    expect(minimalistModernSideTable01PresetGraphql).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "color",
      "value": "{"en-US":"White:#FFFFFF","en-GB":"Weiß:#FFFFFF","de-DE":"White:#FFFFFF"}",
    },
    {
      "name": "finish",
      "value": "{"en-US":"Saddle Brown:#8b4513","en-GB":"Sattel braun:#8b4513","de-DE":"Saddle Brown:#8b4513"}",
    },
    {
      "name": "productspec",
      "value": "{"en-US":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled","en-GB":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled","de-DE":"- 4 legged side table\\n- Walnut legs\\n- Pre-assembled"}",
    },
  ],
  "images": [
    {
      "dimensions": {
        "height": 6232,
        "width": 6000,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Modern_Side_Table-1.1.jpeg",
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
          "centAmount": 12000,
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
          "centAmount": 12000,
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
          "centAmount": 12000,
          "currencyCode": "USD",
        },
      },
    },
  ],
  "sku": "MMST-01",
}
`);
  });
});
