import type { TStandalonePriceDraft } from '../../../types';
import x456Yz20195 from './x-456-yz-2019-5';

describe(`with x456Yz20195 preset`, () => {
  it(`should return a x456Yz20195 preset`, () => {
    const x456Yz20195Preset = x456Yz20195().build<TStandalonePriceDraft>();
    expect(x456Yz20195Preset).toMatchInlineSnapshot(`
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
        "key": "x456-yz-2019-5",
        "sku": "x456-yz-2019",
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

  it(`should return a x456Yz20195 preset when built for graphql`, () => {
    const x456Yz20195PresetGraphql =
      x456Yz20195().buildGraphql<TStandalonePriceDraft>();
    expect(x456Yz20195PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "x456-yz-2019-5",
        "sku": "x456-yz-2019",
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
