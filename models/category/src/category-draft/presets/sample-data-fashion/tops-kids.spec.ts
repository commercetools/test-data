import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import topsKids from './tops-kids';

describe(`with topsKids preset`, () => {
  it('should provide a topsKids preset', () => {
    const topsKidsCategoryDraft = topsKids().build<TCategoryDraft>();
    expect(topsKidsCategoryDraft).toEqual({
      key: 'tops-kids',
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
        'en-US': 'tops_kids',
      }),
      description: expect.objectContaining({
        de: undefined,
        en: undefined,
        fr: undefined,
        'en-US': 'Tops',
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

  it('should provide a topsKids preset when built for graphql', () => {
    const topsKidsCategoryDraftGraphql =
      topsKids().buildGraphql<TCategoryDraftGraphql>();
    expect(topsKidsCategoryDraftGraphql).toEqual({
      key: 'tops-kids',
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
          value: 'tops_kids',
          __typename: 'LocalizedString',
        }),
      ]),
      description: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en-US',
          value: 'Tops',
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
