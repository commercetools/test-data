import type { TProductDraft } from '../../../types';
import gg123Qr from './gg-123-qr';

describe(`with gg123Qr preset`, () => {
  it(`should return a gg123Qr preset`, () => {
    const gg123QrPreset = gg123Qr().build<TProductDraft>();
    expect(gg123QrPreset).toMatchInlineSnapshot();
  });

  it(`should return a gg123Qr preset when built for graphql`, () => {
    const gg123QrPresetGraphql = gg123Qr().buildGraphql<TProductDraft>();
    expect(gg123QrPresetGraphql).toMatchInlineSnapshot();
  });
});
