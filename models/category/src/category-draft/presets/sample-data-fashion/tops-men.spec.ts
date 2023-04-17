import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import topsMen from './tops-men';

describe(`with topsMen preset`, () => {
  it('should provide a topsMen preset', () => {
    const topsMenCategoryDraft = topsMen().build<TCategoryDraft>();
    expect(topsMenCategoryDraft).toEqual({
      key: 'tops-men',
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
        'en-US': 'tops_men',
      }),
      parent: expect.objectContaining({
        typeId: 'category',
        key: 'men',
      }),
      orderHint: '0.6',
      metaTitle: undefined,
      metaDescription: undefined,
      metaKeywords: undefined,
      assets: [],
      custom: undefined,
    });
  });

  it('should provide a topsMen preset when built for graphql', () => {
    const topsMenCategoryDraftGraphql =
      topsMen().buildGraphql<TCategoryDraftGraphql>();
    expect(topsMenCategoryDraftGraphql).toEqual({
      key: 'tops-men',
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
          value: 'tops_men',
          __typename: 'LocalizedString',
        }),
      ]),
      parent: expect.objectContaining({
        __typename: 'Reference',
        typeId: 'category',
        key: 'men',
      }),
      orderHint: '0.6',
      metaTitle: undefined,
      metaDescription: undefined,
      metaKeywords: undefined,
      assets: [],
      custom: undefined,
      __typename: 'CategoryDraft',
    });
  });
});
