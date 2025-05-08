import type { TStandalonePriceDraft } from '../../../types';
import c789Uv20191 from './c-789-uv-2019-1';

describe(`with c789Uv20191 preset`, () => {
  it(`should return a c789Uv20191 preset`, () => {
    const c789Uv20191Preset = c789Uv20191().build<TStandalonePriceDraft>();
    expect(c789Uv20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2019-1",
        "sku": "c789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1452000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a c789Uv20191 preset when built for graphql`, () => {
    const c789Uv20191PresetGraphql =
      c789Uv20191().buildGraphql<TStandalonePriceDraft>();
    expect(c789Uv20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2019-1",
        "sku": "c789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1452000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
