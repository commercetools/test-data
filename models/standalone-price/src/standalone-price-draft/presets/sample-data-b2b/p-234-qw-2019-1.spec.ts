import type { TStandalonePriceDraft } from '../../../types';
import p234Qw20191 from './p-234-qw-2019-1';

describe(`with p234Qw20191 preset`, () => {
  it(`should return a p234Qw20191 preset`, () => {
    const p234Qw20191Preset = p234Qw20191().build<TStandalonePriceDraft>();
    expect(p234Qw20191Preset).toMatchInlineSnapshot(`
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
        "key": "p234-qw-2019-1",
        "sku": "p234-qw-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1028501,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a p234Qw20191 preset when built for graphql`, () => {
    const p234Qw20191PresetGraphql =
      p234Qw20191().buildGraphql<TStandalonePriceDraft>();
    expect(p234Qw20191PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "p234-qw-2019-1",
        "sku": "p234-qw-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1028501,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
