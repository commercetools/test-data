import type { TStandalonePriceDraft } from '../../../types';
import ee567Yz20232 from './ee-567-yz-2023-2';

describe(`with ee567Yz20232 preset`, () => {
  it(`should return a ee567Yz20232 preset`, () => {
    const ee567Yz20232Preset = ee567Yz20232().build<TStandalonePriceDraft>();
    expect(ee567Yz20232Preset).toMatchInlineSnapshot(`
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
        "key": "ee567-yz-2023-2",
        "sku": "ee567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2420000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ee567Yz20232 preset when built for graphql`, () => {
    const ee567Yz20232PresetGraphql =
      ee567Yz20232().buildGraphql<TStandalonePriceDraft>();
    expect(ee567Yz20232PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ee567-yz-2023-2",
        "sku": "ee567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2420000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
