import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20198 from './w-789-uv-2019-8';

describe(`with w789Uv20198 preset`, () => {
  it(`should return a w789Uv20198 preset`, () => {
    const w789Uv20198Preset = w789Uv20198().build<TStandalonePriceDraft>();
    expect(w789Uv20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2019-8",
        "sku": "w789-uv-2019",
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

  it(`should return a w789Uv20198 preset when built for graphql`, () => {
    const w789Uv20198PresetGraphql =
      w789Uv20198().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2019-8",
        "sku": "w789-uv-2019",
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
