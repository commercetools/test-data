import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzBlue6 from './ccc-567-yz-blue-6';

describe(`with ccc567YzBlue6 preset`, () => {
  it(`should return a ccc567YzBlue6 preset`, () => {
    const ccc567YzBlue6Preset = ccc567YzBlue6().build<TStandalonePriceDraft>();
    expect(ccc567YzBlue6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-blue-6",
        "recurrencePolicy": undefined,
        "sku": "ccc567-yz-blue",
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

  it(`should return a ccc567YzBlue6 preset when built for graphql`, () => {
    const ccc567YzBlue6PresetGraphql =
      ccc567YzBlue6().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzBlue6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-blue-6",
        "recurrencePolicy": undefined,
        "sku": "ccc567-yz-blue",
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
