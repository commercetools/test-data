import type { TChannelDraftGraphql, TChannelDraftRest } from '../../../types';
import {
  ChannelDraft,
  ChannelDraftGraphql,
  ChannelDraftRest,
} from '../../index';

describe(`with spain preset`, () => {
  it(`should return a spain preset when built for rest`, () => {
    const spainPreset = ChannelDraftRest.presets.spain().build();
    expect(spainPreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "spain",
        "name": {
          "de": undefined,
          "de-DE": "Spanien",
          "en": undefined,
          "en-AU": "Spain",
          "en-GB": "Spain",
          "en-NZ": "Spain",
          "en-US": "Spain",
          "es-ES": "España",
          "fr": undefined,
          "fr-FR": "Espagnole",
          "it-IT": "Spagna",
          "nl-NL": "Spanje",
          "pt-PT": "Espanha",
        },
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });

  it(`should return a spain preset when built for graphql`, () => {
    const spainPreset = ChannelDraftGraphql.presets.spain().build();
    expect(spainPreset).toMatchInlineSnapshot(`
      {
        "__typename": "ChannelDraft",
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "spain",
        "name": [
          {
            "locale": "de-DE",
            "value": "Spanien",
          },
          {
            "locale": "it-IT",
            "value": "Spagna",
          },
          {
            "locale": "nl-NL",
            "value": "Spanje",
          },
          {
            "locale": "fr-FR",
            "value": "Espagnole",
          },
          {
            "locale": "en-AU",
            "value": "Spain",
          },
          {
            "locale": "es-ES",
            "value": "España",
          },
          {
            "locale": "en-GB",
            "value": "Spain",
          },
          {
            "locale": "en-NZ",
            "value": "Spain",
          },
          {
            "locale": "pt-PT",
            "value": "Espanha",
          },
          {
            "locale": "en-US",
            "value": "Spain",
          },
        ],
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });

  it(`should return a spain preset when built for legacy rest`, () => {
    const spainPreset = ChannelDraft.presets
      .spain()
      .buildRest<TChannelDraftRest>();
    expect(spainPreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "spain",
        "name": {
          "de": undefined,
          "de-DE": "Spanien",
          "en": undefined,
          "en-AU": "Spain",
          "en-GB": "Spain",
          "en-NZ": "Spain",
          "en-US": "Spain",
          "es-ES": "España",
          "fr": undefined,
          "fr-FR": "Espagnole",
          "it-IT": "Spagna",
          "nl-NL": "Spanje",
          "pt-PT": "Espanha",
        },
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });

  it(`should return a spain preset when built for legacy graphql`, () => {
    const spainPreset = ChannelDraft.presets
      .spain()
      .buildGraphql<TChannelDraftGraphql>();
    expect(spainPreset).toMatchInlineSnapshot(`
      {
        "__typename": "ChannelDraft",
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "spain",
        "name": [
          {
            "locale": "de-DE",
            "value": "Spanien",
          },
          {
            "locale": "it-IT",
            "value": "Spagna",
          },
          {
            "locale": "nl-NL",
            "value": "Spanje",
          },
          {
            "locale": "fr-FR",
            "value": "Espagnole",
          },
          {
            "locale": "en-AU",
            "value": "Spain",
          },
          {
            "locale": "es-ES",
            "value": "España",
          },
          {
            "locale": "en-GB",
            "value": "Spain",
          },
          {
            "locale": "en-NZ",
            "value": "Spain",
          },
          {
            "locale": "pt-PT",
            "value": "Espanha",
          },
          {
            "locale": "en-US",
            "value": "Spain",
          },
        ],
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });
});
