import type { TStandalonePriceDraft } from '../../../types';
import qq567Yz20237 from './qq-567-yz-2023-7';

describe(`with qq567Yz20237 preset`, () => {
  it(`should return a qq567Yz20237 preset`, () => {
    const qq567Yz20237Preset = qq567Yz20237().build<TStandalonePriceDraft>();
    expect(qq567Yz20237Preset).toMatchInlineSnapshot(`
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
        "key": "qq567-yz-2023-7",
        "sku": "qq567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a qq567Yz20237 preset when built for graphql`, () => {
    const qq567Yz20237PresetGraphql =
      qq567Yz20237().buildGraphql<TStandalonePriceDraft>();
    expect(qq567Yz20237PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "qq567-yz-2023-7",
        "sku": "qq567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
