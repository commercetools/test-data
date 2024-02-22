import type { TStandalonePriceDraft } from '../../../types';
import k567Yz20237 from './k-567-yz-2023-7';

describe(`with k567Yz20237 preset`, () => {
  it(`should return a k567Yz20237 preset`, () => {
    const k567Yz20237Preset = k567Yz20237().build<TStandalonePriceDraft>();
    expect(k567Yz20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2023-7",
        "sku": "k567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1560000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a k567Yz20237 preset when built for graphql`, () => {
    const k567Yz20237PresetGraphql =
      k567Yz20237().buildGraphql<TStandalonePriceDraft>();
    expect(k567Yz20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2023-7",
        "sku": "k567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1560000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
