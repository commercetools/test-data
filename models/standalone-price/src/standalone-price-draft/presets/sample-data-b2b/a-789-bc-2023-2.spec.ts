import type { TStandalonePriceDraft } from '../../../types';
import a789Bc20232 from './a-789-bc-2023-2';

describe(`with a789Bc20232 preset`, () => {
  it(`should return a a789Bc20232 preset`, () => {
    const a789Bc20232Preset = a789Bc20232().build<TStandalonePriceDraft>();
    expect(a789Bc20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2023-2",
        "sku": "a789-bc-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1512500,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a a789Bc20232 preset when built for graphql`, () => {
    const a789Bc20232PresetGraphql =
      a789Bc20232().buildGraphql<TStandalonePriceDraft>();
    expect(a789Bc20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2023-2",
        "sku": "a789-bc-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1512500,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
