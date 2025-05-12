import type { TStandalonePriceDraft } from '../../../types';
import d234Wx20237 from './d-234-wx-2023-7';

describe(`with d234Wx20237 preset`, () => {
  it(`should return a d234Wx20237 preset`, () => {
    const d234Wx20237Preset = d234Wx20237().build<TStandalonePriceDraft>();
    expect(d234Wx20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2023-7",
        "sku": "d234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1080000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a d234Wx20237 preset when built for graphql`, () => {
    const d234Wx20237PresetGraphql =
      d234Wx20237().buildGraphql<TStandalonePriceDraft>();
    expect(d234Wx20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2023-7",
        "sku": "d234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1080000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
