import type { TCategoryDraft } from '../../../types';
import fineGraders from './fine-graders';

describe(`with fineGraders preset`, () => {
  it(`should return a fineGraders preset`, () => {
    const fineGradersPreset = fineGraders().build<TCategoryDraft>();
    expect(fineGradersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Motorgrader für feine Gradaufgaben",
          "en": undefined,
          "en-AU": "Motor graders for fine grading tasks",
          "en-GB": "Motor graders for fine grading tasks",
          "en-NZ": "Motor graders for fine grading tasks",
          "en-US": "Motor graders for fine grading tasks",
          "es-ES": "Motoniveladoras para tareas de nivelación fina",
          "fr": undefined,
          "fr-FR": "Niveleuses pour des tâches de nivellement fines",
          "it-IT": "Livellatrici motorizzate per compiti di livellamento fine",
          "nl-NL": "Motorgraders voor fijn graderingswerk",
          "pt-PT": "Motoniveladoras para tarefas de nivelamento fino",
        },
        "externalId": undefined,
        "key": "fine-graders",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Fein-Grader",
          "en": undefined,
          "en-AU": "Fine Graders",
          "en-GB": "Fine Graders",
          "en-NZ": "Fine Graders",
          "en-US": "Fine Graders",
          "es-ES": "Motoniveladoras finas",
          "fr": undefined,
          "fr-FR": "Niveleuses fines",
          "it-IT": "Livellatrici Fine",
          "nl-NL": "Fijne Graders",
          "pt-PT": "Motoniveladoras Finas",
        },
        "orderHint": "0.000017113644847541613522016",
        "parent": {
          "key": "high-capacity-motor-graders",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "fein_grader",
          "en": undefined,
          "en-AU": "fine_graders",
          "en-GB": "fine_graders",
          "en-NZ": "fine_graders",
          "en-US": "fine_graders",
          "es-ES": "motoniveladoras_finas",
          "fr": undefined,
          "fr-FR": "niveleuses_fines",
          "it-IT": "fine_graders",
          "nl-NL": "fine_graders",
          "pt-PT": "fine_graders",
        },
      }
    `);
  });

  it(`should return a fineGraders preset when built for graphql`, () => {
    const fineGradersPresetGraphql =
      fineGraders().buildGraphql<TCategoryDraft>();
    expect(fineGradersPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Motorgrader für feine Gradaufgaben",
          },
          {
            "locale": "it-IT",
            "value": "Livellatrici motorizzate per compiti di livellamento fine",
          },
          {
            "locale": "nl-NL",
            "value": "Motorgraders voor fijn graderingswerk",
          },
          {
            "locale": "fr-FR",
            "value": "Niveleuses pour des tâches de nivellement fines",
          },
          {
            "locale": "en-AU",
            "value": "Motor graders for fine grading tasks",
          },
          {
            "locale": "es-ES",
            "value": "Motoniveladoras para tareas de nivelación fina",
          },
          {
            "locale": "en-GB",
            "value": "Motor graders for fine grading tasks",
          },
          {
            "locale": "en-NZ",
            "value": "Motor graders for fine grading tasks",
          },
          {
            "locale": "pt-PT",
            "value": "Motoniveladoras para tarefas de nivelamento fino",
          },
          {
            "locale": "en-US",
            "value": "Motor graders for fine grading tasks",
          },
        ],
        "externalId": undefined,
        "key": "fine-graders",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Fein-Grader",
          },
          {
            "locale": "it-IT",
            "value": "Livellatrici Fine",
          },
          {
            "locale": "nl-NL",
            "value": "Fijne Graders",
          },
          {
            "locale": "fr-FR",
            "value": "Niveleuses fines",
          },
          {
            "locale": "en-AU",
            "value": "Fine Graders",
          },
          {
            "locale": "es-ES",
            "value": "Motoniveladoras finas",
          },
          {
            "locale": "en-GB",
            "value": "Fine Graders",
          },
          {
            "locale": "en-NZ",
            "value": "Fine Graders",
          },
          {
            "locale": "pt-PT",
            "value": "Motoniveladoras Finas",
          },
          {
            "locale": "en-US",
            "value": "Fine Graders",
          },
        ],
        "orderHint": "0.000017113644847541613522016",
        "parent": {
          "key": "high-capacity-motor-graders",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "fein_grader",
          },
          {
            "locale": "it-IT",
            "value": "fine_graders",
          },
          {
            "locale": "nl-NL",
            "value": "fine_graders",
          },
          {
            "locale": "fr-FR",
            "value": "niveleuses_fines",
          },
          {
            "locale": "en-AU",
            "value": "fine_graders",
          },
          {
            "locale": "es-ES",
            "value": "motoniveladoras_finas",
          },
          {
            "locale": "en-GB",
            "value": "fine_graders",
          },
          {
            "locale": "en-NZ",
            "value": "fine_graders",
          },
          {
            "locale": "pt-PT",
            "value": "fine_graders",
          },
          {
            "locale": "en-US",
            "value": "fine_graders",
          },
        ],
      }
    `);
  });
});
