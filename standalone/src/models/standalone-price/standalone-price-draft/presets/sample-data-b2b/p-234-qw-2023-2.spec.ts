import type { TStandalonePriceDraft } from '../../../types';
import p234Qw20232 from './p-234-qw-2023-2';

describe(`with p234Qw20232 preset`, () => {
  it(`should return a p234Qw20232 preset`, () => {
    const p234Qw20232Preset = p234Qw20232().build<TStandalonePriceDraft>();
    expect(p234Qw20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2023-2",
        "recurrencePolicy": undefined,
        "sku": "p234-qw-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1028501,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a p234Qw20232 preset when built for graphql`, () => {
    const p234Qw20232PresetGraphql =
      p234Qw20232().buildGraphql<TStandalonePriceDraft>();
    expect(p234Qw20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "p234-qw-2023-2",
        "recurrencePolicy": undefined,
        "sku": "p234-qw-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1028501,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
