import type { TStandalonePriceDraft } from '../../../types';
import s567Uv20198 from './s-567-uv-2019-8';

describe(`with s567Uv20198 preset`, () => {
  it(`should return a s567Uv20198 preset`, () => {
    const s567Uv20198Preset = s567Uv20198().build<TStandalonePriceDraft>();
    expect(s567Uv20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2019-8",
        "sku": "s567-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1045001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a s567Uv20198 preset when built for graphql`, () => {
    const s567Uv20198PresetGraphql =
      s567Uv20198().buildGraphql<TStandalonePriceDraft>();
    expect(s567Uv20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2019-8",
        "sku": "s567-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1045001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
