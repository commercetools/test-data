import type { TStandalonePriceDraft } from '../../../types';
import kk567Yz20152 from './kk-567-yz-2015-2';

describe(`with kk567Yz20152 preset`, () => {
  it(`should return a kk567Yz20152 preset`, () => {
    const kk567Yz20152Preset = kk567Yz20152().build<TStandalonePriceDraft>();
    expect(kk567Yz20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2015-2",
        "recurrencePolicy": undefined,
        "sku": "kk567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2970000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a kk567Yz20152 preset when built for graphql`, () => {
    const kk567Yz20152PresetGraphql =
      kk567Yz20152().buildGraphql<TStandalonePriceDraft>();
    expect(kk567Yz20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2015-2",
        "recurrencePolicy": undefined,
        "sku": "kk567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2970000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
