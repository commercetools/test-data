import type { TStandalonePriceDraft } from '../../../types';
import ee567Yz20158 from './ee-567-yz-2015-8';

describe(`with ee567Yz20158 preset`, () => {
  it(`should return a ee567Yz20158 preset`, () => {
    const ee567Yz20158Preset = ee567Yz20158().build<TStandalonePriceDraft>();
    expect(ee567Yz20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2015-8",
        "sku": "ee567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2200000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ee567Yz20158 preset when built for graphql`, () => {
    const ee567Yz20158PresetGraphql =
      ee567Yz20158().buildGraphql<TStandalonePriceDraft>();
    expect(ee567Yz20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2015-8",
        "sku": "ee567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2200000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
