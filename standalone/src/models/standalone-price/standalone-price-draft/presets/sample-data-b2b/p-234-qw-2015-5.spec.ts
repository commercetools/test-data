import type { TStandalonePriceDraft } from '../../../types';
import p234Qw20155 from './p-234-qw-2015-5';

describe(`with p234Qw20155 preset`, () => {
  it(`should return a p234Qw20155 preset`, () => {
    const p234Qw20155Preset = p234Qw20155().build<TStandalonePriceDraft>();
    expect(p234Qw20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2015-5",
        "recurrencePolicy": undefined,
        "sku": "p234-qw-2015",
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

  it(`should return a p234Qw20155 preset when built for graphql`, () => {
    const p234Qw20155PresetGraphql =
      p234Qw20155().buildGraphql<TStandalonePriceDraft>();
    expect(p234Qw20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2015-5",
        "recurrencePolicy": undefined,
        "sku": "p234-qw-2015",
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
