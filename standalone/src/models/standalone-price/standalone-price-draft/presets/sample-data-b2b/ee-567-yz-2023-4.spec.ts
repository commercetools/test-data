import type { TStandalonePriceDraft } from '../../../types';
import ee567Yz20234 from './ee-567-yz-2023-4';

describe(`with ee567Yz20234 preset`, () => {
  it(`should return a ee567Yz20234 preset`, () => {
    const ee567Yz20234Preset = ee567Yz20234().build<TStandalonePriceDraft>();
    expect(ee567Yz20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2023-4",
        "recurrencePolicy": undefined,
        "sku": "ee567-yz-2023",
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

  it(`should return a ee567Yz20234 preset when built for graphql`, () => {
    const ee567Yz20234PresetGraphql =
      ee567Yz20234().buildGraphql<TStandalonePriceDraft>();
    expect(ee567Yz20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2023-4",
        "recurrencePolicy": undefined,
        "sku": "ee567-yz-2023",
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
