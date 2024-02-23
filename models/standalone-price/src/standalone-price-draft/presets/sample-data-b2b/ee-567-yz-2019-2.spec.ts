import type { TStandalonePriceDraft } from '../../../types';
import ee567Yz20192 from './ee-567-yz-2019-2';

describe(`with ee567Yz20192 preset`, () => {
  it(`should return a ee567Yz20192 preset`, () => {
    const ee567Yz20192Preset = ee567Yz20192().build<TStandalonePriceDraft>();
    expect(ee567Yz20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2019-2",
        "sku": "ee567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2200000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ee567Yz20192 preset when built for graphql`, () => {
    const ee567Yz20192PresetGraphql =
      ee567Yz20192().buildGraphql<TStandalonePriceDraft>();
    expect(ee567Yz20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2019-2",
        "sku": "ee567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2200000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
