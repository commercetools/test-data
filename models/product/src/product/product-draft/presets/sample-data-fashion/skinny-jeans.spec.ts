import type { TProductDraft } from '../../../types';
import skinnyJeans from './skinny-jeans';

describe(`with skinnyJeans preset`, () => {
  it('should return a sample skinnyJeans product preset', () => {
    const skinnyJeansPreset = skinnyJeans().build<TProductDraft>();
    expect(skinnyJeansPreset).toMatchInlineSnapshot();
  });

  it('should return a sample skinnyJeans product preset when built for graphql', () => {
    const skinnyJeansPresetGraphql =
      skinnyJeans().buildGraphql<TProductDraft>();
    expect(skinnyJeansPresetGraphql).toMatchInlineSnapshot();
  });
});
