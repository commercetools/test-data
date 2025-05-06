import type { TZoneRateDraft, TZoneRateDraftGraphql } from '../../../types';
import express from './express';

describe('with express preset', () => {
  it(`should return an express preset`, () => {
    const expressPreset = express().build<TZoneRateDraft>();
    expect(expressPreset).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 75000,
              "currencyCode": "EUR",
            },
            "tiers": [],
          },
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 75000,
              "currencyCode": "GBP",
            },
            "tiers": [],
          },
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 75000,
              "currencyCode": "USD",
            },
            "tiers": [],
          },
        ],
        "zone": [
          {
            "key": "europe",
            "typeId": "zone",
          },
          {
            "key": "usa",
            "typeId": "zone",
          },
        ],
      }
    `);
  });

  it(`should return an express preset when built for Graphql`, () => {
    const expressPresetGraphql =
      express().buildGraphql<TZoneRateDraftGraphql>();
    expect(expressPresetGraphql).toMatchInlineSnapshot(`
      {
        "shippingRates": [
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 75000,
              "currencyCode": "EUR",
            },
            "tiers": [],
          },
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 75000,
              "currencyCode": "GBP",
            },
            "tiers": [],
          },
          {
            "freeAbove": undefined,
            "price": {
              "centAmount": 75000,
              "currencyCode": "USD",
            },
            "tiers": [],
          },
        ],
        "zone": [
          {
            "key": "europe",
            "typeId": "zone",
          },
          {
            "key": "usa",
            "typeId": "zone",
          },
        ],
      }
    `);
  });
});
