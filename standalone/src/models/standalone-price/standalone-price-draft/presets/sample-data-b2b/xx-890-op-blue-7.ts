import {
  KeyReferenceDraft,
  MoneyDraft,
} from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const xx890OpBlue7 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('xx890-op-blue-7')
    .sku('xx890-op-blue')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(6000000))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-medium-customers'))
    .active(true);

export default xx890OpBlue7;
