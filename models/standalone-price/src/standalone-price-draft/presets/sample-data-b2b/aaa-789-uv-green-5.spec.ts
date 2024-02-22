import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvGreen5 from './aaa-789-uv-green-5';

describe(`with aaa789UvGreen5 preset`, () => {
  it(`should return a aaa789UvGreen5 preset`, () => {
    const aaa789UvGreen5Preset =
      aaa789UvGreen5().build<TStandalonePriceDraft>();
    expect(aaa789UvGreen5Preset).toMatchInlineSnapshot(`
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
        "key": "aaa789-uv-green-5",
        "sku": "aaa789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4050000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a aaa789UvGreen5 preset when built for graphql`, () => {
    const aaa789UvGreen5PresetGraphql =
      aaa789UvGreen5().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvGreen5PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "aaa789-uv-green-5",
        "sku": "aaa789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4050000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
