import type { TStandalonePriceDraft } from '../../../types';
import a789Bc20155 from './a-789-bc-2015-5';

describe(`with a789Bc20155 preset`, () => {
  it(`should return a a789Bc20155 preset`, () => {
    const a789Bc20155Preset = a789Bc20155().build<TStandalonePriceDraft>();
    expect(a789Bc20155Preset).toMatchInlineSnapshot(`
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
        "key": "a789-bc-2015-5",
        "sku": "a789-bc-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1125000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a a789Bc20155 preset when built for graphql`, () => {
    const a789Bc20155PresetGraphql =
      a789Bc20155().buildGraphql<TStandalonePriceDraft>();
    expect(a789Bc20155PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "a789-bc-2015-5",
        "sku": "a789-bc-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1125000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
