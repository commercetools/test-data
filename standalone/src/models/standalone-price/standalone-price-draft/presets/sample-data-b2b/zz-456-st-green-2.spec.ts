import type { TStandalonePriceDraft } from '../../../types';
import zz456StGreen2 from './zz-456-st-green-2';

describe(`with zz456StGreen2 preset`, () => {
  it(`should return a zz456StGreen2 preset`, () => {
    const zz456StGreen2Preset = zz456StGreen2().build<TStandalonePriceDraft>();
    expect(zz456StGreen2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-green-2",
        "sku": "zz456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4235001,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a zz456StGreen2 preset when built for graphql`, () => {
    const zz456StGreen2PresetGraphql =
      zz456StGreen2().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StGreen2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-green-2",
        "sku": "zz456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4235001,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
