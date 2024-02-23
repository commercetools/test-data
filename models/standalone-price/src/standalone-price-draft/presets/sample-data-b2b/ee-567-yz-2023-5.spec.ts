import type { TStandalonePriceDraft } from '../../../types';
import ee567Yz20235 from './ee-567-yz-2023-5';

describe(`with ee567Yz20235 preset`, () => {
  it(`should return a ee567Yz20235 preset`, () => {
    const ee567Yz20235Preset = ee567Yz20235().build<TStandalonePriceDraft>();
    expect(ee567Yz20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2023-5",
        "sku": "ee567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1800000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ee567Yz20235 preset when built for graphql`, () => {
    const ee567Yz20235PresetGraphql =
      ee567Yz20235().buildGraphql<TStandalonePriceDraft>();
    expect(ee567Yz20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2023-5",
        "sku": "ee567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1800000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
