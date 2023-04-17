import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import topsWomen from './tops-women';

describe(`with topsWomen preset`, () => {
  it('should provide a topsWomen preset', () => {
    const topsWomenCategoryDraft = topsWomen().build<TCategoryDraft>();
    expect(topsWomenCategoryDraft).toEqual({
      key: 'tops-women',
      externalId: undefined,
      name: expect.objectContaining({
        de: undefined,
        en: undefined,
        fr: undefined,
        'en-US': 'Tops',
      }),
      slug: expect.objectContaining({
        de: undefined,
        en: undefined,
        fr: undefined,
        'en-US': 'tops_women',
      }),
      parent: expect.objectContaining({
        typeId: 'category',
        key: 'women',
      }),
      orderHint: '0.3',
      metaTitle: undefined,
      metaDescription: undefined,
      metaKeywords: undefined,
      assets: [],
      custom: undefined,
    });
  });

  it('should provide a topsWomen preset when built for graphql', () => {
    const topsWomenCategoryDraftGraphql =
      topsWomen().buildGraphql<TCategoryDraftGraphql>();
    expect(topsWomenCategoryDraftGraphql).toEqual({
      key: 'tops-women',
      externalId: undefined,
      name: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en-US',
          value: 'Tops',
          __typename: 'LocalizedString',
        }),
      ]),
      slug: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en-US',
          value: 'tops_women',
          __typename: 'LocalizedString',
        }),
      ]),
      parent: expect.objectContaining({
        __typename: 'Reference',
        typeId: 'category',
        key: 'women',
      }),
      orderHint: '0.3',
      metaTitle: undefined,
      metaDescription: undefined,
      metaKeywords: undefined,
      assets: [],
      custom: undefined,
      __typename: 'CategoryDraft',
    });
  });
});
