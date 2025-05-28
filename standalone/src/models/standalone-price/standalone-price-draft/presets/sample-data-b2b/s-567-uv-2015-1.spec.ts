import type { TStandalonePriceDraft } from '../../../types';
import s567Uv20151 from './s-567-uv-2015-1';

describe(`with s567Uv20151 preset`, () => {
  it(`should return a s567Uv20151 preset`, () => {
    const s567Uv20151Preset = s567Uv20151().build<TStandalonePriceDraft>();
    expect(s567Uv20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2015-1",
        "recurrencePolicy": undefined,
        "sku": "s567-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1045000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a s567Uv20151 preset when built for graphql`, () => {
    const s567Uv20151PresetGraphql =
      s567Uv20151().buildGraphql<TStandalonePriceDraft>();
    expect(s567Uv20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2015-1",
        "recurrencePolicy": undefined,
        "sku": "s567-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1045000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
