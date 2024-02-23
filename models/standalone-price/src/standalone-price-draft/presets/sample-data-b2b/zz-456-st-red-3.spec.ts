import type { TStandalonePriceDraft } from '../../../types';
import zz456StRed3 from './zz-456-st-red-3';

describe(`with zz456StRed3 preset`, () => {
  it(`should return a zz456StRed3 preset`, () => {
    const zz456StRed3Preset = zz456StRed3().build<TStandalonePriceDraft>();
    expect(zz456StRed3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-red-3",
        "sku": "zz456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4620000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a zz456StRed3 preset when built for graphql`, () => {
    const zz456StRed3PresetGraphql =
      zz456StRed3().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StRed3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-red-3",
        "sku": "zz456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4620000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
