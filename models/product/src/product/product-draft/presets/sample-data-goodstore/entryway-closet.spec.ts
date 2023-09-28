import type { TProductDraft } from '../../../types';
import entrywayCloset from './entryway-closet';
import productDraft from './entryway-closet.spec.json';

describe(`with entrywayCloset preset`, () => {
  it(`should return a entrywayCloset preset`, () => {
    const entrywayClosetPreset = entrywayCloset().build<TProductDraft>();
    expect(entrywayClosetPreset).toMatchObject(productDraft.rest);
  });
});
