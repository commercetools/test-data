import type { TStandalonePriceDraft } from '../../../types';
import cc789Uv20196 from './cc-789-uv-2019-6';

describe(`with cc789Uv20196 preset`, () => {
  it(`should return a cc789Uv20196 preset`, () => {
    const cc789Uv20196Preset = cc789Uv20196().build<TStandalonePriceDraft>();
    expect(cc789Uv20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2019-6",
        "recurrencePolicy": undefined,
        "sku": "cc789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1760000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a cc789Uv20196 preset when built for graphql`, () => {
    const cc789Uv20196PresetGraphql =
      cc789Uv20196().buildGraphql<TStandalonePriceDraft>();
    expect(cc789Uv20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2019-6",
        "recurrencePolicy": undefined,
        "sku": "cc789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1760000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
