import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzGreen6 from './ccc-567-yz-green-6';

describe(`with ccc567YzGreen6 preset`, () => {
  it(`should return a ccc567YzGreen6 preset`, () => {
    const ccc567YzGreen6Preset =
      ccc567YzGreen6().build<TStandalonePriceDraft>();
    expect(ccc567YzGreen6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-green-6",
        "sku": "ccc567-yz-green",
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

  it(`should return a ccc567YzGreen6 preset when built for graphql`, () => {
    const ccc567YzGreen6PresetGraphql =
      ccc567YzGreen6().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzGreen6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-green-6",
        "sku": "ccc567-yz-green",
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
