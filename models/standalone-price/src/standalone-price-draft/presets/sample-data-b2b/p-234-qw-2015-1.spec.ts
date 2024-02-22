import type { TStandalonePriceDraft } from '../../../types';
import p234Qw20151 from './p-234-qw-2015-1';

describe(`with p234Qw20151 preset`, () => {
  it(`should return a p234Qw20151 preset`, () => {
    const p234Qw20151Preset = p234Qw20151().build<TStandalonePriceDraft>();
    expect(p234Qw20151Preset).toMatchInlineSnapshot(`
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
        "key": "p234-qw-2015-1",
        "sku": "p234-qw-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 935000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a p234Qw20151 preset when built for graphql`, () => {
    const p234Qw20151PresetGraphql =
      p234Qw20151().buildGraphql<TStandalonePriceDraft>();
    expect(p234Qw20151PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "p234-qw-2015-1",
        "sku": "p234-qw-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 935000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
