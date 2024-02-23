import type { TStandalonePriceDraft } from '../../../types';
import zz456StRed8 from './zz-456-st-red-8';

describe(`with zz456StRed8 preset`, () => {
  it(`should return a zz456StRed8 preset`, () => {
    const zz456StRed8Preset = zz456StRed8().build<TStandalonePriceDraft>();
    expect(zz456StRed8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-red-8",
        "sku": "zz456-st-red",
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

  it(`should return a zz456StRed8 preset when built for graphql`, () => {
    const zz456StRed8PresetGraphql =
      zz456StRed8().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StRed8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-red-8",
        "sku": "zz456-st-red",
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
