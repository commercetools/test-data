import type { TStandalonePriceDraft } from '../../../types';
import cc789Uv20197 from './cc-789-uv-2019-7';

describe(`with cc789Uv20197 preset`, () => {
  it(`should return a cc789Uv20197 preset`, () => {
    const cc789Uv20197Preset = cc789Uv20197().build<TStandalonePriceDraft>();
    expect(cc789Uv20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2019-7",
        "recurrencePolicy": undefined,
        "sku": "cc789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2640000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a cc789Uv20197 preset when built for graphql`, () => {
    const cc789Uv20197PresetGraphql =
      cc789Uv20197().buildGraphql<TStandalonePriceDraft>();
    expect(cc789Uv20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2019-7",
        "recurrencePolicy": undefined,
        "sku": "cc789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2640000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
