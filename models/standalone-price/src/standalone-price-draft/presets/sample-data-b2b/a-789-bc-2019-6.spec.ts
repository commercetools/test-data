import type { TStandalonePriceDraft } from '../../../types';
import a789Bc20196 from './a-789-bc-2019-6';

describe(`with a789Bc20196 preset`, () => {
  it(`should return a a789Bc20196 preset`, () => {
    const a789Bc20196Preset = a789Bc20196().build<TStandalonePriceDraft>();
    expect(a789Bc20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2019-6",
        "sku": "a789-bc-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a a789Bc20196 preset when built for graphql`, () => {
    const a789Bc20196PresetGraphql =
      a789Bc20196().buildGraphql<TStandalonePriceDraft>();
    expect(a789Bc20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2019-6",
        "sku": "a789-bc-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
