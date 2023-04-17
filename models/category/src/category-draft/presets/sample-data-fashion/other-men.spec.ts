import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import otherMen from './other-men';

describe(`with otherMen preset`, () => {
  it('should provide an otherMen preset', () => {
    const otherMenCategoryDraft = otherMen().build<TCategoryDraft>();
    expect(otherMenCategoryDraft).toEqual({
      key: 'other-men',
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
        'en-US': 'other_men',
      }),
      parent: expect.objectContaining({
        typeId: 'category',
        key: 'men',
      }),
      orderHint: '0.3',
      metaTitle: undefined,
      metaDescription: undefined,
      metaKeywords: undefined,
      assets: [],
      custom: undefined,
    });
  });

  it('should provide an otherMen preset when built for graphql', () => {
    const otherMenCategoryDraftGraphql =
      otherMen().buildGraphql<TCategoryDraftGraphql>();
    expect(otherMenCategoryDraftGraphql).toEqual({
      key: 'other-men',
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
          value: 'other_men',
          __typename: 'LocalizedString',
        }),
      ]),
      parent: expect.objectContaining({
        __typename: 'Reference',
        typeId: 'category',
        key: 'men',
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
