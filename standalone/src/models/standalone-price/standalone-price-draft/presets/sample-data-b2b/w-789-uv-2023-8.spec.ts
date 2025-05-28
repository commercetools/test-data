import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20238 from './w-789-uv-2023-8';

describe(`with w789Uv20238 preset`, () => {
  it(`should return a w789Uv20238 preset`, () => {
    const w789Uv20238Preset = w789Uv20238().build<TStandalonePriceDraft>();
    expect(w789Uv20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2023-8",
        "recurrencePolicy": undefined,
        "sku": "w789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a w789Uv20238 preset when built for graphql`, () => {
    const w789Uv20238PresetGraphql =
      w789Uv20238().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2023-8",
        "recurrencePolicy": undefined,
        "sku": "w789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
