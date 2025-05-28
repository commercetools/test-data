import type { TStandalonePriceDraft } from '../../../types';
import x456Yz20151 from './x-456-yz-2015-1';

describe(`with x456Yz20151 preset`, () => {
  it(`should return a x456Yz20151 preset`, () => {
    const x456Yz20151Preset = x456Yz20151().build<TStandalonePriceDraft>();
    expect(x456Yz20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2015-1",
        "recurrencePolicy": undefined,
        "sku": "x456-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1210000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a x456Yz20151 preset when built for graphql`, () => {
    const x456Yz20151PresetGraphql =
      x456Yz20151().buildGraphql<TStandalonePriceDraft>();
    expect(x456Yz20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2015-1",
        "recurrencePolicy": undefined,
        "sku": "x456-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1210000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
