import type { TStandalonePriceDraft } from '../../../types';
import p234Qw20237 from './p-234-qw-2023-7';

describe(`with p234Qw20237 preset`, () => {
  it(`should return a p234Qw20237 preset`, () => {
    const p234Qw20237Preset = p234Qw20237().build<TStandalonePriceDraft>();
    expect(p234Qw20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2023-7",
        "sku": "p234-qw-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1020000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a p234Qw20237 preset when built for graphql`, () => {
    const p234Qw20237PresetGraphql =
      p234Qw20237().buildGraphql<TStandalonePriceDraft>();
    expect(p234Qw20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2023-7",
        "sku": "p234-qw-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1020000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
