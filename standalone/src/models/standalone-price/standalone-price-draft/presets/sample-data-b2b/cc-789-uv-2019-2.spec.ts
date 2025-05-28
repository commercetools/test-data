import type { TStandalonePriceDraft } from '../../../types';
import cc789Uv20192 from './cc-789-uv-2019-2';

describe(`with cc789Uv20192 preset`, () => {
  it(`should return a cc789Uv20192 preset`, () => {
    const cc789Uv20192Preset = cc789Uv20192().build<TStandalonePriceDraft>();
    expect(cc789Uv20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2019-2",
        "recurrencePolicy": undefined,
        "sku": "cc789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2420000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a cc789Uv20192 preset when built for graphql`, () => {
    const cc789Uv20192PresetGraphql =
      cc789Uv20192().buildGraphql<TStandalonePriceDraft>();
    expect(cc789Uv20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2019-2",
        "recurrencePolicy": undefined,
        "sku": "cc789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2420000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
