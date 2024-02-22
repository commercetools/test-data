import type { TProductDraft } from '../../../types';
import kk567Yz from './kk-567-yz';

describe(`with kk567Yz preset`, () => {
  it(`should return a kk567Yz preset`, () => {
    const kk567YzPreset = kk567Yz().build<TProductDraft>();
    expect(kk567YzPreset).toMatchInlineSnapshot();
  });

  it(`should return a kk567Yz preset when built for graphql`, () => {
    const kk567YzPresetGraphql = kk567Yz().buildGraphql<TProductDraft>();
    expect(kk567YzPresetGraphql).toMatchInlineSnapshot();
  });
});
