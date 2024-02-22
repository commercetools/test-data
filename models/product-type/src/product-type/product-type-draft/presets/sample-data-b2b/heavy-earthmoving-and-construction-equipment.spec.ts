import type { TProductTypeDraft } from '../../../types';
import heavyEarthmovingAndConstructionEquipment from './heavy-earthmoving-and-construction-equipment';

describe(`with heavyEarthmovingAndConstructionEquipment preset`, () => {
  it(`should return a heavyEarthmovingAndConstructionEquipment preset`, () => {
    const heavyEarthmovingAndConstructionEquipmentPreset =
      heavyEarthmovingAndConstructionEquipment().build<TProductTypeDraft>();
    expect(
      heavyEarthmovingAndConstructionEquipmentPreset
    ).toMatchInlineSnapshot();
  });

  it(`should return a heavyEarthmovingAndConstructionEquipment preset when built for graphql`, () => {
    const heavyEarthmovingAndConstructionEquipmentPresetGraphql =
      heavyEarthmovingAndConstructionEquipment().buildGraphql<TProductTypeDraft>();
    expect(
      heavyEarthmovingAndConstructionEquipmentPresetGraphql
    ).toMatchInlineSnapshot();
  });
});
