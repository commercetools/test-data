import type { TStandalonePriceDraft } from '../../../types';
import p234Qw20233 from './p-234-qw-2023-3';

describe(`with p234Qw20233 preset`, () => {
  it(`should return a p234Qw20233 preset`, () => {
    const p234Qw20233Preset = p234Qw20233().build<TStandalonePriceDraft>();
    expect(p234Qw20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2023-3",
        "sku": "p234-qw-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1309000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a p234Qw20233 preset when built for graphql`, () => {
    const p234Qw20233PresetGraphql =
      p234Qw20233().buildGraphql<TStandalonePriceDraft>();
    expect(p234Qw20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2023-3",
        "sku": "p234-qw-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1309000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
