import type { TProductDraft } from '../../../types';
import b456St from './b-456-st';

describe(`with b456St preset`, () => {
  it(`should return a b456St preset`, () => {
    const b456StPreset = b456St().build<TProductDraft>();
    expect(b456StPreset).toMatchInlineSnapshot();
  });

  it(`should return a b456St preset when built for graphql`, () => {
    const b456StPresetGraphql = b456St().buildGraphql<TProductDraft>();
    expect(b456StPresetGraphql).toMatchInlineSnapshot();
  });
});
