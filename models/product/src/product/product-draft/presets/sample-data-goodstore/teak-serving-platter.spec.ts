import type { TProductDraft } from '../../../types';
import teakServingPlatter from './teak-serving-platter';
import productDraft from './teak-serving-platter.spec.json';

describe(`with teakServingPlatter preset`, () => {
  it(`should return a teakServingPlatter preset`, () => {
    const teakServingPlatterPreset =
      teakServingPlatter().build<TProductDraft>();
    expect(teakServingPlatterPreset).toMatchObject(productDraft.rest);
  });
});
