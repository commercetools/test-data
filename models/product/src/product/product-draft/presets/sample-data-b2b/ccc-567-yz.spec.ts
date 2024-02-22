import type { TProductDraft } from '../../../types';
import ccc567Yz from './ccc-567-yz';

describe(`with ccc567Yz preset`, () => {
  it(`should return a ccc567Yz preset`, () => {
    const ccc567YzPreset = ccc567Yz().build<TProductDraft>();
    expect(ccc567YzPreset).toMatchInlineSnapshot();
  });

  it(`should return a ccc567Yz preset when built for graphql`, () => {
    const ccc567YzPresetGraphql = ccc567Yz().buildGraphql<TProductDraft>();
    expect(ccc567YzPresetGraphql).toMatchInlineSnapshot();
  });
});
