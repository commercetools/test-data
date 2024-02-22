import type { TStandalonePriceDraft } from '../../../types';
import zz456StGreen1 from './zz-456-st-green-1';

describe(`with zz456StGreen1 preset`, () => {
  it(`should return a zz456StGreen1 preset`, () => {
    const zz456StGreen1Preset = zz456StGreen1().build<TStandalonePriceDraft>();
    expect(zz456StGreen1Preset).toMatchInlineSnapshot(`
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
        "key": "zz456-st-green-1",
        "sku": "zz456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4620000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a zz456StGreen1 preset when built for graphql`, () => {
    const zz456StGreen1PresetGraphql =
      zz456StGreen1().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StGreen1PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "zz456-st-green-1",
        "sku": "zz456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4620000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
