import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20197 from './oo-789-uv-2019-7';

describe(`with oo789Uv20197 preset`, () => {
  it(`should return a oo789Uv20197 preset`, () => {
    const oo789Uv20197Preset = oo789Uv20197().build<TStandalonePriceDraft>();
    expect(oo789Uv20197Preset).toMatchInlineSnapshot(`
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
        "key": "oo789-uv-2019-7",
        "sku": "oo789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a oo789Uv20197 preset when built for graphql`, () => {
    const oo789Uv20197PresetGraphql =
      oo789Uv20197().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20197PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "oo789-uv-2019-7",
        "sku": "oo789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
