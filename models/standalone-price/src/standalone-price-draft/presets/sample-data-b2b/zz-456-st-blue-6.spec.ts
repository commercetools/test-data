import type { TStandalonePriceDraft } from '../../../types';
import zz456StBlue6 from './zz-456-st-blue-6';

describe(`with zz456StBlue6 preset`, () => {
  it(`should return a zz456StBlue6 preset`, () => {
    const zz456StBlue6Preset = zz456StBlue6().build<TStandalonePriceDraft>();
    expect(zz456StBlue6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-blue-6",
        "sku": "zz456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2800000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a zz456StBlue6 preset when built for graphql`, () => {
    const zz456StBlue6PresetGraphql =
      zz456StBlue6().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StBlue6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-blue-6",
        "sku": "zz456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2800000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
