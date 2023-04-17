import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import otherKids from './other-kids';

describe(`with otherKids preset`, () => {
  it('should provide an otherKids preset', () => {
    const otherKidsCategoryDraft = otherKids().build<TCategoryDraft>();
    expect(otherKidsCategoryDraft).toEqual({
      key: 'other-kids',
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
        'en-US': 'other_kids',
      }),
      parent: expect.objectContaining({
        typeId: 'category',
        key: 'kids',
      }),
      orderHint: '0.25',
      metaTitle: undefined,
      metaDescription: undefined,
      metaKeywords: undefined,
      assets: [],
      custom: undefined,
    });
  });

  it('should provide an otherKids preset when built for graphql', () => {
    const otherKidsCategoryDraftGraphql =
      otherKids().buildGraphql<TCategoryDraftGraphql>();
    expect(otherKidsCategoryDraftGraphql).toEqual({
      key: 'other-kids',
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
          value: 'other_kids',
          __typename: 'LocalizedString',
        }),
      ]),
      parent: expect.objectContaining({
        __typename: 'Reference',
        typeId: 'category',
        key: 'kids',
      }),
      orderHint: '0.25',
      metaTitle: undefined,
      metaDescription: undefined,
      metaKeywords: undefined,
      assets: [],
      custom: undefined,
      __typename: 'CategoryDraft',
    });
  });
});
