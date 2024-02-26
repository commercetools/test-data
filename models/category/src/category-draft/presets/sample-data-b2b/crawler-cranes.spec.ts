import type { TCategoryDraft } from '../../../types';
import crawlerCranes from './crawler-cranes';

describe(`with crawlerCranes preset`, () => {
  it(`should return a crawlerCranes preset`, () => {
    const crawlerCranesPreset = crawlerCranes().build<TCategoryDraft>();
    expect(crawlerCranesPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "crawler-cranes",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Raupenkräne",
          "en": undefined,
          "en-AU": "Crawler Cranes",
          "en-GB": "Crawler Cranes",
          "en-NZ": "Crawler Cranes",
          "en-US": "Crawler Cranes",
          "es-ES": "Gruas de orugas",
          "fr": undefined,
          "fr-FR": "Grues sur chenilles",
          "it-IT": "Gru Cingolate",
          "nl-NL": "Rupskranen",
          "pt-PT": "Guindastes de Esteira",
        },
        "orderHint": "0.000017083829491681975334762",
        "parent": {
          "key": "heavy-duty-construction-cranes",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "raupen_kraene",
          "en": undefined,
          "en-AU": "crawler_cranes",
          "en-GB": "crawler_cranes",
          "en-NZ": "crawler_cranes",
          "en-US": "crawler_cranes",
          "es-ES": "gruas_orugas",
          "fr": undefined,
          "fr-FR": "grues_sur_chenilles",
          "it-IT": "crawler_cranes",
          "nl-NL": "crawler_cranes",
          "pt-PT": "crawler_cranes",
        },
      }
    `);
  });

  it(`should return a crawlerCranes preset when built for graphql`, () => {
    const crawlerCranesPresetGraphql =
      crawlerCranes().buildGraphql<TCategoryDraft>();
    expect(crawlerCranesPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "crawler-cranes",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Raupenkräne",
          },
          {
            "locale": "it-IT",
            "value": "Gru Cingolate",
          },
          {
            "locale": "nl-NL",
            "value": "Rupskranen",
          },
          {
            "locale": "fr-FR",
            "value": "Grues sur chenilles",
          },
          {
            "locale": "en-AU",
            "value": "Crawler Cranes",
          },
          {
            "locale": "es-ES",
            "value": "Gruas de orugas",
          },
          {
            "locale": "en-GB",
            "value": "Crawler Cranes",
          },
          {
            "locale": "en-NZ",
            "value": "Crawler Cranes",
          },
          {
            "locale": "pt-PT",
            "value": "Guindastes de Esteira",
          },
          {
            "locale": "en-US",
            "value": "Crawler Cranes",
          },
        ],
        "orderHint": "0.000017083829491681975334762",
        "parent": {
          "key": "heavy-duty-construction-cranes",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "raupen_kraene",
          },
          {
            "locale": "it-IT",
            "value": "crawler_cranes",
          },
          {
            "locale": "nl-NL",
            "value": "crawler_cranes",
          },
          {
            "locale": "fr-FR",
            "value": "grues_sur_chenilles",
          },
          {
            "locale": "en-AU",
            "value": "crawler_cranes",
          },
          {
            "locale": "es-ES",
            "value": "gruas_orugas",
          },
          {
            "locale": "en-GB",
            "value": "crawler_cranes",
          },
          {
            "locale": "en-NZ",
            "value": "crawler_cranes",
          },
          {
            "locale": "pt-PT",
            "value": "crawler_cranes",
          },
          {
            "locale": "en-US",
            "value": "crawler_cranes",
          },
        ],
      }
    `);
  });
});
