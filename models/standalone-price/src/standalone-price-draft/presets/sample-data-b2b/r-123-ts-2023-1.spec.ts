import type { TStandalonePriceDraft } from '../../../types';
import r123Ts20231 from './r-123-ts-2023-1';

describe(`with r123Ts20231 preset`, () => {
  it(`should return a r123Ts20231 preset`, () => {
    const r123Ts20231Preset = r123Ts20231().build<TStandalonePriceDraft>();
    expect(r123Ts20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2023-1",
        "sku": "r123-ts-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1254000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a r123Ts20231 preset when built for graphql`, () => {
    const r123Ts20231PresetGraphql =
      r123Ts20231().buildGraphql<TStandalonePriceDraft>();
    expect(r123Ts20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2023-1",
        "sku": "r123-ts-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1254000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
