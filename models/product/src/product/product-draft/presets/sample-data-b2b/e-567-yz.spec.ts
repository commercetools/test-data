import type { TProductDraft } from '../../../types';
import e567Yz from './e-567-yz';

describe(`with e567Yz preset`, () => {
  it(`should return a e567Yz preset`, () => {
    const e567YzPreset = e567Yz().build<TProductDraft>();
    expect(e567YzPreset).toMatchInlineSnapshot();
  });

  it(`should return a e567Yz preset when built for graphql`, () => {
    const e567YzPresetGraphql = e567Yz().buildGraphql<TProductDraft>();
    expect(e567YzPresetGraphql).toMatchInlineSnapshot();
  });
});
