import type { TStandalonePriceDraft } from '../../../types';
import a789Bc20156 from './a-789-bc-2015-6';

describe(`with a789Bc20156 preset`, () => {
  it(`should return a a789Bc20156 preset`, () => {
    const a789Bc20156Preset = a789Bc20156().build<TStandalonePriceDraft>();
    expect(a789Bc20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2015-6",
        "sku": "a789-bc-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a a789Bc20156 preset when built for graphql`, () => {
    const a789Bc20156PresetGraphql =
      a789Bc20156().buildGraphql<TStandalonePriceDraft>();
    expect(a789Bc20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2015-6",
        "sku": "a789-bc-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
