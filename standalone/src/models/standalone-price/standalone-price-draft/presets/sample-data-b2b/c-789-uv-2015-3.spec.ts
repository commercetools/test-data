import type { TStandalonePriceDraft } from '../../../types';
import c789Uv20153 from './c-789-uv-2015-3';

describe(`with c789Uv20153 preset`, () => {
  it(`should return a c789Uv20153 preset`, () => {
    const c789Uv20153Preset = c789Uv20153().build<TStandalonePriceDraft>();
    expect(c789Uv20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2015-3",
        "recurrencePolicy": undefined,
        "sku": "c789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1584000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a c789Uv20153 preset when built for graphql`, () => {
    const c789Uv20153PresetGraphql =
      c789Uv20153().buildGraphql<TStandalonePriceDraft>();
    expect(c789Uv20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2015-3",
        "recurrencePolicy": undefined,
        "sku": "c789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1584000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
