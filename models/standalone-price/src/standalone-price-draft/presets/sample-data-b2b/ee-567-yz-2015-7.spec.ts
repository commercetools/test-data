import type { TStandalonePriceDraft } from '../../../types';
import ee567Yz20157 from './ee-567-yz-2015-7';

describe(`with ee567Yz20157 preset`, () => {
  it(`should return a ee567Yz20157 preset`, () => {
    const ee567Yz20157Preset = ee567Yz20157().build<TStandalonePriceDraft>();
    expect(ee567Yz20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2015-7",
        "sku": "ee567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2400000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ee567Yz20157 preset when built for graphql`, () => {
    const ee567Yz20157PresetGraphql =
      ee567Yz20157().buildGraphql<TStandalonePriceDraft>();
    expect(ee567Yz20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2015-7",
        "sku": "ee567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2400000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
