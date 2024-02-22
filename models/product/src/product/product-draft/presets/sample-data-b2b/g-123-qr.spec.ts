import type { TProductDraft } from '../../../types';
import g123Qr from './g-123-qr';

describe(`with g123Qr preset`, () => {
  it(`should return a g123Qr preset`, () => {
    const g123QrPreset = g123Qr().build<TProductDraft>();
    expect(g123QrPreset).toMatchInlineSnapshot();
  });

  it(`should return a g123Qr preset when built for graphql`, () => {
    const g123QrPresetGraphql = g123Qr().buildGraphql<TProductDraft>();
    expect(g123QrPresetGraphql).toMatchInlineSnapshot();
  });
});
