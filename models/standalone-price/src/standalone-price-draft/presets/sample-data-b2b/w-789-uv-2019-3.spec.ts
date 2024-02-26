import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20193 from './w-789-uv-2019-3';

describe(`with w789Uv20193 preset`, () => {
  it(`should return a w789Uv20193 preset`, () => {
    const w789Uv20193Preset = w789Uv20193().build<TStandalonePriceDraft>();
    expect(w789Uv20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2019-3",
        "sku": "w789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4290000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a w789Uv20193 preset when built for graphql`, () => {
    const w789Uv20193PresetGraphql =
      w789Uv20193().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2019-3",
        "sku": "w789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4290000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
