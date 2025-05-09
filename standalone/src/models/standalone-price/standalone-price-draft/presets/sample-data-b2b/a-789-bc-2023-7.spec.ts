import type { TStandalonePriceDraft } from '../../../types';
import a789Bc20237 from './a-789-bc-2023-7';

describe(`with a789Bc20237 preset`, () => {
  it(`should return a a789Bc20237 preset`, () => {
    const a789Bc20237Preset = a789Bc20237().build<TStandalonePriceDraft>();
    expect(a789Bc20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2023-7",
        "sku": "a789-bc-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1500000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a a789Bc20237 preset when built for graphql`, () => {
    const a789Bc20237PresetGraphql =
      a789Bc20237().buildGraphql<TStandalonePriceDraft>();
    expect(a789Bc20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2023-7",
        "sku": "a789-bc-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1500000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
