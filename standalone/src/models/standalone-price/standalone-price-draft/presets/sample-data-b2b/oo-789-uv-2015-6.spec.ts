import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20156 from './oo-789-uv-2015-6';

describe(`with oo789Uv20156 preset`, () => {
  it(`should return a oo789Uv20156 preset`, () => {
    const oo789Uv20156Preset = oo789Uv20156().build<TStandalonePriceDraft>();
    expect(oo789Uv20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2015-6",
        "sku": "oo789-uv-2015",
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

  it(`should return a oo789Uv20156 preset when built for graphql`, () => {
    const oo789Uv20156PresetGraphql =
      oo789Uv20156().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2015-6",
        "sku": "oo789-uv-2015",
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
