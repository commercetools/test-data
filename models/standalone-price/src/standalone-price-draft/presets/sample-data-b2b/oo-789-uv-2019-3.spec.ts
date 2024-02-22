import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20193 from './oo-789-uv-2019-3';

describe(`with oo789Uv20193 preset`, () => {
  it(`should return a oo789Uv20193 preset`, () => {
    const oo789Uv20193Preset = oo789Uv20193().build<TStandalonePriceDraft>();
    expect(oo789Uv20193Preset).toMatchInlineSnapshot(`
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
        "key": "oo789-uv-2019-3",
        "sku": "oo789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3575000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a oo789Uv20193 preset when built for graphql`, () => {
    const oo789Uv20193PresetGraphql =
      oo789Uv20193().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20193PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "oo789-uv-2019-3",
        "sku": "oo789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3575000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
