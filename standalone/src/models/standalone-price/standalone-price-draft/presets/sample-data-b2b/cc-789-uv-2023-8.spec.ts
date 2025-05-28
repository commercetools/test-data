import type { TStandalonePriceDraft } from '../../../types';
import cc789Uv20238 from './cc-789-uv-2023-8';

describe(`with cc789Uv20238 preset`, () => {
  it(`should return a cc789Uv20238 preset`, () => {
    const cc789Uv20238Preset = cc789Uv20238().build<TStandalonePriceDraft>();
    expect(cc789Uv20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2023-8",
        "recurrencePolicy": undefined,
        "sku": "cc789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2420000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a cc789Uv20238 preset when built for graphql`, () => {
    const cc789Uv20238PresetGraphql =
      cc789Uv20238().buildGraphql<TStandalonePriceDraft>();
    expect(cc789Uv20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2023-8",
        "recurrencePolicy": undefined,
        "sku": "cc789-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2420000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
