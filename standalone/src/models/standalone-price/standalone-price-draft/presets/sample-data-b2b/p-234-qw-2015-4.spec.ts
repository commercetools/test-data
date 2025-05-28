import type { TStandalonePriceDraft } from '../../../types';
import p234Qw20154 from './p-234-qw-2015-4';

describe(`with p234Qw20154 preset`, () => {
  it(`should return a p234Qw20154 preset`, () => {
    const p234Qw20154Preset = p234Qw20154().build<TStandalonePriceDraft>();
    expect(p234Qw20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2015-4",
        "recurrencePolicy": undefined,
        "sku": "p234-qw-2015",
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

  it(`should return a p234Qw20154 preset when built for graphql`, () => {
    const p234Qw20154PresetGraphql =
      p234Qw20154().buildGraphql<TStandalonePriceDraft>();
    expect(p234Qw20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2015-4",
        "recurrencePolicy": undefined,
        "sku": "p234-qw-2015",
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
