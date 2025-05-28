import type { TStandalonePriceDraft } from '../../../types';
import x456Yz20153 from './x-456-yz-2015-3';

describe(`with x456Yz20153 preset`, () => {
  it(`should return a x456Yz20153 preset`, () => {
    const x456Yz20153Preset = x456Yz20153().build<TStandalonePriceDraft>();
    expect(x456Yz20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2015-3",
        "recurrencePolicy": undefined,
        "sku": "x456-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1452000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a x456Yz20153 preset when built for graphql`, () => {
    const x456Yz20153PresetGraphql =
      x456Yz20153().buildGraphql<TStandalonePriceDraft>();
    expect(x456Yz20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2015-3",
        "recurrencePolicy": undefined,
        "sku": "x456-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1452000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
