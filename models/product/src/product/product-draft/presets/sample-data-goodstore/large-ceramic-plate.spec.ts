import type { TProductDraft } from '../../../types';
import largeCeramicPlate from './large-ceramic-plate';
import productDraft from './large-ceramic-plate.spec.json';

describe(`with largeCeramicPlate preset`, () => {
  it(`should return a largeCeramicPlate preset`, () => {
    const largeCeramicPlatePreset = largeCeramicPlate().build<TProductDraft>();
    expect(largeCeramicPlatePreset).toMatchObject(productDraft.rest);
  });

  it(`should return a largeCeramicPlate preset when built for graphql`, () => {
    const largeCeramicPlatePresetGraphql =
      largeCeramicPlate().buildGraphql<TProductDraft>();
    expect(largeCeramicPlatePresetGraphql).toMatchObject(productDraft.graphql);
  });
});
