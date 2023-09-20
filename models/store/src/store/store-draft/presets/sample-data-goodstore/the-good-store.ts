import { LocalizedString } from '@commercetools-test-data/commons';
import type { TStoreDraftBuilder } from '../../../types';
import * as StoreDraft from '../../index';

const theGoodStore = (): TStoreDraftBuilder =>
  StoreDraft.presets
    .empty()
    .key('the-good-store')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('The Good Store')
        ['en-GB']('The Good Store')
    );
export default theGoodStore;
