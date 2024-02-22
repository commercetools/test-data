import type { TStandalonePriceDraft } from '../../../types';
import p234Qw20235 from './p-234-qw-2023-5';

describe(`with p234Qw20235 preset`, () => {
  it(`should return a p234Qw20235 preset`, () => {
    const p234Qw20235Preset = p234Qw20235().build<TStandalonePriceDraft>();
    expect(p234Qw20235Preset).toMatchInlineSnapshot(`
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
        "key": "p234-qw-2023-5",
        "sku": "p234-qw-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 765000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a p234Qw20235 preset when built for graphql`, () => {
    const p234Qw20235PresetGraphql =
      p234Qw20235().buildGraphql<TStandalonePriceDraft>();
    expect(p234Qw20235PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "p234-qw-2023-5",
        "sku": "p234-qw-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 765000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
