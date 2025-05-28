import type { TStandalonePriceDraft } from '../../../types';
import ii789Uv20156 from './ii-789-uv-2015-6';

describe(`with ii789Uv20156 preset`, () => {
  it(`should return a ii789Uv20156 preset`, () => {
    const ii789Uv20156Preset = ii789Uv20156().build<TStandalonePriceDraft>();
    expect(ii789Uv20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2015-6",
        "recurrencePolicy": undefined,
        "sku": "ii789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ii789Uv20156 preset when built for graphql`, () => {
    const ii789Uv20156PresetGraphql =
      ii789Uv20156().buildGraphql<TStandalonePriceDraft>();
    expect(ii789Uv20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2015-6",
        "recurrencePolicy": undefined,
        "sku": "ii789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
