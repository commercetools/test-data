import type { TStandalonePriceDraft } from '../../../types';
import p234Qw20198 from './p-234-qw-2019-8';

describe(`with p234Qw20198 preset`, () => {
  it(`should return a p234Qw20198 preset`, () => {
    const p234Qw20198Preset = p234Qw20198().build<TStandalonePriceDraft>();
    expect(p234Qw20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2019-8",
        "sku": "p234-qw-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 935001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a p234Qw20198 preset when built for graphql`, () => {
    const p234Qw20198PresetGraphql =
      p234Qw20198().buildGraphql<TStandalonePriceDraft>();
    expect(p234Qw20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2019-8",
        "sku": "p234-qw-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 935001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
