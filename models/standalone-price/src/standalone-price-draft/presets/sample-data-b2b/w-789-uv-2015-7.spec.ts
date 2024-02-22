import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20157 from './w-789-uv-2015-7';

describe(`with w789Uv20157 preset`, () => {
  it(`should return a w789Uv20157 preset`, () => {
    const w789Uv20157Preset = w789Uv20157().build<TStandalonePriceDraft>();
    expect(w789Uv20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2015-7",
        "sku": "w789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3600000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a w789Uv20157 preset when built for graphql`, () => {
    const w789Uv20157PresetGraphql =
      w789Uv20157().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2015-7",
        "sku": "w789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3600000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
