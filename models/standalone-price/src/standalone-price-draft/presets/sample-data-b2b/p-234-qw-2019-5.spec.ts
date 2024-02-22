import type { TStandalonePriceDraft } from '../../../types';
import p234Qw20195 from './p-234-qw-2019-5';

describe(`with p234Qw20195 preset`, () => {
  it(`should return a p234Qw20195 preset`, () => {
    const p234Qw20195Preset = p234Qw20195().build<TStandalonePriceDraft>();
    expect(p234Qw20195Preset).toMatchInlineSnapshot(`
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
        "key": "p234-qw-2019-5",
        "sku": "p234-qw-2019",
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

  it(`should return a p234Qw20195 preset when built for graphql`, () => {
    const p234Qw20195PresetGraphql =
      p234Qw20195().buildGraphql<TStandalonePriceDraft>();
    expect(p234Qw20195PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "p234-qw-2019-5",
        "sku": "p234-qw-2019",
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
