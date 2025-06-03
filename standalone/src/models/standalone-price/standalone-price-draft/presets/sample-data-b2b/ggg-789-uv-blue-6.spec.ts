import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvBlue6 from './ggg-789-uv-blue-6';

describe(`with ggg789UvBlue6 preset`, () => {
  it(`should return a ggg789UvBlue6 preset`, () => {
    const ggg789UvBlue6Preset = ggg789UvBlue6().build<TStandalonePriceDraft>();
    expect(ggg789UvBlue6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-blue-6",
        "recurrencePolicy": undefined,
        "sku": "ggg789-uv-blue",
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

  it(`should return a ggg789UvBlue6 preset when built for graphql`, () => {
    const ggg789UvBlue6PresetGraphql =
      ggg789UvBlue6().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvBlue6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-blue-6",
        "recurrencePolicy": undefined,
        "sku": "ggg789-uv-blue",
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
