import type { TProductDraft } from '../../../types';
import hydraulicHose from './hydraulic-hose';

describe(`with hydraulicHose preset`, () => {
  it(`should return a hydraulicHose preset`, () => {
    const hydraulicHosePreset = hydraulicHose().build<TProductDraft>();
    expect(hydraulicHosePreset).toMatchInlineSnapshot();
  });

  it(`should return a hydraulicHose preset when built for graphql`, () => {
    const hydraulicHosePresetGraphql =
      hydraulicHose().buildGraphql<TProductDraft>();
    expect(hydraulicHosePresetGraphql).toMatchInlineSnapshot();
  });
});
