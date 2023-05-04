import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import women from './women';

const womenCategoryDraft = women().build<TCategoryDraft>();

const otherWomen = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedString.presets.empty()['en-US']('Other'))
    .slug(LocalizedString.presets.empty()['en-US']('other_women'))
    .parent(KeyReference.presets.category().key(womenCategoryDraft.key!))
    .key('other-women')
    .orderHint('0.5')
    .assets([]);

export default otherWomen;
