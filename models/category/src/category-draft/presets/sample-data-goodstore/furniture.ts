import { LocalizedString } from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder } from '../../../types';
import empty from '../empty';

const furniture = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Furniture')
        ['en-US']('Furniture')
        ['de-DE']('Möbel')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('furniture')
        ['en-US']('furniture')
        ['de-DE']('mobel')
    )
    .key('furniture')
    .orderHint('0.2');

export default furniture;
