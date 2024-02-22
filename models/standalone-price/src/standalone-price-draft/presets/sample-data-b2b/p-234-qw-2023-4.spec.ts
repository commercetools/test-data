import type { TStandalonePriceDraft } from '../../../types';
import p234Qw20234 from './p-234-qw-2023-4';

describe(`with p234Qw20234 preset`, () => {
  it(`should return a p234Qw20234 preset`, () => {
    const p234Qw20234Preset = p234Qw20234().build<TStandalonePriceDraft>();
    expect(p234Qw20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2023-4",
        "sku": "p234-qw-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 850000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a p234Qw20234 preset when built for graphql`, () => {
    const p234Qw20234PresetGraphql =
      p234Qw20234().buildGraphql<TStandalonePriceDraft>();
    expect(p234Qw20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2023-4",
        "sku": "p234-qw-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 850000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
