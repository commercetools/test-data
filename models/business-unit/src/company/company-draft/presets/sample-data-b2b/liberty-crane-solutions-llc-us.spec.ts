import type { TCompanyDraft } from '../../../types';
import libertyCraneSolutionsLlcUs from './liberty-crane-solutions-llc-us';

describe(`with libertyCraneSolutionsLlcUs preset`, () => {
  it(`should return a libertyCraneSolutionsLlcUs preset`, () => {
    const libertyCraneSolutionsLlcUsPreset =
      libertyCraneSolutionsLlcUs().build<TCompanyDraft>();
    expect(libertyCraneSolutionsLlcUsPreset).toMatchInlineSnapshot();
  });

  it(`should return a libertyCraneSolutionsLlcUs preset when built for graphql`, () => {
    const libertyCraneSolutionsLlcUsPresetGraphql =
      libertyCraneSolutionsLlcUs().buildGraphql<TCompanyDraft>();
    expect(libertyCraneSolutionsLlcUsPresetGraphql).toMatchInlineSnapshot();
  });
});
