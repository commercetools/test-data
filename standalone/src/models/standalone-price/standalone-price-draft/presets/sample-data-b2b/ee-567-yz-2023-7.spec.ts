import type { TStandalonePriceDraft } from '../../../types';
import ee567Yz20237 from './ee-567-yz-2023-7';

describe(`with ee567Yz20237 preset`, () => {
  it(`should return a ee567Yz20237 preset`, () => {
    const ee567Yz20237Preset = ee567Yz20237().build<TStandalonePriceDraft>();
    expect(ee567Yz20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2023-7",
        "recurrencePolicy": undefined,
        "sku": "ee567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2400000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ee567Yz20237 preset when built for graphql`, () => {
    const ee567Yz20237PresetGraphql =
      ee567Yz20237().buildGraphql<TStandalonePriceDraft>();
    expect(ee567Yz20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2023-7",
        "recurrencePolicy": undefined,
        "sku": "ee567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2400000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
