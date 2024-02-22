import type { TStandalonePriceDraft } from '../../../types';
import p234Qw20153 from './p-234-qw-2015-3';

describe(`with p234Qw20153 preset`, () => {
  it(`should return a p234Qw20153 preset`, () => {
    const p234Qw20153Preset = p234Qw20153().build<TStandalonePriceDraft>();
    expect(p234Qw20153Preset).toMatchInlineSnapshot(`
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
        "key": "p234-qw-2015-3",
        "sku": "p234-qw-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1122000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a p234Qw20153 preset when built for graphql`, () => {
    const p234Qw20153PresetGraphql =
      p234Qw20153().buildGraphql<TStandalonePriceDraft>();
    expect(p234Qw20153PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "p234-qw-2015-3",
        "sku": "p234-qw-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1122000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
