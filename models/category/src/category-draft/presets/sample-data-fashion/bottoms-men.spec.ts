import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bottomsMen from './bottoms-men';

describe(`with bottomsMen preset`, () => {
  it('should provide a bottomsMen preset', () => {
    const bottomsMenCategoryDraft = bottomsMen().build<TCategoryDraft>();
    expect(bottomsMenCategoryDraft).toEqual({
      key: 'bottoms-men',
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
        'en-US': 'bottoms_men',
      }),
      parent: expect.objectContaining({
        typeId: 'category',
        key: 'men',
      }),
      orderHint: '0.4',
      metaTitle: undefined,
      metaDescription: undefined,
      metaKeywords: undefined,
      assets: [],
      custom: undefined,
    });
  });

  it('should provide a bottomsMen preset when built for graphql', () => {
    const bottomsMenCategoryDraftGraphql =
      bottomsMen().buildGraphql<TCategoryDraftGraphql>();
    expect(bottomsMenCategoryDraftGraphql).toEqual({
      key: 'bottoms-men',
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
          value: 'bottoms_men',
          __typename: 'LocalizedString',
        }),
      ]),
      parent: expect.objectContaining({
        __typename: 'Reference',
        typeId: 'category',
        key: 'men',
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
