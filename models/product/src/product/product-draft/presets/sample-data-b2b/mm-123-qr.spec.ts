import type { TProductDraft } from '../../../types';
import mm123Qr from './mm-123-qr';

describe(`with mm123Qr preset`, () => {
  it(`should return a mm123Qr preset`, () => {
    const mm123QrPreset = mm123Qr().build<TProductDraft>();
    expect(mm123QrPreset).toMatchInlineSnapshot();
  });

  it(`should return a mm123Qr preset when built for graphql`, () => {
    const mm123QrPresetGraphql = mm123Qr().buildGraphql<TProductDraft>();
    expect(mm123QrPresetGraphql).toMatchInlineSnapshot();
  });
});
