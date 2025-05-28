import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20158 from './w-789-uv-2015-8';

describe(`with w789Uv20158 preset`, () => {
  it(`should return a w789Uv20158 preset`, () => {
    const w789Uv20158Preset = w789Uv20158().build<TStandalonePriceDraft>();
    expect(w789Uv20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2015-8",
        "recurrencePolicy": undefined,
        "sku": "w789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a w789Uv20158 preset when built for graphql`, () => {
    const w789Uv20158PresetGraphql =
      w789Uv20158().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2015-8",
        "recurrencePolicy": undefined,
        "sku": "w789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
