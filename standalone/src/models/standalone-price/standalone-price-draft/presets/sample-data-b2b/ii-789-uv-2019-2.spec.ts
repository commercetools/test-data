import type { TStandalonePriceDraft } from '../../../types';
import ii789Uv20192 from './ii-789-uv-2019-2';

describe(`with ii789Uv20192 preset`, () => {
  it(`should return a ii789Uv20192 preset`, () => {
    const ii789Uv20192Preset = ii789Uv20192().build<TStandalonePriceDraft>();
    expect(ii789Uv20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2019-2",
        "recurrencePolicy": undefined,
        "sku": "ii789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ii789Uv20192 preset when built for graphql`, () => {
    const ii789Uv20192PresetGraphql =
      ii789Uv20192().buildGraphql<TStandalonePriceDraft>();
    expect(ii789Uv20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ii789-uv-2019-2",
        "recurrencePolicy": undefined,
        "sku": "ii789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
