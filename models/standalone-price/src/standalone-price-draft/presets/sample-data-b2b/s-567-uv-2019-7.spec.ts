import type { TStandalonePriceDraft } from '../../../types';
import s567Uv20197 from './s-567-uv-2019-7';

describe(`with s567Uv20197 preset`, () => {
  it(`should return a s567Uv20197 preset`, () => {
    const s567Uv20197Preset = s567Uv20197().build<TStandalonePriceDraft>();
    expect(s567Uv20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2019-7",
        "sku": "s567-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1140000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a s567Uv20197 preset when built for graphql`, () => {
    const s567Uv20197PresetGraphql =
      s567Uv20197().buildGraphql<TStandalonePriceDraft>();
    expect(s567Uv20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2019-7",
        "sku": "s567-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1140000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
