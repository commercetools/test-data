import type { TStandalonePriceDraft } from '../../../types';
import ee567Yz20151 from './ee-567-yz-2015-1';

describe(`with ee567Yz20151 preset`, () => {
  it(`should return a ee567Yz20151 preset`, () => {
    const ee567Yz20151Preset = ee567Yz20151().build<TStandalonePriceDraft>();
    expect(ee567Yz20151Preset).toMatchInlineSnapshot(`
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
        "key": "ee567-yz-2015-1",
        "sku": "ee567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2200000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ee567Yz20151 preset when built for graphql`, () => {
    const ee567Yz20151PresetGraphql =
      ee567Yz20151().buildGraphql<TStandalonePriceDraft>();
    expect(ee567Yz20151PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ee567-yz-2015-1",
        "sku": "ee567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2200000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
