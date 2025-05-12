import type { TStandalonePriceDraft } from '../../../types';
import s567Uv20194 from './s-567-uv-2019-4';

describe(`with s567Uv20194 preset`, () => {
  it(`should return a s567Uv20194 preset`, () => {
    const s567Uv20194Preset = s567Uv20194().build<TStandalonePriceDraft>();
    expect(s567Uv20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2019-4",
        "sku": "s567-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 950000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a s567Uv20194 preset when built for graphql`, () => {
    const s567Uv20194PresetGraphql =
      s567Uv20194().buildGraphql<TStandalonePriceDraft>();
    expect(s567Uv20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2019-4",
        "sku": "s567-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 950000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
