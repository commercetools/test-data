import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import men from './men';

describe(`with men preset`, () => {
  it('should provide a men preset', () => {
    const menCategoryDraft = men().build<TCategoryDraft>();
    expect(menCategoryDraft.key).toMatchInlineSnapshot(`"men"`);
    expect(menCategoryDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Men",
        "fr": undefined,
      }
    `);
    expect(menCategoryDraft.slug).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "men",
        "fr": undefined,
      }
    `);
    expect(menCategoryDraft.description).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Items for men",
        "fr": undefined,
      }
    `);
    expect(menCategoryDraft.parent).toMatchInlineSnapshot(`undefined`);
    expect(menCategoryDraft.orderHint).toMatchInlineSnapshot(`"0.75"`);
  });

  it('should provide a men preset when built for graphql', () => {
    const menCategoryDraftGraphql = men().buildGraphql<TCategoryDraftGraphql>();
    expect(menCategoryDraftGraphql.key).toMatchInlineSnapshot(`"men"`);
    expect(menCategoryDraftGraphql.nameAllLocales).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Men",
        },
      ]
    `);
    expect(menCategoryDraftGraphql.slug).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "men",
        },
      ]
    `);
    expect(menCategoryDraftGraphql.descriptionAllLocales)
      .toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Items for men",
        },
      ]
    `);
    expect(menCategoryDraftGraphql.parent).toMatchInlineSnapshot(`undefined`);
    expect(menCategoryDraftGraphql.orderHint).toMatchInlineSnapshot(`"0.75"`);
    expect(menCategoryDraftGraphql.__typename).toMatchInlineSnapshot(
      `"CategoryDraft"`
    );
  });
});
