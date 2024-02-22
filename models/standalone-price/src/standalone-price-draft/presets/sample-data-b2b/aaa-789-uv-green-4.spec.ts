import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvGreen4 from './aaa-789-uv-green-4';

describe(`with aaa789UvGreen4 preset`, () => {
  it(`should return a aaa789UvGreen4 preset`, () => {
    const aaa789UvGreen4Preset =
      aaa789UvGreen4().build<TStandalonePriceDraft>();
    expect(aaa789UvGreen4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-green-4",
        "sku": "aaa789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a aaa789UvGreen4 preset when built for graphql`, () => {
    const aaa789UvGreen4PresetGraphql =
      aaa789UvGreen4().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvGreen4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-green-4",
        "sku": "aaa789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
