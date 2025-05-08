import type { TStandalonePriceDraft } from '../../../types';
import cc789Uv20156 from './cc-789-uv-2015-6';

describe(`with cc789Uv20156 preset`, () => {
  it(`should return a cc789Uv20156 preset`, () => {
    const cc789Uv20156Preset = cc789Uv20156().build<TStandalonePriceDraft>();
    expect(cc789Uv20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2015-6",
        "sku": "cc789-uv-2015",
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

  it(`should return a cc789Uv20156 preset when built for graphql`, () => {
    const cc789Uv20156PresetGraphql =
      cc789Uv20156().buildGraphql<TStandalonePriceDraft>();
    expect(cc789Uv20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2015-6",
        "sku": "cc789-uv-2015",
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
