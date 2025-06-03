import type { TStandalonePriceDraft } from '../../../types';
import p234Qw20156 from './p-234-qw-2015-6';

describe(`with p234Qw20156 preset`, () => {
  it(`should return a p234Qw20156 preset`, () => {
    const p234Qw20156Preset = p234Qw20156().build<TStandalonePriceDraft>();
    expect(p234Qw20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2015-6",
        "recurrencePolicy": undefined,
        "sku": "p234-qw-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 680000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a p234Qw20156 preset when built for graphql`, () => {
    const p234Qw20156PresetGraphql =
      p234Qw20156().buildGraphql<TStandalonePriceDraft>();
    expect(p234Qw20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2015-6",
        "recurrencePolicy": undefined,
        "sku": "p234-qw-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 680000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
