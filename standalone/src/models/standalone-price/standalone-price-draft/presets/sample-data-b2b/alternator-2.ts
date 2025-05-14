import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const alternator2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('alternator-2')
    .sku('alternator')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(27500))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default alternator2;
