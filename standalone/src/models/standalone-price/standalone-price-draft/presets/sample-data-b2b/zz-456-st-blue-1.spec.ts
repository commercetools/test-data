import type { TStandalonePriceDraft } from '../../../types';
import zz456StBlue1 from './zz-456-st-blue-1';

describe(`with zz456StBlue1 preset`, () => {
  it(`should return a zz456StBlue1 preset`, () => {
    const zz456StBlue1Preset = zz456StBlue1().build<TStandalonePriceDraft>();
    expect(zz456StBlue1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-blue-1",
        "recurrencePolicy": undefined,
        "sku": "zz456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4235001,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a zz456StBlue1 preset when built for graphql`, () => {
    const zz456StBlue1PresetGraphql =
      zz456StBlue1().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StBlue1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-blue-1",
        "recurrencePolicy": undefined,
        "sku": "zz456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4235001,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
