import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzRed3 from './ccc-567-yz-red-3';

describe(`with ccc567YzRed3 preset`, () => {
  it(`should return a ccc567YzRed3 preset`, () => {
    const ccc567YzRed3Preset = ccc567YzRed3().build<TStandalonePriceDraft>();
    expect(ccc567YzRed3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-red-3",
        "recurrencePolicy": undefined,
        "sku": "ccc567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 11880000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ccc567YzRed3 preset when built for graphql`, () => {
    const ccc567YzRed3PresetGraphql =
      ccc567YzRed3().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzRed3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-red-3",
        "recurrencePolicy": undefined,
        "sku": "ccc567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 11880000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
