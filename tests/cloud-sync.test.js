import assert from 'node:assert/strict';
import fs from 'node:fs';

const worker=fs.readFileSync('backend/worker.js','utf8');
const schema=fs.readFileSync('database/migrations/0001_cloud_archives.sql','utf8');
const app=fs.readFileSync('app/index.html','utf8');
const serviceWorker=fs.readFileSync('app/sw.js','utf8');

assert.match(worker,/length=12/,"Il codice di recupero deve essere lungo 12 caratteri");
assert.match(worker,/SHA-256/,"Codici e token devono essere salvati come hash");
assert.match(worker,/baseRevision/,"La sincronizzazione deve controllare la revisione");
assert.match(worker,/TOKEN_INVALID/,"I dispositivi non autorizzati devono essere respinti");
assert.match(worker,/\/api\/recovery-code/,"Deve esistere l’API per rigenerare il codice di recupero");
assert.match(worker,/UPDATE cloud_archives SET recovery_code_hash/,"La rigenerazione deve invalidare il codice precedente");
assert.match(schema,/recovery_code_hash TEXT NOT NULL UNIQUE/,"I codici di recupero non devono essere salvati in chiaro");
assert.match(schema,/token_hash TEXT NOT NULL UNIQUE/,"I token dei dispositivi non devono essere salvati in chiaro");
assert.match(app,/function markCloudDirty/,"Ogni modifica locale deve attivare il backup automatico");
assert.match(app,/function applyCloudSnapshot/,"Il recupero cloud deve ripristinare l’intero archivio");
assert.match(app,/I dati presenti su questo dispositivo verranno sostituiti/,"Il recupero deve chiedere conferma prima di sostituire dati locali");
assert.match(app,/Rigenera codice di recupero/,"Le impostazioni devono permettere di rigenerare il codice");
assert.doesNotMatch(app,/id="addRecurringBtn"/,"Le ricorrenze devono essere aggiunte soltanto dal pulsante flottante");
assert.match(serviceWorker,/pathname\.startsWith\('\/api\/'\)/,"Le API non devono essere intercettate dalla cache offline");

console.log('Test backup cloud superati.');
