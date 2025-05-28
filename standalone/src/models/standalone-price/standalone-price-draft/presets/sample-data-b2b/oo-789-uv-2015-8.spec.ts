import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20158 from './oo-789-uv-2015-8';

describe(`with oo789Uv20158 preset`, () => {
  it(`should return a oo789Uv20158 preset`, () => {
    const oo789Uv20158Preset = oo789Uv20158().build<TStandalonePriceDraft>();
    expect(oo789Uv20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2015-8",
        "recurrencePolicy": undefined,
        "sku": "oo789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a oo789Uv20158 preset when built for graphql`, () => {
    const oo789Uv20158PresetGraphql =
      oo789Uv20158().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2015-8",
        "recurrencePolicy": undefined,
        "sku": "oo789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
