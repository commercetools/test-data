import type { TStandalonePriceDraft } from '../../../types';
import p234Qw20236 from './p-234-qw-2023-6';

describe(`with p234Qw20236 preset`, () => {
  it(`should return a p234Qw20236 preset`, () => {
    const p234Qw20236Preset = p234Qw20236().build<TStandalonePriceDraft>();
    expect(p234Qw20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2023-6",
        "sku": "p234-qw-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 680000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a p234Qw20236 preset when built for graphql`, () => {
    const p234Qw20236PresetGraphql =
      p234Qw20236().buildGraphql<TStandalonePriceDraft>();
    expect(p234Qw20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2023-6",
        "sku": "p234-qw-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 680000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
