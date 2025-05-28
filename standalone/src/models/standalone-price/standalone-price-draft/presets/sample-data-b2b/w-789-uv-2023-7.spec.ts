import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20237 from './w-789-uv-2023-7';

describe(`with w789Uv20237 preset`, () => {
  it(`should return a w789Uv20237 preset`, () => {
    const w789Uv20237Preset = w789Uv20237().build<TStandalonePriceDraft>();
    expect(w789Uv20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2023-7",
        "recurrencePolicy": undefined,
        "sku": "w789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3600000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a w789Uv20237 preset when built for graphql`, () => {
    const w789Uv20237PresetGraphql =
      w789Uv20237().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2023-7",
        "recurrencePolicy": undefined,
        "sku": "w789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3600000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
