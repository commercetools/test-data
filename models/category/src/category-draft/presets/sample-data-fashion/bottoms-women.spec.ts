import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bottomsWomen from './bottoms-women';

describe(`with bottomsWomen preset`, () => {
  it('should provide a bottomsWomen preset', () => {
    const bottomsWomenCategoryDraft = bottomsWomen().build<TCategoryDraft>();
    expect(bottomsWomenCategoryDraft.key).toMatchInlineSnapshot(
      `"bottoms-women"`
    );
    expect(bottomsWomenCategoryDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Bottoms",
        "fr": undefined,
      }
    `);
    expect(bottomsWomenCategoryDraft.slug).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "bottoms_women",
        "fr": undefined,
      }
    `);
    expect(bottomsWomenCategoryDraft.parent).toMatchInlineSnapshot(`
      {
        "key": "women",
        "typeId": "category",
      }
    `);
    expect(bottomsWomenCategoryDraft.orderHint).toMatchInlineSnapshot(`"0.4"`);
  });

  it('should provide a bottomsWomen preset when built for graphql', () => {
    const bottomsWomenCategoryDraftGraphql =
      bottomsWomen().buildGraphql<TCategoryDraftGraphql>();
    expect(bottomsWomenCategoryDraftGraphql.key).toMatchInlineSnapshot(
      `"bottoms-women"`
    );
    expect(bottomsWomenCategoryDraftGraphql.nameAllLocales)
      .toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Bottoms",
        },
      ]
    `);
    expect(bottomsWomenCategoryDraftGraphql.slug).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "bottoms_women",
        },
      ]
    `);
    expect(bottomsWomenCategoryDraftGraphql.parent).toMatchInlineSnapshot(`
      {
        "__typename": "Reference",
        "key": "women",
        "typeId": "category",
      }
    `);
    expect(bottomsWomenCategoryDraftGraphql.orderHint).toMatchInlineSnapshot(
      `"0.4"`
    );
    expect(bottomsWomenCategoryDraftGraphql.__typename).toMatchInlineSnapshot(
      `"CategoryDraft"`
    );
  });
});
