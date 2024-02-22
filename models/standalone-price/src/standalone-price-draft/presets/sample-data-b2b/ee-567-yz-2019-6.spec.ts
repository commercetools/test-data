import type { TStandalonePriceDraft } from '../../../types';
import ee567Yz20196 from './ee-567-yz-2019-6';

describe(`with ee567Yz20196 preset`, () => {
  it(`should return a ee567Yz20196 preset`, () => {
    const ee567Yz20196Preset = ee567Yz20196().build<TStandalonePriceDraft>();
    expect(ee567Yz20196Preset).toMatchInlineSnapshot(`
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
        "key": "ee567-yz-2019-6",
        "sku": "ee567-yz-2019",
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

  it(`should return a ee567Yz20196 preset when built for graphql`, () => {
    const ee567Yz20196PresetGraphql =
      ee567Yz20196().buildGraphql<TStandalonePriceDraft>();
    expect(ee567Yz20196PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ee567-yz-2019-6",
        "sku": "ee567-yz-2019",
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
