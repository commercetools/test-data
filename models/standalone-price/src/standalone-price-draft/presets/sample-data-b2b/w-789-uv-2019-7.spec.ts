import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20197 from './w-789-uv-2019-7';

describe(`with w789Uv20197 preset`, () => {
  it(`should return a w789Uv20197 preset`, () => {
    const w789Uv20197Preset = w789Uv20197().build<TStandalonePriceDraft>();
    expect(w789Uv20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2019-7",
        "sku": "w789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3600000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a w789Uv20197 preset when built for graphql`, () => {
    const w789Uv20197PresetGraphql =
      w789Uv20197().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2019-7",
        "sku": "w789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3600000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
