import type { TProductDraft } from '../../../types';
import yy123Qr from './yy-123-qr';

describe(`with yy123Qr preset`, () => {
  it(`should return a yy123Qr preset`, () => {
    const yy123QrPreset = yy123Qr().build<TProductDraft>();
    expect(yy123QrPreset).toMatchInlineSnapshot();
  });

  it(`should return a yy123Qr preset when built for graphql`, () => {
    const yy123QrPresetGraphql = yy123Qr().buildGraphql<TProductDraft>();
    expect(yy123QrPresetGraphql).toMatchInlineSnapshot();
  });
});
