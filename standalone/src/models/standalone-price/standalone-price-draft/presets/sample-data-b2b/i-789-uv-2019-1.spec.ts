import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20191 from './i-789-uv-2019-1';

describe(`with i789Uv20191 preset`, () => {
  it(`should return a i789Uv20191 preset`, () => {
    const i789Uv20191Preset = i789Uv20191().build<TStandalonePriceDraft>();
    expect(i789Uv20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2019-1",
        "recurrencePolicy": undefined,
        "sku": "i789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1694001,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a i789Uv20191 preset when built for graphql`, () => {
    const i789Uv20191PresetGraphql =
      i789Uv20191().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2019-1",
        "recurrencePolicy": undefined,
        "sku": "i789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1694001,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
