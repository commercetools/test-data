import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import women from './women';

describe(`with women preset`, () => {
  it('should provide a women preset', () => {
    const womenCategoryDraft = women().build<TCategoryDraft>();
    expect(womenCategoryDraft.key).toMatchInlineSnapshot(`"women"`);
    expect(womenCategoryDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Women",
        "fr": undefined,
      }
    `);
    expect(womenCategoryDraft.slug).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "women",
        "fr": undefined,
      }
    `);
    expect(womenCategoryDraft.description).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Items for women",
        "fr": undefined,
      }
    `);
    expect(womenCategoryDraft.parent).toMatchInlineSnapshot(`undefined`);
    expect(womenCategoryDraft.orderHint).toMatchInlineSnapshot(`"0.5"`);
  });

  it('should provide a women preset when built for graphql', () => {
    const womenCategoryDraftGraphql =
      women().buildGraphql<TCategoryDraftGraphql>();
    expect(womenCategoryDraftGraphql.key).toMatchInlineSnapshot(`"women"`);
    expect(womenCategoryDraftGraphql.nameAllLocales).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Women",
        },
      ]
    `);
    expect(womenCategoryDraftGraphql.slug).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "women",
        },
      ]
    `);
    expect(womenCategoryDraftGraphql.descriptionAllLocales)
      .toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Items for women",
        },
      ]
    `);
    expect(womenCategoryDraftGraphql.parent).toMatchInlineSnapshot(`undefined`);
    expect(womenCategoryDraftGraphql.orderHint).toMatchInlineSnapshot(`"0.5"`);
    expect(womenCategoryDraftGraphql.__typename).toMatchInlineSnapshot(
      `"CategoryDraft"`
    );
  });
});
