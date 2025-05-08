import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzRed6 from './ccc-567-yz-red-6';

describe(`with ccc567YzRed6 preset`, () => {
  it(`should return a ccc567YzRed6 preset`, () => {
    const ccc567YzRed6Preset = ccc567YzRed6().build<TStandalonePriceDraft>();
    expect(ccc567YzRed6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-red-6",
        "sku": "ccc567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7200000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ccc567YzRed6 preset when built for graphql`, () => {
    const ccc567YzRed6PresetGraphql =
      ccc567YzRed6().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzRed6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-red-6",
        "sku": "ccc567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7200000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
