import type { TStandalonePriceDraft } from '../../../types';
import x456Yz20156 from './x-456-yz-2015-6';

describe(`with x456Yz20156 preset`, () => {
  it(`should return a x456Yz20156 preset`, () => {
    const x456Yz20156Preset = x456Yz20156().build<TStandalonePriceDraft>();
    expect(x456Yz20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2015-6",
        "sku": "x456-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 880000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a x456Yz20156 preset when built for graphql`, () => {
    const x456Yz20156PresetGraphql =
      x456Yz20156().buildGraphql<TStandalonePriceDraft>();
    expect(x456Yz20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2015-6",
        "sku": "x456-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 880000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
