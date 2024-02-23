import type { TStandalonePriceDraft } from '../../../types';
import ee567Yz20198 from './ee-567-yz-2019-8';

describe(`with ee567Yz20198 preset`, () => {
  it(`should return a ee567Yz20198 preset`, () => {
    const ee567Yz20198Preset = ee567Yz20198().build<TStandalonePriceDraft>();
    expect(ee567Yz20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2019-8",
        "sku": "ee567-yz-2019",
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

  it(`should return a ee567Yz20198 preset when built for graphql`, () => {
    const ee567Yz20198PresetGraphql =
      ee567Yz20198().buildGraphql<TStandalonePriceDraft>();
    expect(ee567Yz20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2019-8",
        "sku": "ee567-yz-2019",
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
