import type { TStandalonePriceDraft } from '../../../types';
import ff890Op20237 from './ff-890-op-2023-7';

describe(`with ff890Op20237 preset`, () => {
  it(`should return a ff890Op20237 preset`, () => {
    const ff890Op20237Preset = ff890Op20237().build<TStandalonePriceDraft>();
    expect(ff890Op20237Preset).toMatchInlineSnapshot(`
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
        "key": "ff890-op-2023-7",
        "sku": "ff890-op-2023",
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

  it(`should return a ff890Op20237 preset when built for graphql`, () => {
    const ff890Op20237PresetGraphql =
      ff890Op20237().buildGraphql<TStandalonePriceDraft>();
    expect(ff890Op20237PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ff890-op-2023-7",
        "sku": "ff890-op-2023",
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
