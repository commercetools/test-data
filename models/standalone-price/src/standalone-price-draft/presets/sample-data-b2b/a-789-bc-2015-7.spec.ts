import type { TStandalonePriceDraft } from '../../../types';
import a789Bc20157 from './a-789-bc-2015-7';

describe(`with a789Bc20157 preset`, () => {
  it(`should return a a789Bc20157 preset`, () => {
    const a789Bc20157Preset = a789Bc20157().build<TStandalonePriceDraft>();
    expect(a789Bc20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2015-7",
        "sku": "a789-bc-2015",
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

  it(`should return a a789Bc20157 preset when built for graphql`, () => {
    const a789Bc20157PresetGraphql =
      a789Bc20157().buildGraphql<TStandalonePriceDraft>();
    expect(a789Bc20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2015-7",
        "sku": "a789-bc-2015",
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
