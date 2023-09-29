import type { TProductDraft } from '../../../types';
import meadowRug from './meadow-rug';

describe(`with meadowRug preset`, () => {
  it(`should return a meadowRug preset`, () => {
    const meadowRugPreset = meadowRug().build<TProductDraft>();
    expect(meadowRugPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a meadowRug preset when built for graphql`, () => {
    const meadowRugPresetGraphql = meadowRug().buildGraphql<TProductDraft>();
    expect(meadowRugPresetGraphql).toMatchInlineSnapshot(``);
  });
});
