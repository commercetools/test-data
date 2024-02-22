import type { TProductDraft } from '../../../types';
import ledWorkLight from './led-work-light';

describe(`with ledWorkLight preset`, () => {
  it(`should return a ledWorkLight preset`, () => {
    const ledWorkLightPreset = ledWorkLight().build<TProductDraft>();
    expect(ledWorkLightPreset).toMatchInlineSnapshot();
  });

  it(`should return a ledWorkLight preset when built for graphql`, () => {
    const ledWorkLightPresetGraphql =
      ledWorkLight().buildGraphql<TProductDraft>();
    expect(ledWorkLightPresetGraphql).toMatchInlineSnapshot();
  });
});
