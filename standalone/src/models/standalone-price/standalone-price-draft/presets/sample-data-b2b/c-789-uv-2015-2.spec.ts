import type { TStandalonePriceDraft } from '../../../types';
import c789Uv20152 from './c-789-uv-2015-2';

describe(`with c789Uv20152 preset`, () => {
  it(`should return a c789Uv20152 preset`, () => {
    const c789Uv20152Preset = c789Uv20152().build<TStandalonePriceDraft>();
    expect(c789Uv20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2015-2",
        "recurrencePolicy": undefined,
        "sku": "c789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1188000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a c789Uv20152 preset when built for graphql`, () => {
    const c789Uv20152PresetGraphql =
      c789Uv20152().buildGraphql<TStandalonePriceDraft>();
    expect(c789Uv20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2015-2",
        "recurrencePolicy": undefined,
        "sku": "c789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1188000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
