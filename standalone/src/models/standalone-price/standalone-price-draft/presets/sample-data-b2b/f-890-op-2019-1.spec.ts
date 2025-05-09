import type { TStandalonePriceDraft } from '../../../types';
import f890Op20191 from './f-890-op-2019-1';

describe(`with f890Op20191 preset`, () => {
  it(`should return a f890Op20191 preset`, () => {
    const f890Op20191Preset = f890Op20191().build<TStandalonePriceDraft>();
    expect(f890Op20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2019-1",
        "sku": "f890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1210000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a f890Op20191 preset when built for graphql`, () => {
    const f890Op20191PresetGraphql =
      f890Op20191().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2019-1",
        "sku": "f890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1210000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
