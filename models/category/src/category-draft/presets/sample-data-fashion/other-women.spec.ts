import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import otherWomen from './other-women';

describe(`with otherWomen preset`, () => {
  it('should provide an otherWomen preset', () => {
    const otherWomenCategoryDraft = otherWomen().build<TCategoryDraft>();
    expect(otherWomenCategoryDraft).toEqual({
      key: 'other-women',
      externalId: undefined,
      name: expect.objectContaining({
        de: undefined,
        en: undefined,
        fr: undefined,
        'en-US': 'Other',
      }),
      slug: expect.objectContaining({
        de: undefined,
        en: undefined,
        fr: undefined,
        'en-US': 'other_women',
      }),
      parent: expect.objectContaining({
        typeId: 'category',
        key: 'women',
      }),
      orderHint: '0.5',
      metaTitle: undefined,
      metaDescription: undefined,
      metaKeywords: undefined,
      assets: [],
      custom: undefined,
    });
  });

  it('should provide an otherWomen preset when built for graphql', () => {
    const otherWomenCategoryDraftGraphql =
      otherWomen().buildGraphql<TCategoryDraftGraphql>();
    expect(otherWomenCategoryDraftGraphql).toEqual({
      key: 'other-women',
      externalId: undefined,
      name: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en-US',
          value: 'Other',
          __typename: 'LocalizedString',
        }),
      ]),
      slug: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en-US',
          value: 'other_women',
          __typename: 'LocalizedString',
        }),
      ]),
      parent: expect.objectContaining({
        __typename: 'Reference',
        typeId: 'category',
        key: 'women',
      }),
      orderHint: '0.5',
      metaTitle: undefined,
      metaDescription: undefined,
      metaKeywords: undefined,
      assets: [],
      custom: undefined,
      __typename: 'CategoryDraft',
    });
  });
});
