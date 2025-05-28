import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20158 from './i-789-uv-2015-8';

describe(`with i789Uv20158 preset`, () => {
  it(`should return a i789Uv20158 preset`, () => {
    const i789Uv20158Preset = i789Uv20158().build<TStandalonePriceDraft>();
    expect(i789Uv20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2015-8",
        "recurrencePolicy": undefined,
        "sku": "i789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1540001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a i789Uv20158 preset when built for graphql`, () => {
    const i789Uv20158PresetGraphql =
      i789Uv20158().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2015-8",
        "recurrencePolicy": undefined,
        "sku": "i789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1540001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
