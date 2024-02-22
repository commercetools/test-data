import type { TProductDraft } from '../../../types';
import eee123Qr from './eee-123-qr';

describe(`with eee123Qr preset`, () => {
  it(`should return a eee123Qr preset`, () => {
    const eee123QrPreset = eee123Qr().build<TProductDraft>();
    expect(eee123QrPreset).toMatchInlineSnapshot();
  });

  it(`should return a eee123Qr preset when built for graphql`, () => {
    const eee123QrPresetGraphql = eee123Qr().buildGraphql<TProductDraft>();
    expect(eee123QrPresetGraphql).toMatchInlineSnapshot();
  });
});
