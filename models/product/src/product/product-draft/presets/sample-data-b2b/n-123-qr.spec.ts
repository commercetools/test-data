import type { TProductDraft } from '../../../types';
import n123Qr from './n-123-qr';

describe(`with n123Qr preset`, () => {
  it(`should return a n123Qr preset`, () => {
    const n123QrPreset = n123Qr().build<TProductDraft>();
    expect(n123QrPreset).toMatchInlineSnapshot();
  });

  it(`should return a n123Qr preset when built for graphql`, () => {
    const n123QrPresetGraphql = n123Qr().buildGraphql<TProductDraft>();
    expect(n123QrPresetGraphql).toMatchInlineSnapshot();
  });
});
