import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvGreen6 from './ggg-789-uv-green-6';

describe(`with ggg789UvGreen6 preset`, () => {
  it(`should return a ggg789UvGreen6 preset`, () => {
    const ggg789UvGreen6Preset =
      ggg789UvGreen6().build<TStandalonePriceDraft>();
    expect(ggg789UvGreen6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-green-6",
        "sku": "ggg789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ggg789UvGreen6 preset when built for graphql`, () => {
    const ggg789UvGreen6PresetGraphql =
      ggg789UvGreen6().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvGreen6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-green-6",
        "sku": "ggg789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
