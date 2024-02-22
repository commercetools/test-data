import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvRed6 from './aaa-789-uv-red-6';

describe(`with aaa789UvRed6 preset`, () => {
  it(`should return a aaa789UvRed6 preset`, () => {
    const aaa789UvRed6Preset = aaa789UvRed6().build<TStandalonePriceDraft>();
    expect(aaa789UvRed6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-red-6",
        "sku": "aaa789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3600000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a aaa789UvRed6 preset when built for graphql`, () => {
    const aaa789UvRed6PresetGraphql =
      aaa789UvRed6().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvRed6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-red-6",
        "sku": "aaa789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3600000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
