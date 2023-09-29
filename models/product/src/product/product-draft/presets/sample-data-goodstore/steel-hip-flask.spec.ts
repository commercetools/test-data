import type { TProductDraft } from '../../../types';
import steelHipFlask from './steel-hip-flask';

describe(`with steelHipFlask preset`, () => {
  it(`should return a steelHipFlask preset`, () => {
    const steelHipFlaskPreset = steelHipFlask().build<TProductDraft>();
    expect(steelHipFlaskPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a steelHipFlask preset when built for graphql`, () => {
    const steelHipFlaskPresetGraphql =
      steelHipFlask().buildGraphql<TProductDraft>();
    expect(steelHipFlaskPresetGraphql).toMatchInlineSnapshot(``);
  });
});
