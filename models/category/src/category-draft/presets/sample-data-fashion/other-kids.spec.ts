import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import otherKids from './other-kids';

describe(`with otherKids preset`, () => {
  it('should provide an otherKids preset', () => {
    const otherKidsCategoryDraft = otherKids().build<TCategoryDraft>();
    expect(otherKidsCategoryDraft.key).toMatchInlineSnapshot(`"other-kids"`);
    expect(otherKidsCategoryDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Other",
        "fr": undefined,
      }
    `);
    expect(otherKidsCategoryDraft.slug).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "other_kids",
        "fr": undefined,
      }
    `);
    expect(otherKidsCategoryDraft.parent).toMatchInlineSnapshot(`
      {
        "key": "kids",
        "typeId": "category",
      }
    `);
    expect(otherKidsCategoryDraft.orderHint).toMatchInlineSnapshot(`"0.25"`);
  });

  it('should provide an otherKids preset when built for graphql', () => {
    const otherKidsCategoryDraftGraphql =
      otherKids().buildGraphql<TCategoryDraftGraphql>();
    expect(otherKidsCategoryDraftGraphql.key).toMatchInlineSnapshot(
      `"other-kids"`
    );
    expect(otherKidsCategoryDraftGraphql.nameAllLocales).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Other",
        },
      ]
    `);
    expect(otherKidsCategoryDraftGraphql.slug).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "other_kids",
        },
      ]
    `);
    expect(otherKidsCategoryDraftGraphql.parent).toMatchInlineSnapshot(`
      {
        "__typename": "Reference",
        "key": "kids",
        "typeId": "category",
      }
    `);
    expect(otherKidsCategoryDraftGraphql.orderHint).toMatchInlineSnapshot(
      `"0.25"`
    );
    expect(otherKidsCategoryDraftGraphql.__typename).toMatchInlineSnapshot(
      `"CategoryDraft"`
    );
  });
});
