import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvBlue6 from './aaa-789-uv-blue-6';

describe(`with aaa789UvBlue6 preset`, () => {
  it(`should return a aaa789UvBlue6 preset`, () => {
    const aaa789UvBlue6Preset = aaa789UvBlue6().build<TStandalonePriceDraft>();
    expect(aaa789UvBlue6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-blue-6",
        "sku": "aaa789-uv-blue",
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

  it(`should return a aaa789UvBlue6 preset when built for graphql`, () => {
    const aaa789UvBlue6PresetGraphql =
      aaa789UvBlue6().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvBlue6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-blue-6",
        "sku": "aaa789-uv-blue",
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
