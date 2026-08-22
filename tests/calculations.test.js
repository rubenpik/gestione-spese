import assert from 'node:assert/strict';
await import('../app/app-core.js');
const core=globalThis.AppCore;

assert.equal(core.effectiveMonthlyResources(2000, 0), 2000, 'Il saldo iniziale copre i giorni prima dello stipendio');
assert.equal(core.effectiveMonthlyResources(2000, 2400), 2400, 'Un’entrata mensile maggiore aumenta la disponibilità');
assert.equal(core.effectiveMonthlyResources(2000, 500), 2000, 'Un accredito parziale non riduce la stima iniziale');
assert.equal(core.monthlyExtra(2077, 200, 1858.68), 18.32, 'Il risparmio extra mensile è calcolato ai centesimi');
assert.equal(core.monthlyExtra(2000, 300, 1800), -100, 'Lo sforamento mensile è negativo');

const recurring = { startMonth: '2026-08', durationMonths: 3 };
assert.equal(core.recurringActiveForMonth(recurring, '2026-08'), true);
assert.equal(core.recurringActiveForMonth(recurring, '2026-10'), true);
assert.equal(core.recurringActiveForMonth(recurring, '2026-11'), false);
assert.equal(core.recurringMonthsRemaining(recurring, '2026-08'), 3);
assert.equal(core.recurringEndMonth(recurring), '2026-10');

console.log('Test calcoli superati.');
