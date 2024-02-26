import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvGreen3 from './aaa-789-uv-green-3';

describe(`with aaa789UvGreen3 preset`, () => {
  it(`should return a aaa789UvGreen3 preset`, () => {
    const aaa789UvGreen3Preset =
      aaa789UvGreen3().build<TStandalonePriceDraft>();
    expect(aaa789UvGreen3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-green-3",
        "sku": "aaa789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6930000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a aaa789UvGreen3 preset when built for graphql`, () => {
    const aaa789UvGreen3PresetGraphql =
      aaa789UvGreen3().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvGreen3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-green-3",
        "sku": "aaa789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6930000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
