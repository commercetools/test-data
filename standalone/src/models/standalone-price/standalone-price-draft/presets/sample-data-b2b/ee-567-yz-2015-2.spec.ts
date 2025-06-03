import type { TStandalonePriceDraft } from '../../../types';
import ee567Yz20152 from './ee-567-yz-2015-2';

describe(`with ee567Yz20152 preset`, () => {
  it(`should return a ee567Yz20152 preset`, () => {
    const ee567Yz20152Preset = ee567Yz20152().build<TStandalonePriceDraft>();
    expect(ee567Yz20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2015-2",
        "recurrencePolicy": undefined,
        "sku": "ee567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1980000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ee567Yz20152 preset when built for graphql`, () => {
    const ee567Yz20152PresetGraphql =
      ee567Yz20152().buildGraphql<TStandalonePriceDraft>();
    expect(ee567Yz20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2015-2",
        "recurrencePolicy": undefined,
        "sku": "ee567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1980000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
