import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import clothingKids from './clothing-kids';

describe(`with clothingKids preset`, () => {
  it('should provide a clothingKids preset', () => {
    const clothingKidsCategoryDraft = clothingKids().build<TCategoryDraft>();
    expect(clothingKidsCategoryDraft).toEqual({
      key: 'clothing-kids',
      externalId: undefined,
      name: expect.objectContaining({
        de: undefined,
        en: undefined,
        fr: undefined,
        'en-US': 'Clothing',
      }),
      slug: expect.objectContaining({
        de: undefined,
        en: undefined,
        fr: undefined,
        'en-US': 'clothing_kids',
      }),
      parent: expect.objectContaining({
        typeId: 'category',
        key: 'kids',
      }),
      orderHint: '0.8',
      metaTitle: undefined,
      metaDescription: undefined,
      metaKeywords: undefined,
      assets: [],
      custom: undefined,
    });
  });

  it('should provide a clothingKids preset when built for graphql', () => {
    const clothingKidsCategoryDraftGraphql =
      clothingKids().buildGraphql<TCategoryDraftGraphql>();
    expect(clothingKidsCategoryDraftGraphql).toEqual({
      key: 'clothing-kids',
      externalId: undefined,
      name: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en-US',
          value: 'Clothing',
          __typename: 'LocalizedString',
        }),
      ]),
      slug: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en-US',
          value: 'clothing_kids',
          __typename: 'LocalizedString',
        }),
      ]),
      parent: expect.objectContaining({
        __typename: 'Reference',
        typeId: 'category',
        key: 'kids',
      }),
      orderHint: '0.8',
      metaTitle: undefined,
      metaDescription: undefined,
      metaKeywords: undefined,
      assets: [],
      custom: undefined,
      __typename: 'CategoryDraft',
    });
  });
});
