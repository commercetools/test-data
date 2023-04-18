import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import otherWomen from './other-women';

describe(`with otherWomen preset`, () => {
  it('should provide an otherWomen preset', () => {
    const otherWomenCategoryDraft = otherWomen().build<TCategoryDraft>();
    expect(otherWomenCategoryDraft.key).toMatchInlineSnapshot(`"other-women"`);
    expect(otherWomenCategoryDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Other",
        "fr": undefined,
      }
    `);
    expect(otherWomenCategoryDraft.slug).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "other_women",
        "fr": undefined,
      }
    `);
    expect(otherWomenCategoryDraft.parent).toMatchInlineSnapshot(`
      {
        "key": "women",
        "typeId": "category",
      }
    `);
    expect(otherWomenCategoryDraft.orderHint).toMatchInlineSnapshot(`"0.5"`);
  });

  it('should provide an otherWomen preset when built for graphql', () => {
    const otherWomenCategoryDraftGraphql =
      otherWomen().buildGraphql<TCategoryDraftGraphql>();
    expect(otherWomenCategoryDraftGraphql.key).toMatchInlineSnapshot(
      `"other-women"`
    );
    expect(otherWomenCategoryDraftGraphql.nameAllLocales)
      .toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Other",
        },
      ]
    `);
    expect(otherWomenCategoryDraftGraphql.slug).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "other_women",
        },
      ]
    `);
    expect(otherWomenCategoryDraftGraphql.parent).toMatchInlineSnapshot(`
      {
        "__typename": "Reference",
        "key": "women",
        "typeId": "category",
      }
    `);
    expect(otherWomenCategoryDraftGraphql.orderHint).toMatchInlineSnapshot(
      `"0.5"`
    );
    expect(otherWomenCategoryDraftGraphql.__typename).toMatchInlineSnapshot(
      `"CategoryDraft"`
    );
  });
});
