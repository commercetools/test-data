import type { TProductDraft } from '../../../types';
import iii567Yz from './iii-567-yz';

describe(`with iii567Yz preset`, () => {
  it(`should return a iii567Yz preset`, () => {
    const iii567YzPreset = iii567Yz().build<TProductDraft>();
    expect(iii567YzPreset).toMatchInlineSnapshot();
  });

  it(`should return a iii567Yz preset when built for graphql`, () => {
    const iii567YzPresetGraphql = iii567Yz().buildGraphql<TProductDraft>();
    expect(iii567YzPresetGraphql).toMatchInlineSnapshot();
  });
});
