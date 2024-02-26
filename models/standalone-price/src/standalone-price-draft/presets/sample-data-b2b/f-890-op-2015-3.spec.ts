import type { TStandalonePriceDraft } from '../../../types';
import f890Op20153 from './f-890-op-2015-3';

describe(`with f890Op20153 preset`, () => {
  it(`should return a f890Op20153 preset`, () => {
    const f890Op20153Preset = f890Op20153().build<TStandalonePriceDraft>();
    expect(f890Op20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2015-3",
        "sku": "f890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a f890Op20153 preset when built for graphql`, () => {
    const f890Op20153PresetGraphql =
      f890Op20153().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2015-3",
        "sku": "f890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
