import type { TStandalonePriceDraft } from '../../../types';
import a789Bc20197 from './a-789-bc-2019-7';

describe(`with a789Bc20197 preset`, () => {
  it(`should return a a789Bc20197 preset`, () => {
    const a789Bc20197Preset = a789Bc20197().build<TStandalonePriceDraft>();
    expect(a789Bc20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2019-7",
        "sku": "a789-bc-2019",
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

  it(`should return a a789Bc20197 preset when built for graphql`, () => {
    const a789Bc20197PresetGraphql =
      a789Bc20197().buildGraphql<TStandalonePriceDraft>();
    expect(a789Bc20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2019-7",
        "sku": "a789-bc-2019",
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
