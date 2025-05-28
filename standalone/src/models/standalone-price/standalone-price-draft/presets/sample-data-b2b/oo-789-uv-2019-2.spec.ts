import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20192 from './oo-789-uv-2019-2';

describe(`with oo789Uv20192 preset`, () => {
  it(`should return a oo789Uv20192 preset`, () => {
    const oo789Uv20192Preset = oo789Uv20192().build<TStandalonePriceDraft>();
    expect(oo789Uv20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2019-2",
        "recurrencePolicy": undefined,
        "sku": "oo789-uv-2019",
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

  it(`should return a oo789Uv20192 preset when built for graphql`, () => {
    const oo789Uv20192PresetGraphql =
      oo789Uv20192().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2019-2",
        "recurrencePolicy": undefined,
        "sku": "oo789-uv-2019",
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
