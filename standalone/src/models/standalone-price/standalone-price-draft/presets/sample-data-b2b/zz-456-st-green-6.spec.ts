import type { TStandalonePriceDraft } from '../../../types';
import zz456StGreen6 from './zz-456-st-green-6';

describe(`with zz456StGreen6 preset`, () => {
  it(`should return a zz456StGreen6 preset`, () => {
    const zz456StGreen6Preset = zz456StGreen6().build<TStandalonePriceDraft>();
    expect(zz456StGreen6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-green-6",
        "recurrencePolicy": undefined,
        "sku": "zz456-st-green",
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

  it(`should return a zz456StGreen6 preset when built for graphql`, () => {
    const zz456StGreen6PresetGraphql =
      zz456StGreen6().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StGreen6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-green-6",
        "recurrencePolicy": undefined,
        "sku": "zz456-st-green",
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
