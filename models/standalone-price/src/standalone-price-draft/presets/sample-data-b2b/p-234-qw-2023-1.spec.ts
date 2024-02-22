import type { TStandalonePriceDraft } from '../../../types';
import p234Qw20231 from './p-234-qw-2023-1';

describe(`with p234Qw20231 preset`, () => {
  it(`should return a p234Qw20231 preset`, () => {
    const p234Qw20231Preset = p234Qw20231().build<TStandalonePriceDraft>();
    expect(p234Qw20231Preset).toMatchInlineSnapshot(`
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
        "key": "p234-qw-2023-1",
        "sku": "p234-qw-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1122000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a p234Qw20231 preset when built for graphql`, () => {
    const p234Qw20231PresetGraphql =
      p234Qw20231().buildGraphql<TStandalonePriceDraft>();
    expect(p234Qw20231PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "p234-qw-2023-1",
        "sku": "p234-qw-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1122000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
