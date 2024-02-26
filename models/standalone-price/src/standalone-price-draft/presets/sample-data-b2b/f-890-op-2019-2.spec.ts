import type { TStandalonePriceDraft } from '../../../types';
import f890Op20192 from './f-890-op-2019-2';

describe(`with f890Op20192 preset`, () => {
  it(`should return a f890Op20192 preset`, () => {
    const f890Op20192Preset = f890Op20192().build<TStandalonePriceDraft>();
    expect(f890Op20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2019-2",
        "sku": "f890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1100000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a f890Op20192 preset when built for graphql`, () => {
    const f890Op20192PresetGraphql =
      f890Op20192().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2019-2",
        "sku": "f890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1100000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
