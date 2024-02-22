import type { TStandalonePriceDraft } from '../../../types';
import a789Bc20235 from './a-789-bc-2023-5';

describe(`with a789Bc20235 preset`, () => {
  it(`should return a a789Bc20235 preset`, () => {
    const a789Bc20235Preset = a789Bc20235().build<TStandalonePriceDraft>();
    expect(a789Bc20235Preset).toMatchInlineSnapshot(`
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
        "key": "a789-bc-2023-5",
        "sku": "a789-bc-2023",
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

  it(`should return a a789Bc20235 preset when built for graphql`, () => {
    const a789Bc20235PresetGraphql =
      a789Bc20235().buildGraphql<TStandalonePriceDraft>();
    expect(a789Bc20235PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "a789-bc-2023-5",
        "sku": "a789-bc-2023",
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
