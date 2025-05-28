import type { TStandalonePriceDraft } from '../../../types';
import s567Uv20237 from './s-567-uv-2023-7';

describe(`with s567Uv20237 preset`, () => {
  it(`should return a s567Uv20237 preset`, () => {
    const s567Uv20237Preset = s567Uv20237().build<TStandalonePriceDraft>();
    expect(s567Uv20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2023-7",
        "recurrencePolicy": undefined,
        "sku": "s567-uv-2023",
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

  it(`should return a s567Uv20237 preset when built for graphql`, () => {
    const s567Uv20237PresetGraphql =
      s567Uv20237().buildGraphql<TStandalonePriceDraft>();
    expect(s567Uv20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2023-7",
        "recurrencePolicy": undefined,
        "sku": "s567-uv-2023",
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
