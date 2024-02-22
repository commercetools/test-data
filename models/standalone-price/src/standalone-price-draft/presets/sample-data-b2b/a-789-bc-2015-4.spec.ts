import type { TStandalonePriceDraft } from '../../../types';
import a789Bc20154 from './a-789-bc-2015-4';

describe(`with a789Bc20154 preset`, () => {
  it(`should return a a789Bc20154 preset`, () => {
    const a789Bc20154Preset = a789Bc20154().build<TStandalonePriceDraft>();
    expect(a789Bc20154Preset).toMatchInlineSnapshot(`
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
        "key": "a789-bc-2015-4",
        "sku": "a789-bc-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1250000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a a789Bc20154 preset when built for graphql`, () => {
    const a789Bc20154PresetGraphql =
      a789Bc20154().buildGraphql<TStandalonePriceDraft>();
    expect(a789Bc20154PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "a789-bc-2015-4",
        "sku": "a789-bc-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1250000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
