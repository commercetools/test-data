import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import topsWomen from './tops-women';

describe(`with topsWomen preset`, () => {
  it('should provide a topsWomen preset', () => {
    const topsWomenCategoryDraft = topsWomen().build<TCategoryDraft>();
    expect(topsWomenCategoryDraft.key).toMatchInlineSnapshot(`"tops-women"`);
    expect(topsWomenCategoryDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Tops",
        "fr": undefined,
      }
    `);
    expect(topsWomenCategoryDraft.slug).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "tops_women",
        "fr": undefined,
      }
    `);
    expect(topsWomenCategoryDraft.parent).toMatchInlineSnapshot(`
      {
        "key": "women",
        "typeId": "category",
      }
    `);
    expect(topsWomenCategoryDraft.orderHint).toMatchInlineSnapshot(`"0.3"`);
  });

  it('should provide a topsWomen preset when built for graphql', () => {
    const topsWomenCategoryDraftGraphql =
      topsWomen().buildGraphql<TCategoryDraftGraphql>();
    expect(topsWomenCategoryDraftGraphql.key).toMatchInlineSnapshot(
      `"tops-women"`
    );
    expect(topsWomenCategoryDraftGraphql.nameAllLocales).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Tops",
        },
      ]
    `);
    expect(topsWomenCategoryDraftGraphql.slug).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "tops_women",
        },
      ]
    `);
    expect(topsWomenCategoryDraftGraphql.parent).toMatchInlineSnapshot(`
      {
        "__typename": "Reference",
        "key": "women",
        "typeId": "category",
      }
    `);
    expect(topsWomenCategoryDraftGraphql.orderHint).toMatchInlineSnapshot(
      `"0.3"`
    );
    expect(topsWomenCategoryDraftGraphql.__typename).toMatchInlineSnapshot(
      `"CategoryDraft"`
    );
  });
});
