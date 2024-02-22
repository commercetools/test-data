import type { TProductDraft } from '../../../types';
import qq567Yz from './qq-567-yz';

describe(`with qq567Yz preset`, () => {
  it(`should return a qq567Yz preset`, () => {
    const qq567YzPreset = qq567Yz().build<TProductDraft>();
    expect(qq567YzPreset).toMatchInlineSnapshot();
  });

  it(`should return a qq567Yz preset when built for graphql`, () => {
    const qq567YzPresetGraphql = qq567Yz().buildGraphql<TProductDraft>();
    expect(qq567YzPresetGraphql).toMatchInlineSnapshot();
  });
});
