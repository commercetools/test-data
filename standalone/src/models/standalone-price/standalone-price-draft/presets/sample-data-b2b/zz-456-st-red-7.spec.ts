import type { TStandalonePriceDraft } from '../../../types';
import zz456StRed7 from './zz-456-st-red-7';

describe(`with zz456StRed7 preset`, () => {
  it(`should return a zz456StRed7 preset`, () => {
    const zz456StRed7Preset = zz456StRed7().build<TStandalonePriceDraft>();
    expect(zz456StRed7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-red-7",
        "recurrencePolicy": undefined,
        "sku": "zz456-st-red",
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

  it(`should return a zz456StRed7 preset when built for graphql`, () => {
    const zz456StRed7PresetGraphql =
      zz456StRed7().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StRed7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-red-7",
        "recurrencePolicy": undefined,
        "sku": "zz456-st-red",
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
