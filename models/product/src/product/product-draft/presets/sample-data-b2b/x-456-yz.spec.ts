import type { TProductDraft } from '../../../types';
import x456Yz from './x-456-yz';

describe(`with x456Yz preset`, () => {
  it(`should return a x456Yz preset`, () => {
    const x456YzPreset = x456Yz().build<TProductDraft>();
    expect(x456YzPreset).toMatchInlineSnapshot();
  });

  it(`should return a x456Yz preset when built for graphql`, () => {
    const x456YzPresetGraphql = x456Yz().buildGraphql<TProductDraft>();
    expect(x456YzPresetGraphql).toMatchInlineSnapshot();
  });
});
