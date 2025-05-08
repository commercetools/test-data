import type { TStandalonePriceDraft } from '../../../types';
import r123Ts20237 from './r-123-ts-2023-7';

describe(`with r123Ts20237 preset`, () => {
  it(`should return a r123Ts20237 preset`, () => {
    const r123Ts20237Preset = r123Ts20237().build<TStandalonePriceDraft>();
    expect(r123Ts20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2023-7",
        "sku": "r123-ts-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1140000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a r123Ts20237 preset when built for graphql`, () => {
    const r123Ts20237PresetGraphql =
      r123Ts20237().buildGraphql<TStandalonePriceDraft>();
    expect(r123Ts20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2023-7",
        "sku": "r123-ts-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1140000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
