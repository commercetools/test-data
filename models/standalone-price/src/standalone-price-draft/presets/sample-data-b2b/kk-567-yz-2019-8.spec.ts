import type { TStandalonePriceDraft } from '../../../types';
import kk567Yz20198 from './kk-567-yz-2019-8';

describe(`with kk567Yz20198 preset`, () => {
  it(`should return a kk567Yz20198 preset`, () => {
    const kk567Yz20198Preset = kk567Yz20198().build<TStandalonePriceDraft>();
    expect(kk567Yz20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2019-8",
        "sku": "kk567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a kk567Yz20198 preset when built for graphql`, () => {
    const kk567Yz20198PresetGraphql =
      kk567Yz20198().buildGraphql<TStandalonePriceDraft>();
    expect(kk567Yz20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2019-8",
        "sku": "kk567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
