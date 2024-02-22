import type { TStandalonePriceDraft } from '../../../types';
import r123Ts20232 from './r-123-ts-2023-2';

describe(`with r123Ts20232 preset`, () => {
  it(`should return a r123Ts20232 preset`, () => {
    const r123Ts20232Preset = r123Ts20232().build<TStandalonePriceDraft>();
    expect(r123Ts20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2023-2",
        "sku": "r123-ts-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1149501,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a r123Ts20232 preset when built for graphql`, () => {
    const r123Ts20232PresetGraphql =
      r123Ts20232().buildGraphql<TStandalonePriceDraft>();
    expect(r123Ts20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2023-2",
        "sku": "r123-ts-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1149501,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
