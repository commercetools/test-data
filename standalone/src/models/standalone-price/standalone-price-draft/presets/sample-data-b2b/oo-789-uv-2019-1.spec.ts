import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20191 from './oo-789-uv-2019-1';

describe(`with oo789Uv20191 preset`, () => {
  it(`should return a oo789Uv20191 preset`, () => {
    const oo789Uv20191Preset = oo789Uv20191().build<TStandalonePriceDraft>();
    expect(oo789Uv20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2019-1",
        "recurrencePolicy": undefined,
        "sku": "oo789-uv-2019",
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

  it(`should return a oo789Uv20191 preset when built for graphql`, () => {
    const oo789Uv20191PresetGraphql =
      oo789Uv20191().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2019-1",
        "recurrencePolicy": undefined,
        "sku": "oo789-uv-2019",
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
