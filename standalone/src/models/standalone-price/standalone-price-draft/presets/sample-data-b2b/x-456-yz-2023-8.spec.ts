import type { TStandalonePriceDraft } from '../../../types';
import x456Yz20238 from './x-456-yz-2023-8';

describe(`with x456Yz20238 preset`, () => {
  it(`should return a x456Yz20238 preset`, () => {
    const x456Yz20238Preset = x456Yz20238().build<TStandalonePriceDraft>();
    expect(x456Yz20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2023-8",
        "recurrencePolicy": undefined,
        "sku": "x456-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1210000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a x456Yz20238 preset when built for graphql`, () => {
    const x456Yz20238PresetGraphql =
      x456Yz20238().buildGraphql<TStandalonePriceDraft>();
    expect(x456Yz20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2023-8",
        "recurrencePolicy": undefined,
        "sku": "x456-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1210000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
