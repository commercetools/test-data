import type { TProductDraft } from '../../../types';
import oilFilter from './oil-filter';

describe(`with oilFilter preset`, () => {
  it(`should return a oilFilter preset`, () => {
    const oilFilterPreset = oilFilter().build<TProductDraft>();
    expect(oilFilterPreset).toMatchInlineSnapshot();
  });

  it(`should return a oilFilter preset when built for graphql`, () => {
    const oilFilterPresetGraphql = oilFilter().buildGraphql<TProductDraft>();
    expect(oilFilterPresetGraphql).toMatchInlineSnapshot();
  });
});
