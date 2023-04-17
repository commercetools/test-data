import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bottomsKids from './bottoms-kids';

describe(`with bottomsKids preset`, () => {
  it('should provide a bottomsKids preset', () => {
    const bottomsKidsCategoryDraft = bottomsKids().build<TCategoryDraft>();
    console.log(bottomsKidsCategoryDraft);
    expect(bottomsKidsCategoryDraft).toEqual({
      key: 'bottoms_kids',
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
        'en-US': 'bottoms_kids',
      }),
      description: expect.objectContaining({
        de: undefined,
        en: undefined,
        fr: undefined,
        'en-US': 'Bottoms',
      }),
      parent: expect.objectContaining({
        typeId: 'category',
        key: 'clothing-kids',
      }),
      orderHint: '0.3',
      metaTitle: undefined,
      metaDescription: undefined,
      metaKeywords: undefined,
      assets: [],
      custom: undefined,
    });
  });

  it('should provide a bottomsKids preset when built for graphql', () => {
    const bottomsKidsCategoryDraftGraphql =
      bottomsKids().buildGraphql<TCategoryDraftGraphql>();
    expect(bottomsKidsCategoryDraftGraphql).toEqual({
      key: 'bottoms_kids',
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
          value: 'bottoms_kids',
          __typename: 'LocalizedString',
        }),
      ]),
      description: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en-US',
          value: 'Bottoms',
          __typename: 'LocalizedString',
        }),
      ]),
      parent: expect.objectContaining({
        __typename: 'Reference',
        typeId: 'category',
        key: 'clothing-kids',
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
