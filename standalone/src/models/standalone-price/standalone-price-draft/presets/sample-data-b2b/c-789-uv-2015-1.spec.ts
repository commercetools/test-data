import type { TStandalonePriceDraft } from '../../../types';
import c789Uv20151 from './c-789-uv-2015-1';

describe(`with c789Uv20151 preset`, () => {
  it(`should return a c789Uv20151 preset`, () => {
    const c789Uv20151Preset = c789Uv20151().build<TStandalonePriceDraft>();
    expect(c789Uv20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2015-1",
        "recurrencePolicy": undefined,
        "sku": "c789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a c789Uv20151 preset when built for graphql`, () => {
    const c789Uv20151PresetGraphql =
      c789Uv20151().buildGraphql<TStandalonePriceDraft>();
    expect(c789Uv20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2015-1",
        "recurrencePolicy": undefined,
        "sku": "c789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
