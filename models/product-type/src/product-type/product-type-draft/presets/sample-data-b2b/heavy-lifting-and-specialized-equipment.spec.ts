import type { TProductTypeDraft } from '../../../types';
import heavyLiftingAndSpecializedEquipment from './heavy-lifting-and-specialized-equipment';

describe(`with heavyLiftingAndSpecializedEquipment preset`, () => {
  it(`should return a heavyLiftingAndSpecializedEquipment preset`, () => {
    const heavyLiftingAndSpecializedEquipmentPreset =
      heavyLiftingAndSpecializedEquipment().build<TProductTypeDraft>();
    expect(heavyLiftingAndSpecializedEquipmentPreset).toMatchInlineSnapshot();
  });

  it(`should return a heavyLiftingAndSpecializedEquipment preset when built for graphql`, () => {
    const heavyLiftingAndSpecializedEquipmentPresetGraphql =
      heavyLiftingAndSpecializedEquipment().buildGraphql<TProductTypeDraft>();
    expect(
      heavyLiftingAndSpecializedEquipmentPresetGraphql
    ).toMatchInlineSnapshot();
  });
});
