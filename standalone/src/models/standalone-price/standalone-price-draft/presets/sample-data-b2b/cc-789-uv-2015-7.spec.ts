import type { TStandalonePriceDraft } from '../../../types';
import cc789Uv20157 from './cc-789-uv-2015-7';

describe(`with cc789Uv20157 preset`, () => {
  it(`should return a cc789Uv20157 preset`, () => {
    const cc789Uv20157Preset = cc789Uv20157().build<TStandalonePriceDraft>();
    expect(cc789Uv20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2015-7",
        "recurrencePolicy": undefined,
        "sku": "cc789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2640000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a cc789Uv20157 preset when built for graphql`, () => {
    const cc789Uv20157PresetGraphql =
      cc789Uv20157().buildGraphql<TStandalonePriceDraft>();
    expect(cc789Uv20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2015-7",
        "recurrencePolicy": undefined,
        "sku": "cc789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2640000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
