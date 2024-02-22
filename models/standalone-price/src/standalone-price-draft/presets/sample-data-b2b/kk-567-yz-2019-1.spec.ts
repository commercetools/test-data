import type { TStandalonePriceDraft } from '../../../types';
import kk567Yz20191 from './kk-567-yz-2019-1';

describe(`with kk567Yz20191 preset`, () => {
  it(`should return a kk567Yz20191 preset`, () => {
    const kk567Yz20191Preset = kk567Yz20191().build<TStandalonePriceDraft>();
    expect(kk567Yz20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2019-1",
        "sku": "kk567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3630001,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a kk567Yz20191 preset when built for graphql`, () => {
    const kk567Yz20191PresetGraphql =
      kk567Yz20191().buildGraphql<TStandalonePriceDraft>();
    expect(kk567Yz20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2019-1",
        "sku": "kk567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3630001,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
