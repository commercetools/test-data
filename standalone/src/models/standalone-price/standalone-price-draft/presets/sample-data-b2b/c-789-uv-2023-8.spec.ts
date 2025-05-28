import type { TStandalonePriceDraft } from '../../../types';
import c789Uv20238 from './c-789-uv-2023-8';

describe(`with c789Uv20238 preset`, () => {
  it(`should return a c789Uv20238 preset`, () => {
    const c789Uv20238Preset = c789Uv20238().build<TStandalonePriceDraft>();
    expect(c789Uv20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2023-8",
        "recurrencePolicy": undefined,
        "sku": "c789-uv-2023",
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

  it(`should return a c789Uv20238 preset when built for graphql`, () => {
    const c789Uv20238PresetGraphql =
      c789Uv20238().buildGraphql<TStandalonePriceDraft>();
    expect(c789Uv20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2023-8",
        "recurrencePolicy": undefined,
        "sku": "c789-uv-2023",
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
