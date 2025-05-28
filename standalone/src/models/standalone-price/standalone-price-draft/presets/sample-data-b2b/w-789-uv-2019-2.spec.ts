import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20192 from './w-789-uv-2019-2';

describe(`with w789Uv20192 preset`, () => {
  it(`should return a w789Uv20192 preset`, () => {
    const w789Uv20192Preset = w789Uv20192().build<TStandalonePriceDraft>();
    expect(w789Uv20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2019-2",
        "recurrencePolicy": undefined,
        "sku": "w789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a w789Uv20192 preset when built for graphql`, () => {
    const w789Uv20192PresetGraphql =
      w789Uv20192().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2019-2",
        "recurrencePolicy": undefined,
        "sku": "w789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
