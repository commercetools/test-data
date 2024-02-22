import type { TProductDraft } from '../../../types';
import starterMotor from './starter-motor';

describe(`with starterMotor preset`, () => {
  it(`should return a starterMotor preset`, () => {
    const starterMotorPreset = starterMotor().build<TProductDraft>();
    expect(starterMotorPreset).toMatchInlineSnapshot();
  });

  it(`should return a starterMotor preset when built for graphql`, () => {
    const starterMotorPresetGraphql =
      starterMotor().buildGraphql<TProductDraft>();
    expect(starterMotorPresetGraphql).toMatchInlineSnapshot();
  });
});
