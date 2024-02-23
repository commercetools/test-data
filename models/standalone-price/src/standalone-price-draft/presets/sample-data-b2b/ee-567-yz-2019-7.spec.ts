import type { TStandalonePriceDraft } from '../../../types';
import ee567Yz20197 from './ee-567-yz-2019-7';

describe(`with ee567Yz20197 preset`, () => {
  it(`should return a ee567Yz20197 preset`, () => {
    const ee567Yz20197Preset = ee567Yz20197().build<TStandalonePriceDraft>();
    expect(ee567Yz20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2019-7",
        "sku": "ee567-yz-2019",
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

  it(`should return a ee567Yz20197 preset when built for graphql`, () => {
    const ee567Yz20197PresetGraphql =
      ee567Yz20197().buildGraphql<TStandalonePriceDraft>();
    expect(ee567Yz20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2019-7",
        "sku": "ee567-yz-2019",
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
