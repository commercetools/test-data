import type { TStandalonePriceDraft } from '../../../types';
import a789Bc20233 from './a-789-bc-2023-3';

describe(`with a789Bc20233 preset`, () => {
  it(`should return a a789Bc20233 preset`, () => {
    const a789Bc20233Preset = a789Bc20233().build<TStandalonePriceDraft>();
    expect(a789Bc20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2023-3",
        "sku": "a789-bc-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1925000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a a789Bc20233 preset when built for graphql`, () => {
    const a789Bc20233PresetGraphql =
      a789Bc20233().buildGraphql<TStandalonePriceDraft>();
    expect(a789Bc20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2023-3",
        "sku": "a789-bc-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1925000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
