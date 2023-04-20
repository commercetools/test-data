import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import kids from './kids';

describe(`with kids preset`, () => {
  it('should provide a kids preset', () => {
    const kidsCategoryDraft = kids().build<TCategoryDraft>();
    expect(kidsCategoryDraft.key).toMatchInlineSnapshot(`"kids"`);
    expect(kidsCategoryDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Kids",
        "fr": undefined,
      }
    `);
    expect(kidsCategoryDraft.slug).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "kids",
        "fr": undefined,
      }
    `);
    expect(kidsCategoryDraft.description).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Items for kids",
        "fr": undefined,
      }
    `);
    expect(kidsCategoryDraft.parent).toMatchInlineSnapshot(`undefined`);
    expect(kidsCategoryDraft.orderHint).toMatchInlineSnapshot(`"0.25"`);
  });

  it('should provide a kids preset when built for graphql', () => {
    const kidsCategoryDraftGraphql =
      kids().buildGraphql<TCategoryDraftGraphql>();
    expect(kidsCategoryDraftGraphql.key).toMatchInlineSnapshot(`"kids"`);
    expect(kidsCategoryDraftGraphql.nameAllLocales).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Kids",
        },
      ]
    `);
    expect(kidsCategoryDraftGraphql.slug).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "kids",
        },
      ]
    `);
    expect(kidsCategoryDraftGraphql.descriptionAllLocales)
      .toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Items for kids",
        },
      ]
    `);
    expect(kidsCategoryDraftGraphql.parent).toMatchInlineSnapshot(`undefined`);
    expect(kidsCategoryDraftGraphql.orderHint).toMatchInlineSnapshot(`"0.25"`);
    expect(kidsCategoryDraftGraphql.__typename).toMatchInlineSnapshot(
      `"CategoryDraft"`
    );
  });
});
