import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvGreen6 from './aaa-789-uv-green-6';

describe(`with aaa789UvGreen6 preset`, () => {
  it(`should return a aaa789UvGreen6 preset`, () => {
    const aaa789UvGreen6Preset =
      aaa789UvGreen6().build<TStandalonePriceDraft>();
    expect(aaa789UvGreen6Preset).toMatchInlineSnapshot(`
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
        "key": "aaa789-uv-green-6",
        "sku": "aaa789-uv-green",
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

  it(`should return a aaa789UvGreen6 preset when built for graphql`, () => {
    const aaa789UvGreen6PresetGraphql =
      aaa789UvGreen6().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvGreen6PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "aaa789-uv-green-6",
        "sku": "aaa789-uv-green",
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
