import type { TStandalonePriceDraft } from '../../../types';
import a789Bc20158 from './a-789-bc-2015-8';

describe(`with a789Bc20158 preset`, () => {
  it(`should return a a789Bc20158 preset`, () => {
    const a789Bc20158Preset = a789Bc20158().build<TStandalonePriceDraft>();
    expect(a789Bc20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2015-8",
        "sku": "a789-bc-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1375000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a a789Bc20158 preset when built for graphql`, () => {
    const a789Bc20158PresetGraphql =
      a789Bc20158().buildGraphql<TStandalonePriceDraft>();
    expect(a789Bc20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2015-8",
        "sku": "a789-bc-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1375000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
