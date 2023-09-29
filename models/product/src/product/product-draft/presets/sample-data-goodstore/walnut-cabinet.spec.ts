import type { TProductDraft } from '../../../types';
import walnutCabinet from './walnut-cabinet';

describe(`with walnutCabinet preset`, () => {
  it(`should return a walnutCabinet preset`, () => {
    const walnutCabinetPreset = walnutCabinet().build<TProductDraft>();
    expect(walnutCabinetPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a walnutCabinet preset when built for graphql`, () => {
    const walnutCabinetPresetGraphql =
      walnutCabinet().buildGraphql<TProductDraft>();
    expect(walnutCabinetPresetGraphql).toMatchInlineSnapshot(``);
  });
});
