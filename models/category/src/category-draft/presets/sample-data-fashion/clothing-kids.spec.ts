import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import clothingKids from './clothing-kids';

describe(`with clothingKids preset`, () => {
  it('should provide a clothingKids preset', () => {
    const clothingKidsCategoryDraft = clothingKids().build<TCategoryDraft>();
    expect(clothingKidsCategoryDraft.key).toMatchInlineSnapshot();
    expect(clothingKidsCategoryDraft.name).toMatchInlineSnapshot();
    expect(clothingKidsCategoryDraft.slug).toMatchInlineSnapshot();
    expect(clothingKidsCategoryDraft.parent).toMatchInlineSnapshot();
    expect(clothingKidsCategoryDraft.orderHint).toMatchInlineSnapshot();
  });

  it('should provide a clothingKids preset when built for graphql', () => {
    const clothingKidsCategoryDraftGraphql =
      clothingKids().buildGraphql<TCategoryDraftGraphql>();
    expect(clothingKidsCategoryDraftGraphql.key).toMatchInlineSnapshot();
    expect(
      clothingKidsCategoryDraftGraphql.nameAllLocales
    ).toMatchInlineSnapshot();
    expect(clothingKidsCategoryDraftGraphql.slug).toMatchInlineSnapshot();
    expect(clothingKidsCategoryDraftGraphql.parent).toMatchInlineSnapshot();
    expect(clothingKidsCategoryDraftGraphql.orderHint).toMatchInlineSnapshot();
    expect(clothingKidsCategoryDraftGraphql.__typename).toMatchInlineSnapshot();
  });
});
