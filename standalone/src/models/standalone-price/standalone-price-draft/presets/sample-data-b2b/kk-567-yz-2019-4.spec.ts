import type { TStandalonePriceDraft } from '../../../types';
import kk567Yz20194 from './kk-567-yz-2019-4';

describe(`with kk567Yz20194 preset`, () => {
  it(`should return a kk567Yz20194 preset`, () => {
    const kk567Yz20194Preset = kk567Yz20194().build<TStandalonePriceDraft>();
    expect(kk567Yz20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2019-4",
        "recurrencePolicy": undefined,
        "sku": "kk567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a kk567Yz20194 preset when built for graphql`, () => {
    const kk567Yz20194PresetGraphql =
      kk567Yz20194().buildGraphql<TStandalonePriceDraft>();
    expect(kk567Yz20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2019-4",
        "recurrencePolicy": undefined,
        "sku": "kk567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
