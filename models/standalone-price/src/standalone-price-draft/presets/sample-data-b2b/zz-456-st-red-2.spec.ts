import type { TStandalonePriceDraft } from '../../../types';
import zz456StRed2 from './zz-456-st-red-2';

describe(`with zz456StRed2 preset`, () => {
  it(`should return a zz456StRed2 preset`, () => {
    const zz456StRed2Preset = zz456StRed2().build<TStandalonePriceDraft>();
    expect(zz456StRed2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-red-2",
        "sku": "zz456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3465000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a zz456StRed2 preset when built for graphql`, () => {
    const zz456StRed2PresetGraphql =
      zz456StRed2().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StRed2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-red-2",
        "sku": "zz456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3465000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
