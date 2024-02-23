import type { TStandalonePriceDraft } from '../../../types';
import x456Yz20235 from './x-456-yz-2023-5';

describe(`with x456Yz20235 preset`, () => {
  it(`should return a x456Yz20235 preset`, () => {
    const x456Yz20235Preset = x456Yz20235().build<TStandalonePriceDraft>();
    expect(x456Yz20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2023-5",
        "sku": "x456-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 990000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a x456Yz20235 preset when built for graphql`, () => {
    const x456Yz20235PresetGraphql =
      x456Yz20235().buildGraphql<TStandalonePriceDraft>();
    expect(x456Yz20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2023-5",
        "sku": "x456-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 990000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
