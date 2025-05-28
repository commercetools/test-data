import type { TStandalonePriceDraft } from '../../../types';
import ii789Uv20191 from './ii-789-uv-2019-1';

describe(`with ii789Uv20191 preset`, () => {
  it(`should return a ii789Uv20191 preset`, () => {
    const ii789Uv20191Preset = ii789Uv20191().build<TStandalonePriceDraft>();
    expect(ii789Uv20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2019-1",
        "recurrencePolicy": undefined,
        "sku": "ii789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3025000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ii789Uv20191 preset when built for graphql`, () => {
    const ii789Uv20191PresetGraphql =
      ii789Uv20191().buildGraphql<TStandalonePriceDraft>();
    expect(ii789Uv20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2019-1",
        "recurrencePolicy": undefined,
        "sku": "ii789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3025000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
