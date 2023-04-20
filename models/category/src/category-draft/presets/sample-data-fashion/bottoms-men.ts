import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import men from './men';

const menCategoryDraft = men().build<TCategoryDraft>();

const bottomsMen = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedString.presets.empty()['en-US']('Bottoms'))
    .slug(LocalizedString.presets.empty()['en-US']('bottoms_men'))
    .parent(KeyReference.presets.category().key(menCategoryDraft.key!))
    .key('bottoms-men')
    .orderHint('0.4');

export default bottomsMen;
