import type { TProductDraft } from '../../../types';
import y567Yz from './y-567-yz';

describe(`with y567Yz preset`, () => {
  it(`should return a y567Yz preset`, () => {
    const y567YzPreset = y567Yz().build<TProductDraft>();
    expect(y567YzPreset).toMatchInlineSnapshot();
  });

  it(`should return a y567Yz preset when built for graphql`, () => {
    const y567YzPresetGraphql = y567Yz().buildGraphql<TProductDraft>();
    expect(y567YzPresetGraphql).toMatchInlineSnapshot();
  });
});
