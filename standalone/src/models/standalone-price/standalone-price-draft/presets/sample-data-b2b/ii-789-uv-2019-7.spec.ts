import type { TStandalonePriceDraft } from '../../../types';
import ii789Uv20197 from './ii-789-uv-2019-7';

describe(`with ii789Uv20197 preset`, () => {
  it(`should return a ii789Uv20197 preset`, () => {
    const ii789Uv20197Preset = ii789Uv20197().build<TStandalonePriceDraft>();
    expect(ii789Uv20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2019-7",
        "recurrencePolicy": undefined,
        "sku": "ii789-uv-2019",
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

  it(`should return a ii789Uv20197 preset when built for graphql`, () => {
    const ii789Uv20197PresetGraphql =
      ii789Uv20197().buildGraphql<TStandalonePriceDraft>();
    expect(ii789Uv20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2019-7",
        "recurrencePolicy": undefined,
        "sku": "ii789-uv-2019",
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
