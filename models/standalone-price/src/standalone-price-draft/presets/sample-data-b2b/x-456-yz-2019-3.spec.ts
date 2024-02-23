import type { TStandalonePriceDraft } from '../../../types';
import x456Yz20193 from './x-456-yz-2019-3';

describe(`with x456Yz20193 preset`, () => {
  it(`should return a x456Yz20193 preset`, () => {
    const x456Yz20193Preset = x456Yz20193().build<TStandalonePriceDraft>();
    expect(x456Yz20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2019-3",
        "sku": "x456-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1573000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a x456Yz20193 preset when built for graphql`, () => {
    const x456Yz20193PresetGraphql =
      x456Yz20193().buildGraphql<TStandalonePriceDraft>();
    expect(x456Yz20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2019-3",
        "sku": "x456-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1573000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
