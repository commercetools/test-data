import type { TProductDraft } from '../../../types';
import walnutCabinet from './walnut-cabinet';
import productDraft from './walnut-cabinet.spec.json';

describe(`with walnutCabinet preset`, () => {
  it(`should return a walnutCabinet preset`, () => {
    const walnutCabinetPreset = walnutCabinet().build<TProductDraft>();
    expect(walnutCabinetPreset).toMatchObject(productDraft);
  });
});
