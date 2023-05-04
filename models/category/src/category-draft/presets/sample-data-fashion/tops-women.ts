import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import women from './women';

const womenCategoryDraft = women().build<TCategoryDraft>();

const topsWomen = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedString.presets.empty()['en-US']('Tops'))
    .slug(LocalizedString.presets.empty()['en-US']('tops_women'))
    .parent(KeyReference.presets.category().key(womenCategoryDraft.key!))
    .key('tops-women')
    .orderHint('0.3');

export default topsWomen;
