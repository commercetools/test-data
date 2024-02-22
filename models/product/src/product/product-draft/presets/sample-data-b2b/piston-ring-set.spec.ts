import type { TProductDraft } from '../../../types';
import pistonRingSet from './piston-ring-set';

describe(`with pistonRingSet preset`, () => {
  it(`should return a pistonRingSet preset`, () => {
    const pistonRingSetPreset = pistonRingSet().build<TProductDraft>();
    expect(pistonRingSetPreset).toMatchInlineSnapshot();
  });

  it(`should return a pistonRingSet preset when built for graphql`, () => {
    const pistonRingSetPresetGraphql =
      pistonRingSet().buildGraphql<TProductDraft>();
    expect(pistonRingSetPresetGraphql).toMatchInlineSnapshot();
  });
});
