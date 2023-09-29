import type { TProductDraft } from '../../../types';
import walnutCounterStool from './walnut-counter-stool';

describe(`with walnutCounterStool preset`, () => {
  it(`should return a walnutCounterStool preset`, () => {
    const walnutCounterStoolPreset =
      walnutCounterStool().build<TProductDraft>();
    expect(walnutCounterStoolPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a walnutCounterStool preset when built for graphql`, () => {
    const walnutCounterStoolPresetGraphql =
      walnutCounterStool().buildGraphql<TProductDraft>();
    expect(walnutCounterStoolPresetGraphql).toMatchInlineSnapshot(``);
  });
});
