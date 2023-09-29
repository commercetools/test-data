import type { TProductDraft } from '../../../types';
import turnerVelvetArmchair from './turner-velvet-armchair';

describe(`with turnerVelvetArmchair preset`, () => {
  it(`should return a turnerVelvetArmchair preset`, () => {
    const turnerVelvetArmchairPreset =
      turnerVelvetArmchair().build<TProductDraft>();
    expect(turnerVelvetArmchairPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a turnerVelvetArmchair preset when built for graphql`, () => {
    const turnerVelvetArmchairPresetGraphql =
      turnerVelvetArmchair().buildGraphql<TProductDraft>();
    expect(turnerVelvetArmchairPresetGraphql).toMatchInlineSnapshot(``);
  });
});
