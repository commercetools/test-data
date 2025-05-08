import type { TStandalonePriceDraft } from '../../../types';
import p234Qw20238 from './p-234-qw-2023-8';

describe(`with p234Qw20238 preset`, () => {
  it(`should return a p234Qw20238 preset`, () => {
    const p234Qw20238Preset = p234Qw20238().build<TStandalonePriceDraft>();
    expect(p234Qw20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2023-8",
        "sku": "p234-qw-2023",
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

  it(`should return a p234Qw20238 preset when built for graphql`, () => {
    const p234Qw20238PresetGraphql =
      p234Qw20238().buildGraphql<TStandalonePriceDraft>();
    expect(p234Qw20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2023-8",
        "sku": "p234-qw-2023",
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
