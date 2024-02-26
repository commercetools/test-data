import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import dumpTrucks from './dump-trucks';

const dumpTrucksCategory = dumpTrucks().build<TCategoryDraft>();

const rigidDumpTrucks = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Starre Kipper')
        ['it-IT']('Camion Ribaltabili Rigidi')
        ['nl-NL']('Starre Kipwagens')
        ['fr-FR']('Camions-bennes rigides')
        ['en-AU']('Rigid Dump Trucks')
        ['es-ES']('Camiones volquete rígidos')
        ['en-GB']('Rigid Dump Trucks')
        ['en-NZ']('Rigid Dump Trucks')
        ['pt-PT']('Caminhões Basculantes Rígidos')
        ['en-US']('Rigid Dump Trucks')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('starre_kipper')
        ['it-IT']('rigid_dump_trucks')
        ['nl-NL']('rigid_dump_trucks')
        ['fr-FR']('camions_bennes_rigides')
        ['en-AU']('rigid_dump_trucks')
        ['es-ES']('camiones_volquete_rigidos')
        ['en-GB']('rigid_dump_trucks')
        ['en-NZ']('rigid_dump_trucks')
        ['pt-PT']('rigid_dump_trucks')
        ['en-US']('rigid_dump_trucks')
    )
    .key('rigid-dump-trucks')
    .orderHint('0.000017083829451711521889254')
    .parent(KeyReferenceDraft.presets.category().key(dumpTrucksCategory.key!));

export default rigidDumpTrucks;
