import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20151 from './i-789-uv-2015-1';

describe(`with i789Uv20151 preset`, () => {
  it(`should return a i789Uv20151 preset`, () => {
    const i789Uv20151Preset = i789Uv20151().build<TStandalonePriceDraft>();
    expect(i789Uv20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2015-1",
        "recurrencePolicy": undefined,
        "sku": "i789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1540000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a i789Uv20151 preset when built for graphql`, () => {
    const i789Uv20151PresetGraphql =
      i789Uv20151().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2015-1",
        "recurrencePolicy": undefined,
        "sku": "i789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1540000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
