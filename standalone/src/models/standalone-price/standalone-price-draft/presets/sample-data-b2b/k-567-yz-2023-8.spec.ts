import type { TStandalonePriceDraft } from '../../../types';
import k567Yz20238 from './k-567-yz-2023-8';

describe(`with k567Yz20238 preset`, () => {
  it(`should return a k567Yz20238 preset`, () => {
    const k567Yz20238Preset = k567Yz20238().build<TStandalonePriceDraft>();
    expect(k567Yz20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2023-8",
        "sku": "k567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1430000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a k567Yz20238 preset when built for graphql`, () => {
    const k567Yz20238PresetGraphql =
      k567Yz20238().buildGraphql<TStandalonePriceDraft>();
    expect(k567Yz20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2023-8",
        "sku": "k567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1430000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
