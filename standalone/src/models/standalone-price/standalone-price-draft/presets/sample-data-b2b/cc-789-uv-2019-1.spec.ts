import type { TStandalonePriceDraft } from '../../../types';
import cc789Uv20191 from './cc-789-uv-2019-1';

describe(`with cc789Uv20191 preset`, () => {
  it(`should return a cc789Uv20191 preset`, () => {
    const cc789Uv20191Preset = cc789Uv20191().build<TStandalonePriceDraft>();
    expect(cc789Uv20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2019-1",
        "sku": "cc789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2662000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a cc789Uv20191 preset when built for graphql`, () => {
    const cc789Uv20191PresetGraphql =
      cc789Uv20191().buildGraphql<TStandalonePriceDraft>();
    expect(cc789Uv20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2019-1",
        "sku": "cc789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2662000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
