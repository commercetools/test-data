import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import opalKingBed01 from './opal-king-bed-01';

describe(`with opalKingBed01 preset`, () => {
  it(`should return a opalKingBed01 preset`, () => {
    const opalKingBed01Preset = opalKingBed01().build<TProductVariantDraft>();
    expect(opalKingBed01Preset).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": {
        "de-DE": "- Montage inklusive",
        "en-GB": "- Assembly included",
        "en-US": "- Assembly included",
      },
    },
    {
      "name": "color",
      "value": {
        "de-DE": "Schwarz:#000000",
        "en-GB": "Black:#000000",
        "en-US": "Black:#000000",
      },
    },
  ],
  "images": [
    {
      "dimensions": {
        "h": 2000,
        "w": 2000,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Opal_King_Bed-1.1.jpeg",
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
        "centAmount": 129900,
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
        "centAmount": 129900,
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
        "centAmount": 129900,
        "currencyCode": "USD",
      },
    },
  ],
  "sku": "MTB-023",
}
`);
  });

  it(`should return a opalKingBed01 preset when built for graphql`, () => {
    const opalKingBed01PresetGraphql =
      opalKingBed01().buildGraphql<TProductVariantDraftGraphql>();
    expect(opalKingBed01PresetGraphql).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": "{"en-GB":"- Assembly included","de-DE":"- Montage inklusive","en-US":"- Assembly included"}",
    },
    {
      "name": "color",
      "value": "{"en-GB":"Black:#000000","de-DE":"Schwarz:#000000","en-US":"Black:#000000"}",
    },
  ],
  "images": [
    {
      "dimensions": {
        "height": 2000,
        "width": 2000,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Opal_King_Bed-1.1.jpeg",
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
          "centAmount": 129900,
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
          "centAmount": 129900,
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
          "centAmount": 129900,
          "currencyCode": "USD",
        },
      },
    },
  ],
  "sku": "MTB-023",
}
`);
  });
});
