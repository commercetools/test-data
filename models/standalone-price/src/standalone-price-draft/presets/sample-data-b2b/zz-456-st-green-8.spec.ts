import type { TStandalonePriceDraft } from '../../../types';
import zz456StGreen8 from './zz-456-st-green-8';

describe(`with zz456StGreen8 preset`, () => {
  it(`should return a zz456StGreen8 preset`, () => {
    const zz456StGreen8Preset = zz456StGreen8().build<TStandalonePriceDraft>();
    expect(zz456StGreen8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-green-8",
        "sku": "zz456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3850001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a zz456StGreen8 preset when built for graphql`, () => {
    const zz456StGreen8PresetGraphql =
      zz456StGreen8().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StGreen8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-green-8",
        "sku": "zz456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3850001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
