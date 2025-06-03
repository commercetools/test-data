import type { TStandalonePriceDraft } from '../../../types';
import cc789Uv20153 from './cc-789-uv-2015-3';

describe(`with cc789Uv20153 preset`, () => {
  it(`should return a cc789Uv20153 preset`, () => {
    const cc789Uv20153Preset = cc789Uv20153().build<TStandalonePriceDraft>();
    expect(cc789Uv20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2015-3",
        "recurrencePolicy": undefined,
        "sku": "cc789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2904000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a cc789Uv20153 preset when built for graphql`, () => {
    const cc789Uv20153PresetGraphql =
      cc789Uv20153().buildGraphql<TStandalonePriceDraft>();
    expect(cc789Uv20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2015-3",
        "recurrencePolicy": undefined,
        "sku": "cc789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2904000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
