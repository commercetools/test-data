import type { TProductDraft } from '../../../types';
import aa123Qr from './aa-123-qr';

describe(`with aa123Qr preset`, () => {
  it(`should return a aa123Qr preset`, () => {
    const aa123QrPreset = aa123Qr().build<TProductDraft>();
    expect(aa123QrPreset).toMatchInlineSnapshot();
  });

  it(`should return a aa123Qr preset when built for graphql`, () => {
    const aa123QrPresetGraphql = aa123Qr().buildGraphql<TProductDraft>();
    expect(aa123QrPresetGraphql).toMatchInlineSnapshot();
  });
});
