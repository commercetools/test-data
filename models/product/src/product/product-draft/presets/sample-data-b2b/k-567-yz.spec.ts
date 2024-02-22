import type { TProductDraft } from '../../../types';
import k567Yz from './k-567-yz';

describe(`with k567Yz preset`, () => {
  it(`should return a k567Yz preset`, () => {
    const k567YzPreset = k567Yz().build<TProductDraft>();
    expect(k567YzPreset).toMatchInlineSnapshot();
  });

  it(`should return a k567Yz preset when built for graphql`, () => {
    const k567YzPresetGraphql = k567Yz().buildGraphql<TProductDraft>();
    expect(k567YzPresetGraphql).toMatchInlineSnapshot();
  });
});
