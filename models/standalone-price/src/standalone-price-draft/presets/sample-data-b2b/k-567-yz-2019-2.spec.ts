import type { TStandalonePriceDraft } from '../../../types';
import k567Yz20192 from './k-567-yz-2019-2';

describe(`with k567Yz20192 preset`, () => {
  it(`should return a k567Yz20192 preset`, () => {
    const k567Yz20192Preset = k567Yz20192().build<TStandalonePriceDraft>();
    expect(k567Yz20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2019-2",
        "sku": "k567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1430000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a k567Yz20192 preset when built for graphql`, () => {
    const k567Yz20192PresetGraphql =
      k567Yz20192().buildGraphql<TStandalonePriceDraft>();
    expect(k567Yz20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2019-2",
        "sku": "k567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1430000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
