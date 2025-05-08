import type { TStandalonePriceDraft } from '../../../types';
import ee567Yz20191 from './ee-567-yz-2019-1';

describe(`with ee567Yz20191 preset`, () => {
  it(`should return a ee567Yz20191 preset`, () => {
    const ee567Yz20191Preset = ee567Yz20191().build<TStandalonePriceDraft>();
    expect(ee567Yz20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2019-1",
        "sku": "ee567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2420000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ee567Yz20191 preset when built for graphql`, () => {
    const ee567Yz20191PresetGraphql =
      ee567Yz20191().buildGraphql<TStandalonePriceDraft>();
    expect(ee567Yz20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2019-1",
        "sku": "ee567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2420000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
