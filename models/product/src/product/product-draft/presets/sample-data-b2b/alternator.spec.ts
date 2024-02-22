import type { TProductDraft } from '../../../types';
import alternator from './alternator';

describe(`with alternator preset`, () => {
  it(`should return a alternator preset`, () => {
    const alternatorPreset = alternator().build<TProductDraft>();
    expect(alternatorPreset).toMatchInlineSnapshot();
  });

  it(`should return a alternator preset when built for graphql`, () => {
    const alternatorPresetGraphql = alternator().buildGraphql<TProductDraft>();
    expect(alternatorPresetGraphql).toMatchInlineSnapshot();
  });
});
