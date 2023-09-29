import type { TProductDraft } from '../../../types';
import naturaRug from './natura-rug';

describe(`with naturaRug preset`, () => {
  it(`should return a naturaRug preset`, () => {
    const naturaRugPreset = naturaRug().build<TProductDraft>();
    expect(naturaRugPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a naturaRug preset when built for graphql`, () => {
    const naturaRugPresetGraphql = naturaRug().buildGraphql<TProductDraft>();
    expect(naturaRugPresetGraphql).toMatchInlineSnapshot(``);
  });
});
