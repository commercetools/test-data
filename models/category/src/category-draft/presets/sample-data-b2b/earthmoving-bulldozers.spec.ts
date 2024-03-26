import type { TCategoryDraft } from '../../../types';
import earthmovingBulldozers from './earthmoving-bulldozers';

describe(`with earthmovingBulldozers preset`, () => {
  it(`should return a earthmovingBulldozers preset`, () => {
    const earthmovingBulldozersPreset =
      earthmovingBulldozers().build<TCategoryDraft>();
    expect(earthmovingBulldozersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Bulldozer für allgemeine Erdbewegungsarbeiten",
          "en": undefined,
          "en-AU": "Bulldozers for general earthmoving",
          "en-GB": "Bulldozers for general earthmoving",
          "en-NZ": "Bulldozers for general earthmoving",
          "en-US": "Bulldozers for general earthmoving",
          "es-ES": "Bulldozers para movimiento de tierras en general",
          "fr": undefined,
          "fr-FR": "Bulldozers pour le terrassement général",
          "it-IT": "Bulldozer per movimento terra generale",
          "nl-NL": "Bulldozers voor algemeen grondverzet",
          "pt-PT": "Bulldozers para movimentação geral de terra",
        },
        "externalId": undefined,
        "key": "earthmoving-bulldozers",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Erdbewegungsbagger",
          "en": undefined,
          "en-AU": "Earthmoving Bulldozers",
          "en-GB": "Earthmoving Bulldozers",
          "en-NZ": "Earthmoving Bulldozers",
          "en-US": "Earthmoving Bulldozers",
          "es-ES": "Bulldozers de movimiento de tierras",
          "fr": undefined,
          "fr-FR": "Bulldozers de terrassement",
          "it-IT": "Bulldozer per Movimento Terra",
          "nl-NL": "Grondverzet Bulldozers",
          "pt-PT": "Bulldozers para Movimentação de Terra",
        },
        "orderHint": "0.000017113644847561100385515",
        "parent": {
          "key": "large-bulldozers",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "erdbewegungsbagger_bulldozer",
          "en": undefined,
          "en-AU": "earthmoving_bulldozers",
          "en-GB": "earthmoving_bulldozers",
          "en-NZ": "earthmoving_bulldozers",
          "en-US": "earthmoving_bulldozers",
          "es-ES": "bulldozers_movimiento_tierras",
          "fr": undefined,
          "fr-FR": "bulldozers_terrassement",
          "it-IT": "earthmoving_bulldozers",
          "nl-NL": "earthmoving_bulldozers",
          "pt-PT": "earthmoving_bulldozers",
        },
      }
    `);
  });

  it(`should return a earthmovingBulldozers preset when built for graphql`, () => {
    const earthmovingBulldozersPresetGraphql =
      earthmovingBulldozers().buildGraphql<TCategoryDraft>();
    expect(earthmovingBulldozersPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Bulldozer für allgemeine Erdbewegungsarbeiten",
          },
          {
            "locale": "it-IT",
            "value": "Bulldozer per movimento terra generale",
          },
          {
            "locale": "nl-NL",
            "value": "Bulldozers voor algemeen grondverzet",
          },
          {
            "locale": "fr-FR",
            "value": "Bulldozers pour le terrassement général",
          },
          {
            "locale": "en-AU",
            "value": "Bulldozers for general earthmoving",
          },
          {
            "locale": "es-ES",
            "value": "Bulldozers para movimiento de tierras en general",
          },
          {
            "locale": "en-GB",
            "value": "Bulldozers for general earthmoving",
          },
          {
            "locale": "en-NZ",
            "value": "Bulldozers for general earthmoving",
          },
          {
            "locale": "pt-PT",
            "value": "Bulldozers para movimentação geral de terra",
          },
          {
            "locale": "en-US",
            "value": "Bulldozers for general earthmoving",
          },
        ],
        "externalId": undefined,
        "key": "earthmoving-bulldozers",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Erdbewegungsbagger",
          },
          {
            "locale": "it-IT",
            "value": "Bulldozer per Movimento Terra",
          },
          {
            "locale": "nl-NL",
            "value": "Grondverzet Bulldozers",
          },
          {
            "locale": "fr-FR",
            "value": "Bulldozers de terrassement",
          },
          {
            "locale": "en-AU",
            "value": "Earthmoving Bulldozers",
          },
          {
            "locale": "es-ES",
            "value": "Bulldozers de movimiento de tierras",
          },
          {
            "locale": "en-GB",
            "value": "Earthmoving Bulldozers",
          },
          {
            "locale": "en-NZ",
            "value": "Earthmoving Bulldozers",
          },
          {
            "locale": "pt-PT",
            "value": "Bulldozers para Movimentação de Terra",
          },
          {
            "locale": "en-US",
            "value": "Earthmoving Bulldozers",
          },
        ],
        "orderHint": "0.000017113644847561100385515",
        "parent": {
          "key": "large-bulldozers",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "erdbewegungsbagger_bulldozer",
          },
          {
            "locale": "it-IT",
            "value": "earthmoving_bulldozers",
          },
          {
            "locale": "nl-NL",
            "value": "earthmoving_bulldozers",
          },
          {
            "locale": "fr-FR",
            "value": "bulldozers_terrassement",
          },
          {
            "locale": "en-AU",
            "value": "earthmoving_bulldozers",
          },
          {
            "locale": "es-ES",
            "value": "bulldozers_movimiento_tierras",
          },
          {
            "locale": "en-GB",
            "value": "earthmoving_bulldozers",
          },
          {
            "locale": "en-NZ",
            "value": "earthmoving_bulldozers",
          },
          {
            "locale": "pt-PT",
            "value": "earthmoving_bulldozers",
          },
          {
            "locale": "en-US",
            "value": "earthmoving_bulldozers",
          },
        ],
      }
    `);
  });
});
