import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import barGlassware from './bar-and-glassware';

const barGlasswareDraft = barGlassware().build<TCategoryDraft>();

const barAccessories = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Bar Accessories')
        ['en-US']('Bar Accessories')
        ['de-DE']('Barzubehör')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('bar-accessories')
        ['en-US']('bar-accessories')
        ['de-DE']('barzubehor')
    )
    .key('bar-accessories')
    .orderHint('.36')
    .parent(KeyReference.presets.category().key(barGlasswareDraft.key!));

export default barAccessories;
