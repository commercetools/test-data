import type { TStandalonePriceDraft } from '../../../types';
import ee567Yz20156 from './ee-567-yz-2015-6';

describe(`with ee567Yz20156 preset`, () => {
  it(`should return a ee567Yz20156 preset`, () => {
    const ee567Yz20156Preset = ee567Yz20156().build<TStandalonePriceDraft>();
    expect(ee567Yz20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2015-6",
        "sku": "ee567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1600000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ee567Yz20156 preset when built for graphql`, () => {
    const ee567Yz20156PresetGraphql =
      ee567Yz20156().buildGraphql<TStandalonePriceDraft>();
    expect(ee567Yz20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2015-6",
        "sku": "ee567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1600000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
