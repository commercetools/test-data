import type { TStandalonePriceDraft } from '../../../types';
import c789Uv20198 from './c-789-uv-2019-8';

describe(`with c789Uv20198 preset`, () => {
  it(`should return a c789Uv20198 preset`, () => {
    const c789Uv20198Preset = c789Uv20198().build<TStandalonePriceDraft>();
    expect(c789Uv20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2019-8",
        "recurrencePolicy": undefined,
        "sku": "c789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a c789Uv20198 preset when built for graphql`, () => {
    const c789Uv20198PresetGraphql =
      c789Uv20198().buildGraphql<TStandalonePriceDraft>();
    expect(c789Uv20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "c789-uv-2019-8",
        "recurrencePolicy": undefined,
        "sku": "c789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
