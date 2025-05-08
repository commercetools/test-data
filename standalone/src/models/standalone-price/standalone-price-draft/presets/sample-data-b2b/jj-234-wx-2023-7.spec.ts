import type { TStandalonePriceDraft } from '../../../types';
import jj234Wx20237 from './jj-234-wx-2023-7';

describe(`with jj234Wx20237 preset`, () => {
  it(`should return a jj234Wx20237 preset`, () => {
    const jj234Wx20237Preset = jj234Wx20237().build<TStandalonePriceDraft>();
    expect(jj234Wx20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2023-7",
        "sku": "jj234-wx-2023",
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

  it(`should return a jj234Wx20237 preset when built for graphql`, () => {
    const jj234Wx20237PresetGraphql =
      jj234Wx20237().buildGraphql<TStandalonePriceDraft>();
    expect(jj234Wx20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2023-7",
        "sku": "jj234-wx-2023",
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
