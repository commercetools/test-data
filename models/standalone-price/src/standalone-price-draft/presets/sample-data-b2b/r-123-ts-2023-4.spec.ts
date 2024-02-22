import type { TStandalonePriceDraft } from '../../../types';
import r123Ts20234 from './r-123-ts-2023-4';

describe(`with r123Ts20234 preset`, () => {
  it(`should return a r123Ts20234 preset`, () => {
    const r123Ts20234Preset = r123Ts20234().build<TStandalonePriceDraft>();
    expect(r123Ts20234Preset).toMatchInlineSnapshot(`
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
        "key": "r123-ts-2023-4",
        "sku": "r123-ts-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 950000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a r123Ts20234 preset when built for graphql`, () => {
    const r123Ts20234PresetGraphql =
      r123Ts20234().buildGraphql<TStandalonePriceDraft>();
    expect(r123Ts20234PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "r123-ts-2023-4",
        "sku": "r123-ts-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 950000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
