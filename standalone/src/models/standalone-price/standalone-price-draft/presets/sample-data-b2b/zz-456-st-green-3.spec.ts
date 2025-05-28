import type { TStandalonePriceDraft } from '../../../types';
import zz456StGreen3 from './zz-456-st-green-3';

describe(`with zz456StGreen3 preset`, () => {
  it(`should return a zz456StGreen3 preset`, () => {
    const zz456StGreen3Preset = zz456StGreen3().build<TStandalonePriceDraft>();
    expect(zz456StGreen3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-green-3",
        "recurrencePolicy": undefined,
        "sku": "zz456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5390000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a zz456StGreen3 preset when built for graphql`, () => {
    const zz456StGreen3PresetGraphql =
      zz456StGreen3().buildGraphql<TStandalonePriceDraft>();
    expect(zz456StGreen3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "zz456-st-green-3",
        "recurrencePolicy": undefined,
        "sku": "zz456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5390000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
