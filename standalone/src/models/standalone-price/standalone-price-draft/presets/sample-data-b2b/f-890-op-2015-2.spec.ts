import type { TStandalonePriceDraft } from '../../../types';
import f890Op20152 from './f-890-op-2015-2';

describe(`with f890Op20152 preset`, () => {
  it(`should return a f890Op20152 preset`, () => {
    const f890Op20152Preset = f890Op20152().build<TStandalonePriceDraft>();
    expect(f890Op20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2015-2",
        "sku": "f890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 990000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a f890Op20152 preset when built for graphql`, () => {
    const f890Op20152PresetGraphql =
      f890Op20152().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2015-2",
        "sku": "f890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 990000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
