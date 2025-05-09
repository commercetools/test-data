import type { TStandalonePriceDraft } from '../../../types';
import kk567Yz20156 from './kk-567-yz-2015-6';

describe(`with kk567Yz20156 preset`, () => {
  it(`should return a kk567Yz20156 preset`, () => {
    const kk567Yz20156Preset = kk567Yz20156().build<TStandalonePriceDraft>();
    expect(kk567Yz20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2015-6",
        "sku": "kk567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2400000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a kk567Yz20156 preset when built for graphql`, () => {
    const kk567Yz20156PresetGraphql =
      kk567Yz20156().buildGraphql<TStandalonePriceDraft>();
    expect(kk567Yz20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2015-6",
        "sku": "kk567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2400000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
