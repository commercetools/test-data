import type { TStandalonePriceDraft } from '../../../types';
import uu789UvGreen6 from './uu-789-uv-green-6';

describe(`with uu789UvGreen6 preset`, () => {
  it(`should return a uu789UvGreen6 preset`, () => {
    const uu789UvGreen6Preset = uu789UvGreen6().build<TStandalonePriceDraft>();
    expect(uu789UvGreen6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-green-6",
        "sku": "uu789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a uu789UvGreen6 preset when built for graphql`, () => {
    const uu789UvGreen6PresetGraphql =
      uu789UvGreen6().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvGreen6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-green-6",
        "sku": "uu789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
