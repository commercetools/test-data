import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzGreen1 from './ccc-567-yz-green-1';

describe(`with ccc567YzGreen1 preset`, () => {
  it(`should return a ccc567YzGreen1 preset`, () => {
    const ccc567YzGreen1Preset =
      ccc567YzGreen1().build<TStandalonePriceDraft>();
    expect(ccc567YzGreen1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-green-1",
        "sku": "ccc567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 11880000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ccc567YzGreen1 preset when built for graphql`, () => {
    const ccc567YzGreen1PresetGraphql =
      ccc567YzGreen1().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzGreen1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-green-1",
        "sku": "ccc567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 11880000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
