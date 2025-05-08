import type { TCategoryDraft } from '../../../types';
import productionDrills from './production-drills';

describe(`with productionDrills preset`, () => {
  it(`should return a productionDrills preset`, () => {
    const productionDrillsPreset = productionDrills().build<TCategoryDraft>();
    expect(productionDrillsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Bohrer für groß angelegte Produktionsaktivitäten",
          "en": undefined,
          "en-AU": "Drills for large-scale production activities",
          "en-GB": "Drills for large-scale production activities",
          "en-NZ": "Drills for large-scale production activities",
          "en-US": "Drills for large-scale production activities",
          "es-ES": "Perforadoras para actividades de producción a gran escala",
          "fr": undefined,
          "fr-FR": "Forages pour des activités de production à grande échelle",
          "it-IT": "Trapani per attività di produzione su larga scala",
          "nl-NL": "Boormachines voor grootschalige productieactiviteiten",
          "pt-PT": "Brocas para atividades de produção em grande escala",
        },
        "externalId": undefined,
        "key": "production-drills",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Produktionsbohrer",
          "en": undefined,
          "en-AU": "Production Drills",
          "en-GB": "Production Drills",
          "en-NZ": "Production Drills",
          "en-US": "Production Drills",
          "es-ES": "Perforadoras de producción",
          "fr": undefined,
          "fr-FR": "Forages de production",
          "it-IT": "Trapani di Produzione",
          "nl-NL": "Productieboormachines",
          "pt-PT": "Brocas de Produção",
        },
        "orderHint": "0.00001711364484755764795695",
        "parent": {
          "key": "large-diameter-mining-drills",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "produktions_bohrer",
          "en": undefined,
          "en-AU": "production_drills",
          "en-GB": "production_drills",
          "en-NZ": "production_drills",
          "en-US": "production_drills",
          "es-ES": "perforadoras_produccion",
          "fr": undefined,
          "fr-FR": "forages_production",
          "it-IT": "production_drills",
          "nl-NL": "production_drills",
          "pt-PT": "production_drills",
        },
      }
    `);
  });

  it(`should return a productionDrills preset when built for graphql`, () => {
    const productionDrillsPresetGraphql =
      productionDrills().buildGraphql<TCategoryDraft>();
    expect(productionDrillsPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Bohrer für groß angelegte Produktionsaktivitäten",
          },
          {
            "locale": "it-IT",
            "value": "Trapani per attività di produzione su larga scala",
          },
          {
            "locale": "nl-NL",
            "value": "Boormachines voor grootschalige productieactiviteiten",
          },
          {
            "locale": "fr-FR",
            "value": "Forages pour des activités de production à grande échelle",
          },
          {
            "locale": "en-AU",
            "value": "Drills for large-scale production activities",
          },
          {
            "locale": "es-ES",
            "value": "Perforadoras para actividades de producción a gran escala",
          },
          {
            "locale": "en-GB",
            "value": "Drills for large-scale production activities",
          },
          {
            "locale": "en-NZ",
            "value": "Drills for large-scale production activities",
          },
          {
            "locale": "pt-PT",
            "value": "Brocas para atividades de produção em grande escala",
          },
          {
            "locale": "en-US",
            "value": "Drills for large-scale production activities",
          },
        ],
        "externalId": undefined,
        "key": "production-drills",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Produktionsbohrer",
          },
          {
            "locale": "it-IT",
            "value": "Trapani di Produzione",
          },
          {
            "locale": "nl-NL",
            "value": "Productieboormachines",
          },
          {
            "locale": "fr-FR",
            "value": "Forages de production",
          },
          {
            "locale": "en-AU",
            "value": "Production Drills",
          },
          {
            "locale": "es-ES",
            "value": "Perforadoras de producción",
          },
          {
            "locale": "en-GB",
            "value": "Production Drills",
          },
          {
            "locale": "en-NZ",
            "value": "Production Drills",
          },
          {
            "locale": "pt-PT",
            "value": "Brocas de Produção",
          },
          {
            "locale": "en-US",
            "value": "Production Drills",
          },
        ],
        "orderHint": "0.00001711364484755764795695",
        "parent": {
          "key": "large-diameter-mining-drills",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "produktions_bohrer",
          },
          {
            "locale": "it-IT",
            "value": "production_drills",
          },
          {
            "locale": "nl-NL",
            "value": "production_drills",
          },
          {
            "locale": "fr-FR",
            "value": "forages_production",
          },
          {
            "locale": "en-AU",
            "value": "production_drills",
          },
          {
            "locale": "es-ES",
            "value": "perforadoras_produccion",
          },
          {
            "locale": "en-GB",
            "value": "production_drills",
          },
          {
            "locale": "en-NZ",
            "value": "production_drills",
          },
          {
            "locale": "pt-PT",
            "value": "production_drills",
          },
          {
            "locale": "en-US",
            "value": "production_drills",
          },
        ],
      }
    `);
  });
});
