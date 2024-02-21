import type { TAddressDraft } from '../../../types';
import libertyCraneSolutionsLlcUsNc1 from './liberty-crane-solutions-llc-us-nc-1';

describe(`with libertyCraneSolutionsLlcUsNc1 preset`, () => {
  it(`should return a libertyCraneSolutionsLlcUsNc1 preset`, () => {
    const libertyCraneSolutionsLlcUsNc1Preset =
      libertyCraneSolutionsLlcUsNc1().build<TAddressDraft>();
    expect(libertyCraneSolutionsLlcUsNc1Preset).toMatchInlineSnapshot();
  });

  it(`should return a libertyCraneSolutionsLlcUsNc1 preset when built for graphql`, () => {
    const libertyCraneSolutionsLlcUsNc1PresetGraphql =
      libertyCraneSolutionsLlcUsNc1().buildGraphql<TAddressDraft>();
    expect(libertyCraneSolutionsLlcUsNc1PresetGraphql).toMatchInlineSnapshot();
  });
});
