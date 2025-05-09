import type { TStandalonePriceDraft } from '../../../types';
import p234Qw20152 from './p-234-qw-2015-2';

describe(`with p234Qw20152 preset`, () => {
  it(`should return a p234Qw20152 preset`, () => {
    const p234Qw20152Preset = p234Qw20152().build<TStandalonePriceDraft>();
    expect(p234Qw20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2015-2",
        "sku": "p234-qw-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 841500,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a p234Qw20152 preset when built for graphql`, () => {
    const p234Qw20152PresetGraphql =
      p234Qw20152().buildGraphql<TStandalonePriceDraft>();
    expect(p234Qw20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2015-2",
        "sku": "p234-qw-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 841500,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
