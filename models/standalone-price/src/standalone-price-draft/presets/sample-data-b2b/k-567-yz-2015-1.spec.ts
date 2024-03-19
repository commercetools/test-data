import type { TStandalonePriceDraft } from '../../../types';
import k567Yz20151 from './k-567-yz-2015-1';

describe(`with k567Yz20151 preset`, () => {
  it(`should return a k567Yz20151 preset`, () => {
    const k567Yz20151Preset = k567Yz20151().build<TStandalonePriceDraft>();
    expect(k567Yz20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2015-1",
        "sku": "k567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1430000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a k567Yz20151 preset when built for graphql`, () => {
    const k567Yz20151PresetGraphql =
      k567Yz20151().buildGraphql<TStandalonePriceDraft>();
    expect(k567Yz20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2015-1",
        "sku": "k567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1430000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
