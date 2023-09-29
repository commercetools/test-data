import type { TProductDraft } from '../../../types';
import tanQueenBed from './tan-queen-bed';

describe(`with tanQueenBed preset`, () => {
  it(`should return a tanQueenBed preset`, () => {
    const tanQueenBedPreset = tanQueenBed().build<TProductDraft>();
    expect(tanQueenBedPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a tanQueenBed preset when built for graphql`, () => {
    const tanQueenBedPresetGraphql =
      tanQueenBed().buildGraphql<TProductDraft>();
    expect(tanQueenBedPresetGraphql).toMatchInlineSnapshot(``);
  });
});
