import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20191 from './w-789-uv-2019-1';

describe(`with w789Uv20191 preset`, () => {
  it(`should return a w789Uv20191 preset`, () => {
    const w789Uv20191Preset = w789Uv20191().build<TStandalonePriceDraft>();
    expect(w789Uv20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2019-1",
        "recurrencePolicy": undefined,
        "sku": "w789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3630001,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a w789Uv20191 preset when built for graphql`, () => {
    const w789Uv20191PresetGraphql =
      w789Uv20191().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2019-1",
        "recurrencePolicy": undefined,
        "sku": "w789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3630001,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
