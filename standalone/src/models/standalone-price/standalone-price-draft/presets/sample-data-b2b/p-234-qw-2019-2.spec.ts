import type { TStandalonePriceDraft } from '../../../types';
import p234Qw20192 from './p-234-qw-2019-2';

describe(`with p234Qw20192 preset`, () => {
  it(`should return a p234Qw20192 preset`, () => {
    const p234Qw20192Preset = p234Qw20192().build<TStandalonePriceDraft>();
    expect(p234Qw20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2019-2",
        "recurrencePolicy": undefined,
        "sku": "p234-qw-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 935000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a p234Qw20192 preset when built for graphql`, () => {
    const p234Qw20192PresetGraphql =
      p234Qw20192().buildGraphql<TStandalonePriceDraft>();
    expect(p234Qw20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2019-2",
        "recurrencePolicy": undefined,
        "sku": "p234-qw-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 935000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
