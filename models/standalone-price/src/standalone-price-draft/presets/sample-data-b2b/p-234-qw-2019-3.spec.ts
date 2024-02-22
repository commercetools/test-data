import type { TStandalonePriceDraft } from '../../../types';
import p234Qw20193 from './p-234-qw-2019-3';

describe(`with p234Qw20193 preset`, () => {
  it(`should return a p234Qw20193 preset`, () => {
    const p234Qw20193Preset = p234Qw20193().build<TStandalonePriceDraft>();
    expect(p234Qw20193Preset).toMatchInlineSnapshot(`
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
        "key": "p234-qw-2019-3",
        "sku": "p234-qw-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1215500,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a p234Qw20193 preset when built for graphql`, () => {
    const p234Qw20193PresetGraphql =
      p234Qw20193().buildGraphql<TStandalonePriceDraft>();
    expect(p234Qw20193PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "p234-qw-2019-3",
        "sku": "p234-qw-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1215500,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
