import type { TStandalonePriceDraft } from '../../../types';
import zz456StBlue3 from './zz-456-st-blue-3';

describe(`with zz456StBlue3 preset`, () => {
  it(`should return a zz456StBlue3 preset`, () => {
    const zz456StBlue3Preset = zz456StBlue3().build<TStandalonePriceDraft>();
    expect(zz456StBlue3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-blue-3",
        "recurrencePolicy": undefined,
        "sku": "zz456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5005000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a zz456StBlue3 preset when built for graphql`, () => {
    const zz456StBlue3PresetGraphql =
      zz456StBlue3().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StBlue3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-blue-3",
        "recurrencePolicy": undefined,
        "sku": "zz456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5005000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
