import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bottomsWomen from './bottoms-women';

describe(`with bottomsWomen preset`, () => {
  it('should provide a bottomsWomen preset', () => {
    const bottomsWomenCategoryDraft = bottomsWomen().build<TCategoryDraft>();
    expect(bottomsWomenCategoryDraft).toEqual({
      key: 'bottoms-women',
      externalId: undefined,
      name: expect.objectContaining({
        de: undefined,
        en: undefined,
        fr: undefined,
        'en-US': 'Bottoms',
      }),
      slug: expect.objectContaining({
        de: undefined,
        en: undefined,
        fr: undefined,
        'en-US': 'bottoms_women',
      }),
      parent: expect.objectContaining({
        typeId: 'category',
        key: 'women',
      }),
      orderHint: '0.4',
      metaTitle: undefined,
      metaDescription: undefined,
      metaKeywords: undefined,
      assets: [],
      custom: undefined,
    });
  });

  it('should provide a bottomsWomen preset when built for graphql', () => {
    const bottomsWomenCategoryDraftGraphql =
      bottomsWomen().buildGraphql<TCategoryDraftGraphql>();
    expect(bottomsWomenCategoryDraftGraphql).toEqual({
      key: 'bottoms-women',
      externalId: undefined,
      name: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en-US',
          value: 'Bottoms',
          __typename: 'LocalizedString',
        }),
      ]),
      slug: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en-US',
          value: 'bottoms_women',
          __typename: 'LocalizedString',
        }),
      ]),
      parent: expect.objectContaining({
        __typename: 'Reference',
        typeId: 'category',
        key: 'women',
      }),
      orderHint: '0.4',
      metaTitle: undefined,
      metaDescription: undefined,
      metaKeywords: undefined,
      assets: [],
      custom: undefined,
      __typename: 'CategoryDraft',
    });
  });
});
