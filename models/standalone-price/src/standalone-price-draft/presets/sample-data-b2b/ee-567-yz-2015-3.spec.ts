import type { TStandalonePriceDraft } from '../../../types';
import ee567Yz20153 from './ee-567-yz-2015-3';

describe(`with ee567Yz20153 preset`, () => {
  it(`should return a ee567Yz20153 preset`, () => {
    const ee567Yz20153Preset = ee567Yz20153().build<TStandalonePriceDraft>();
    expect(ee567Yz20153Preset).toMatchInlineSnapshot(`
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
        "key": "ee567-yz-2015-3",
        "sku": "ee567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2640000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ee567Yz20153 preset when built for graphql`, () => {
    const ee567Yz20153PresetGraphql =
      ee567Yz20153().buildGraphql<TStandalonePriceDraft>();
    expect(ee567Yz20153PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ee567-yz-2015-3",
        "sku": "ee567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2640000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
