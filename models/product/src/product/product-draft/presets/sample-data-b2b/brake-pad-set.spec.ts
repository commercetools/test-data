import type { TProductDraft } from '../../../types';
import brakePadSet from './brake-pad-set';

describe(`with brakePadSet preset`, () => {
  it(`should return a brakePadSet preset`, () => {
    const brakePadSetPreset = brakePadSet().build<TProductDraft>();
    expect(brakePadSetPreset).toMatchInlineSnapshot();
  });

  it(`should return a brakePadSet preset when built for graphql`, () => {
    const brakePadSetPresetGraphql =
      brakePadSet().buildGraphql<TProductDraft>();
    expect(brakePadSetPresetGraphql).toMatchInlineSnapshot();
  });
});
