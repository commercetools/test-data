import type { TStandalonePriceDraft } from '../../../types';
import f890Op20151 from './f-890-op-2015-1';

describe(`with f890Op20151 preset`, () => {
  it(`should return a f890Op20151 preset`, () => {
    const f890Op20151Preset = f890Op20151().build<TStandalonePriceDraft>();
    expect(f890Op20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2015-1",
        "sku": "f890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1100000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a f890Op20151 preset when built for graphql`, () => {
    const f890Op20151PresetGraphql =
      f890Op20151().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2015-1",
        "sku": "f890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1100000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
