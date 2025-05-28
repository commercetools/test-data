import type { TStandalonePriceDraft } from '../../../types';
import s567Uv20191 from './s-567-uv-2019-1';

describe(`with s567Uv20191 preset`, () => {
  it(`should return a s567Uv20191 preset`, () => {
    const s567Uv20191Preset = s567Uv20191().build<TStandalonePriceDraft>();
    expect(s567Uv20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2019-1",
        "recurrencePolicy": undefined,
        "sku": "s567-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1149501,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a s567Uv20191 preset when built for graphql`, () => {
    const s567Uv20191PresetGraphql =
      s567Uv20191().buildGraphql<TStandalonePriceDraft>();
    expect(s567Uv20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2019-1",
        "recurrencePolicy": undefined,
        "sku": "s567-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1149501,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
