import type { TChannelDraftGraphql, TChannelDraftRest } from '../../../types';
import * as presets from './distribution-channel';

describe(`with distributionChannel preset`, () => {
  it(`should return a distributionChannel preset when built for rest`, () => {
    const distributionChannelPreset = presets.restPreset().build();
    expect(distributionChannelPreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "en-US": "Distribution Channel",
          "fr": undefined,
        },
        "geoLocation": undefined,
        "key": "distribution-channel",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Distribution Channel",
          "fr": undefined,
        },
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });

  it(`should return a distributionChannel preset when built for graphql`, () => {
    const distributionChannelPreset = presets.graphqlPreset().build();
    expect(distributionChannelPreset).toMatchInlineSnapshot(`
      {
        "__typename": "ChannelDraft",
        "address": undefined,
        "custom": undefined,
        "description": [
          {
            "locale": "en-US",
            "value": "Distribution Channel",
          },
        ],
        "geoLocation": undefined,
        "key": "distribution-channel",
        "name": [
          {
            "locale": "en-US",
            "value": "Distribution Channel",
          },
        ],
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });

  it(`should return a distributionChannel preset when built for legacy rest`, () => {
    const distributionChannelPreset = presets
      .compatPreset()
      .buildRest<TChannelDraftRest>();
    expect(distributionChannelPreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "en-US": "Distribution Channel",
          "fr": undefined,
        },
        "geoLocation": undefined,
        "key": "distribution-channel",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Distribution Channel",
          "fr": undefined,
        },
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });

  it(`should return a distributionChannel preset when built for legacy graphql`, () => {
    const distributionChannelPreset = presets
      .compatPreset()
      .buildGraphql<TChannelDraftGraphql>();
    expect(distributionChannelPreset).toMatchInlineSnapshot(`
      {
        "__typename": "ChannelDraft",
        "address": undefined,
        "custom": undefined,
        "description": [
          {
            "locale": "en-US",
            "value": "Distribution Channel",
          },
        ],
        "geoLocation": undefined,
        "key": "distribution-channel",
        "name": [
          {
            "locale": "en-US",
            "value": "Distribution Channel",
          },
        ],
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });
});
