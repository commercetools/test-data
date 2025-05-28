import type { TStandalonePriceDraft } from '../../../types';
import kk567Yz20153 from './kk-567-yz-2015-3';

describe(`with kk567Yz20153 preset`, () => {
  it(`should return a kk567Yz20153 preset`, () => {
    const kk567Yz20153Preset = kk567Yz20153().build<TStandalonePriceDraft>();
    expect(kk567Yz20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2015-3",
        "recurrencePolicy": undefined,
        "sku": "kk567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3960000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a kk567Yz20153 preset when built for graphql`, () => {
    const kk567Yz20153PresetGraphql =
      kk567Yz20153().buildGraphql<TStandalonePriceDraft>();
    expect(kk567Yz20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2015-3",
        "recurrencePolicy": undefined,
        "sku": "kk567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3960000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
