import type { TStandalonePriceDraft } from '../../../types';
import ee567Yz20193 from './ee-567-yz-2019-3';

describe(`with ee567Yz20193 preset`, () => {
  it(`should return a ee567Yz20193 preset`, () => {
    const ee567Yz20193Preset = ee567Yz20193().build<TStandalonePriceDraft>();
    expect(ee567Yz20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2019-3",
        "recurrencePolicy": undefined,
        "sku": "ee567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2860000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ee567Yz20193 preset when built for graphql`, () => {
    const ee567Yz20193PresetGraphql =
      ee567Yz20193().buildGraphql<TStandalonePriceDraft>();
    expect(ee567Yz20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2019-3",
        "recurrencePolicy": undefined,
        "sku": "ee567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2860000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
