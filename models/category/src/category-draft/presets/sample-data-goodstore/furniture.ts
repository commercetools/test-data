import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

const furniture = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Furniture')
        ['de-DE']('Möbel')
        ['en-US']('Furniture')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('furniture')
        ['de-DE']('furniture')
        ['en-US']('furniture')
    )
    .key('furniture')
    .orderHint('0.2');

export default furniture;
