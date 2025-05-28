import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20151 from './w-789-uv-2015-1';

describe(`with w789Uv20151 preset`, () => {
  it(`should return a w789Uv20151 preset`, () => {
    const w789Uv20151Preset = w789Uv20151().build<TStandalonePriceDraft>();
    expect(w789Uv20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2015-1",
        "recurrencePolicy": undefined,
        "sku": "w789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a w789Uv20151 preset when built for graphql`, () => {
    const w789Uv20151PresetGraphql =
      w789Uv20151().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2015-1",
        "recurrencePolicy": undefined,
        "sku": "w789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
