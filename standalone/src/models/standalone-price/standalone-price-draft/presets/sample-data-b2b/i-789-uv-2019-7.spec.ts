import type { TStandalonePriceDraft } from '../../../types';
import i789Uv20197 from './i-789-uv-2019-7';

describe(`with i789Uv20197 preset`, () => {
  it(`should return a i789Uv20197 preset`, () => {
    const i789Uv20197Preset = i789Uv20197().build<TStandalonePriceDraft>();
    expect(i789Uv20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2019-7",
        "sku": "i789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1680000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a i789Uv20197 preset when built for graphql`, () => {
    const i789Uv20197PresetGraphql =
      i789Uv20197().buildGraphql<TStandalonePriceDraft>();
    expect(i789Uv20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "i789-uv-2019-7",
        "sku": "i789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1680000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
