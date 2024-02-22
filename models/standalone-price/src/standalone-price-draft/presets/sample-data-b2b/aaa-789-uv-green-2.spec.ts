import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvGreen2 from './aaa-789-uv-green-2';

describe(`with aaa789UvGreen2 preset`, () => {
  it(`should return a aaa789UvGreen2 preset`, () => {
    const aaa789UvGreen2Preset =
      aaa789UvGreen2().build<TStandalonePriceDraft>();
    expect(aaa789UvGreen2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-green-2",
        "sku": "aaa789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5445000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a aaa789UvGreen2 preset when built for graphql`, () => {
    const aaa789UvGreen2PresetGraphql =
      aaa789UvGreen2().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvGreen2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-green-2",
        "sku": "aaa789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5445000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
