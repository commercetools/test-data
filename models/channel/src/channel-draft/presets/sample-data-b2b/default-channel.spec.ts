import type { TChannelDraft } from '../../../types';
import defaultChannel from './default-channel';

describe(`with defaultChannel preset`, () => {
  it(`should return a defaultChannel preset`, () => {
    const defaultChannelPreset = defaultChannel().build<TChannelDraft>();
    expect(defaultChannelPreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "default-channel",
        "name": {
          "de": undefined,
          "de-DE": "Standard",
          "en": undefined,
          "en-AU": "Default",
          "en-GB": "Default",
          "en-NZ": "Default",
          "en-US": "Default",
          "es-ES": "Predeterminado",
          "fr": undefined,
          "fr-FR": "Défaut",
          "it-IT": "Predefinito",
          "nl-NL": "Standaard",
          "pt-PT": "Padrão",
        },
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });

  it(`should return a defaultChannel preset when built for graphql`, () => {
    const defaultChannelPresetGraphql =
      defaultChannel().buildGraphql<TChannelDraft>();
    expect(defaultChannelPresetGraphql).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "default-channel",
        "name": [
          {
            "locale": "de-DE",
            "value": "Standard",
          },
          {
            "locale": "it-IT",
            "value": "Predefinito",
          },
          {
            "locale": "nl-NL",
            "value": "Standaard",
          },
          {
            "locale": "fr-FR",
            "value": "Défaut",
          },
          {
            "locale": "en-AU",
            "value": "Default",
          },
          {
            "locale": "es-ES",
            "value": "Predeterminado",
          },
          {
            "locale": "en-GB",
            "value": "Default",
          },
          {
            "locale": "en-NZ",
            "value": "Default",
          },
          {
            "locale": "pt-PT",
            "value": "Padrão",
          },
          {
            "locale": "en-US",
            "value": "Default",
          },
        ],
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });
});
