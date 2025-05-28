import type { TStandalonePriceDraft } from '../../../types';
import cc789Uv20198 from './cc-789-uv-2019-8';

describe(`with cc789Uv20198 preset`, () => {
  it(`should return a cc789Uv20198 preset`, () => {
    const cc789Uv20198Preset = cc789Uv20198().build<TStandalonePriceDraft>();
    expect(cc789Uv20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2019-8",
        "recurrencePolicy": undefined,
        "sku": "cc789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2420000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a cc789Uv20198 preset when built for graphql`, () => {
    const cc789Uv20198PresetGraphql =
      cc789Uv20198().buildGraphql<TStandalonePriceDraft>();
    expect(cc789Uv20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2019-8",
        "recurrencePolicy": undefined,
        "sku": "cc789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2420000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
