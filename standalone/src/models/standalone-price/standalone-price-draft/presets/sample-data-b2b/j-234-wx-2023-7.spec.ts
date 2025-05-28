import type { TStandalonePriceDraft } from '../../../types';
import j234Wx20237 from './j-234-wx-2023-7';

describe(`with j234Wx20237 preset`, () => {
  it(`should return a j234Wx20237 preset`, () => {
    const j234Wx20237Preset = j234Wx20237().build<TStandalonePriceDraft>();
    expect(j234Wx20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "j234-wx-2023-7",
        "recurrencePolicy": undefined,
        "sku": "j234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a j234Wx20237 preset when built for graphql`, () => {
    const j234Wx20237PresetGraphql =
      j234Wx20237().buildGraphql<TStandalonePriceDraft>();
    expect(j234Wx20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "j234-wx-2023-7",
        "recurrencePolicy": undefined,
        "sku": "j234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
