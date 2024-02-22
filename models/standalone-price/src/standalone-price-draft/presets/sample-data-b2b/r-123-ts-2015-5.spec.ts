import type { TStandalonePriceDraft } from '../../../types';
import r123Ts20155 from './r-123-ts-2015-5';

describe(`with r123Ts20155 preset`, () => {
  it(`should return a r123Ts20155 preset`, () => {
    const r123Ts20155Preset = r123Ts20155().build<TStandalonePriceDraft>();
    expect(r123Ts20155Preset).toMatchInlineSnapshot(`
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
        "key": "r123-ts-2015-5",
        "sku": "r123-ts-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 855000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a r123Ts20155 preset when built for graphql`, () => {
    const r123Ts20155PresetGraphql =
      r123Ts20155().buildGraphql<TStandalonePriceDraft>();
    expect(r123Ts20155PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "r123-ts-2015-5",
        "sku": "r123-ts-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 855000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
