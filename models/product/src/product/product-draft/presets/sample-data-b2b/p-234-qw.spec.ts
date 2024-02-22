import type { TProductDraft } from '../../../types';
import p234Qw from './p-234-qw';

describe(`with p234Qw preset`, () => {
  it(`should return a p234Qw preset`, () => {
    const p234QwPreset = p234Qw().build<TProductDraft>();
    expect(p234QwPreset).toMatchInlineSnapshot();
  });

  it(`should return a p234Qw preset when built for graphql`, () => {
    const p234QwPresetGraphql = p234Qw().buildGraphql<TProductDraft>();
    expect(p234QwPresetGraphql).toMatchInlineSnapshot();
  });
});
