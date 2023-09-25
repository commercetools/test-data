import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import kitchen from './kitchen';
describe(`with kitchen preset`, () => {
  it('should create a kitchen category type draft', () => {
    const kitchenPreset = kitchen().build<TCategoryDraft>();
    expect(kitchenPreset).toMatchObject(
      JSON.parse(`{
  "key": "kitchen",
  "name": {
    "en-GB": "Kitchen",
    "de-DE": "Küche",
    "en-US": "Kitchen"
  },
  "orderHint": "0.3",
  "slug": {
    "en-GB": "kitchen",
    "de-DE": "kitchen",
    "en-US": "kitchen"
  }
}`)
    );
  });
});
