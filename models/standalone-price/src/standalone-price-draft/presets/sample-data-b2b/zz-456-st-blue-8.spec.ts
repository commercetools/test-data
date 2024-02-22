import type { TStandalonePriceDraft } from '../../../types';
import zz456StBlue8 from './zz-456-st-blue-8';

describe(`with zz456StBlue8 preset`, () => {
  it(`should return a zz456StBlue8 preset`, () => {
    const zz456StBlue8Preset = zz456StBlue8().build<TStandalonePriceDraft>();
    expect(zz456StBlue8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-blue-8",
        "sku": "zz456-st-blue",
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

  it(`should return a zz456StBlue8 preset when built for graphql`, () => {
    const zz456StBlue8PresetGraphql =
      zz456StBlue8().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StBlue8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-blue-8",
        "sku": "zz456-st-blue",
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
