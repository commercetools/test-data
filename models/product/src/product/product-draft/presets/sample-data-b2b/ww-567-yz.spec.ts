import type { TProductDraft } from '../../../types';
import ww567Yz from './ww-567-yz';

describe(`with ww567Yz preset`, () => {
  it(`should return a ww567Yz preset`, () => {
    const ww567YzPreset = ww567Yz().build<TProductDraft>();
    expect(ww567YzPreset).toMatchInlineSnapshot();
  });

  it(`should return a ww567Yz preset when built for graphql`, () => {
    const ww567YzPresetGraphql = ww567Yz().buildGraphql<TProductDraft>();
    expect(ww567YzPresetGraphql).toMatchInlineSnapshot();
  });
});
