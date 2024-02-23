import type { TStandalonePriceDraft } from '../../../types';
import r123Ts20233 from './r-123-ts-2023-3';

describe(`with r123Ts20233 preset`, () => {
  it(`should return a r123Ts20233 preset`, () => {
    const r123Ts20233Preset = r123Ts20233().build<TStandalonePriceDraft>();
    expect(r123Ts20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2023-3",
        "sku": "r123-ts-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1463000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a r123Ts20233 preset when built for graphql`, () => {
    const r123Ts20233PresetGraphql =
      r123Ts20233().buildGraphql<TStandalonePriceDraft>();
    expect(r123Ts20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2023-3",
        "sku": "r123-ts-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1463000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
