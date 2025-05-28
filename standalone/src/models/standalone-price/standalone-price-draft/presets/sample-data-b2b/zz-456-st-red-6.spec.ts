import type { TStandalonePriceDraft } from '../../../types';
import zz456StRed6 from './zz-456-st-red-6';

describe(`with zz456StRed6 preset`, () => {
  it(`should return a zz456StRed6 preset`, () => {
    const zz456StRed6Preset = zz456StRed6().build<TStandalonePriceDraft>();
    expect(zz456StRed6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-red-6",
        "recurrencePolicy": undefined,
        "sku": "zz456-st-red",
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

  it(`should return a zz456StRed6 preset when built for graphql`, () => {
    const zz456StRed6PresetGraphql =
      zz456StRed6().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StRed6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-red-6",
        "recurrencePolicy": undefined,
        "sku": "zz456-st-red",
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
