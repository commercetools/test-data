import type { TStandalonePriceDraft } from '../../../types';
import zz456StRed1 from './zz-456-st-red-1';

describe(`with zz456StRed1 preset`, () => {
  it(`should return a zz456StRed1 preset`, () => {
    const zz456StRed1Preset = zz456StRed1().build<TStandalonePriceDraft>();
    expect(zz456StRed1Preset).toMatchInlineSnapshot(`
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
        "key": "zz456-st-red-1",
        "sku": "zz456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3850000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a zz456StRed1 preset when built for graphql`, () => {
    const zz456StRed1PresetGraphql =
      zz456StRed1().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StRed1PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "zz456-st-red-1",
        "sku": "zz456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3850000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
