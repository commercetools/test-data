import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20155 from './oo-789-uv-2015-5';

describe(`with oo789Uv20155 preset`, () => {
  it(`should return a oo789Uv20155 preset`, () => {
    const oo789Uv20155Preset = oo789Uv20155().build<TStandalonePriceDraft>();
    expect(oo789Uv20155Preset).toMatchInlineSnapshot(`
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
        "key": "oo789-uv-2015-5",
        "sku": "oo789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2250000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a oo789Uv20155 preset when built for graphql`, () => {
    const oo789Uv20155PresetGraphql =
      oo789Uv20155().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20155PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "oo789-uv-2015-5",
        "sku": "oo789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2250000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
