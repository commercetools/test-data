import type { TProductDraft } from '../../../types';
import nalaTwoSeaterSofa from './nala-two-seater-sofa';

describe(`with nalaTwoSeaterSofa preset`, () => {
  it(`should return a nalaTwoSeaterSofa preset`, () => {
    const nalaTwoSeaterSofaPreset = nalaTwoSeaterSofa().build<TProductDraft>();
    expect(nalaTwoSeaterSofaPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a nalaTwoSeaterSofa preset when built for graphql`, () => {
    const nalaTwoSeaterSofaPresetGraphql =
      nalaTwoSeaterSofa().buildGraphql<TProductDraft>();
    expect(nalaTwoSeaterSofaPresetGraphql).toMatchInlineSnapshot(``);
  });
});
