import type { TStandalonePriceDraft } from '../../../types';
import ee567Yz20238 from './ee-567-yz-2023-8';

describe(`with ee567Yz20238 preset`, () => {
  it(`should return a ee567Yz20238 preset`, () => {
    const ee567Yz20238Preset = ee567Yz20238().build<TStandalonePriceDraft>();
    expect(ee567Yz20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2023-8",
        "recurrencePolicy": undefined,
        "sku": "ee567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2200000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ee567Yz20238 preset when built for graphql`, () => {
    const ee567Yz20238PresetGraphql =
      ee567Yz20238().buildGraphql<TStandalonePriceDraft>();
    expect(ee567Yz20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2023-8",
        "recurrencePolicy": undefined,
        "sku": "ee567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2200000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
