import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20151 from './oo-789-uv-2015-1';

describe(`with oo789Uv20151 preset`, () => {
  it(`should return a oo789Uv20151 preset`, () => {
    const oo789Uv20151Preset = oo789Uv20151().build<TStandalonePriceDraft>();
    expect(oo789Uv20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2015-1",
        "sku": "oo789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a oo789Uv20151 preset when built for graphql`, () => {
    const oo789Uv20151PresetGraphql =
      oo789Uv20151().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2015-1",
        "sku": "oo789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
