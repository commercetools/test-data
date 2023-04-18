import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import men from './men';

const menCategoryDraft = men().build<TCategoryDraft>();

const topsMen = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedString.presets.empty()['en-US']('Tops'))
    .slug(LocalizedString.presets.empty()['en-US']('tops_men'))
    .parent(KeyReference.random().key(menCategoryDraft.key!).typeId('category'))
    .key('tops-men')
    .orderHint('0.6');

export default topsMen;
