import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvGreen7 from './aaa-789-uv-green-7';

describe(`with aaa789UvGreen7 preset`, () => {
  it(`should return a aaa789UvGreen7 preset`, () => {
    const aaa789UvGreen7Preset =
      aaa789UvGreen7().build<TStandalonePriceDraft>();
    expect(aaa789UvGreen7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-green-7",
        "sku": "aaa789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5400000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a aaa789UvGreen7 preset when built for graphql`, () => {
    const aaa789UvGreen7PresetGraphql =
      aaa789UvGreen7().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvGreen7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-green-7",
        "sku": "aaa789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5400000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
