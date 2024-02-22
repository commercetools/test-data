import type { TStandalonePriceDraft } from '../../../types';
import zz456StGreen7 from './zz-456-st-green-7';

describe(`with zz456StGreen7 preset`, () => {
  it(`should return a zz456StGreen7 preset`, () => {
    const zz456StGreen7Preset = zz456StGreen7().build<TStandalonePriceDraft>();
    expect(zz456StGreen7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-green-7",
        "sku": "zz456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4200000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a zz456StGreen7 preset when built for graphql`, () => {
    const zz456StGreen7PresetGraphql =
      zz456StGreen7().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StGreen7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-green-7",
        "sku": "zz456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4200000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
