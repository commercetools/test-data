import type { TProductDraft } from '../../../types';
import ss123Qr from './ss-123-qr';

describe(`with ss123Qr preset`, () => {
  it(`should return a ss123Qr preset`, () => {
    const ss123QrPreset = ss123Qr().build<TProductDraft>();
    expect(ss123QrPreset).toMatchInlineSnapshot();
  });

  it(`should return a ss123Qr preset when built for graphql`, () => {
    const ss123QrPresetGraphql = ss123Qr().buildGraphql<TProductDraft>();
    expect(ss123QrPresetGraphql).toMatchInlineSnapshot();
  });
});
