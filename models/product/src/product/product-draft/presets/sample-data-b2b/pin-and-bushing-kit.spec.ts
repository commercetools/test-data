import type { TProductDraft } from '../../../types';
import pinAndBushingKit from './pin-and-bushing-kit';

describe(`with pinAndBushingKit preset`, () => {
  it(`should return a pinAndBushingKit preset`, () => {
    const pinAndBushingKitPreset = pinAndBushingKit().build<TProductDraft>();
    expect(pinAndBushingKitPreset).toMatchInlineSnapshot();
  });

  it(`should return a pinAndBushingKit preset when built for graphql`, () => {
    const pinAndBushingKitPresetGraphql =
      pinAndBushingKit().buildGraphql<TProductDraft>();
    expect(pinAndBushingKitPresetGraphql).toMatchInlineSnapshot();
  });
});
