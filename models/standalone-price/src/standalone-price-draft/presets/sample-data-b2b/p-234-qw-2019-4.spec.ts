import type { TStandalonePriceDraft } from '../../../types';
import p234Qw20194 from './p-234-qw-2019-4';

describe(`with p234Qw20194 preset`, () => {
  it(`should return a p234Qw20194 preset`, () => {
    const p234Qw20194Preset = p234Qw20194().build<TStandalonePriceDraft>();
    expect(p234Qw20194Preset).toMatchInlineSnapshot(`
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
        "key": "p234-qw-2019-4",
        "sku": "p234-qw-2019",
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

  it(`should return a p234Qw20194 preset when built for graphql`, () => {
    const p234Qw20194PresetGraphql =
      p234Qw20194().buildGraphql<TStandalonePriceDraft>();
    expect(p234Qw20194PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "p234-qw-2019-4",
        "sku": "p234-qw-2019",
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
