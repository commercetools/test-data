import type { TStandalonePriceDraft } from '../../../types';
import c789Uv20193 from './c-789-uv-2019-3';

describe(`with c789Uv20193 preset`, () => {
  it(`should return a c789Uv20193 preset`, () => {
    const c789Uv20193Preset = c789Uv20193().build<TStandalonePriceDraft>();
    expect(c789Uv20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2019-3",
        "recurrencePolicy": undefined,
        "sku": "c789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1716000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a c789Uv20193 preset when built for graphql`, () => {
    const c789Uv20193PresetGraphql =
      c789Uv20193().buildGraphql<TStandalonePriceDraft>();
    expect(c789Uv20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2019-3",
        "recurrencePolicy": undefined,
        "sku": "c789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1716000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
