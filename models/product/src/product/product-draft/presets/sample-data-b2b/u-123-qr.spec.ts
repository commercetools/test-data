import type { TProductDraft } from '../../../types';
import u123Qr from './u-123-qr';

describe(`with u123Qr preset`, () => {
  it(`should return a u123Qr preset`, () => {
    const u123QrPreset = u123Qr().build<TProductDraft>();
    expect(u123QrPreset).toMatchInlineSnapshot();
  });

  it(`should return a u123Qr preset when built for graphql`, () => {
    const u123QrPresetGraphql = u123Qr().buildGraphql<TProductDraft>();
    expect(u123QrPresetGraphql).toMatchInlineSnapshot();
  });
});
