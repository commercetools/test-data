import type { TStandalonePriceDraft } from '../../../types';
import ee567Yz20194 from './ee-567-yz-2019-4';

describe(`with ee567Yz20194 preset`, () => {
  it(`should return a ee567Yz20194 preset`, () => {
    const ee567Yz20194Preset = ee567Yz20194().build<TStandalonePriceDraft>();
    expect(ee567Yz20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2019-4",
        "sku": "ee567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ee567Yz20194 preset when built for graphql`, () => {
    const ee567Yz20194PresetGraphql =
      ee567Yz20194().buildGraphql<TStandalonePriceDraft>();
    expect(ee567Yz20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2019-4",
        "sku": "ee567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
