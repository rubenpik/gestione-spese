(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.AppCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  function roundMoney(value) {
    return Math.round((Number(value) || 0) * 100) / 100;
  }

  function effectiveMonthlyResources(openingBalance, salaryIncome, additionalIncome = 0) {
    return roundMoney(Math.max(Number(openingBalance) || 0, Number(salaryIncome) || 0) + (Number(additionalIncome) || 0));
  }

  function monthlyExtra(resources, savingGoal, expense) {
    return roundMoney((Number(resources) || 0) - (Number(savingGoal) || 0) - (Number(expense) || 0));
  }

  function monthDistance(startKey, endKey) {
    const [sy, sm] = String(startKey).split('-').map(Number);
    const [ey, em] = String(endKey).split('-').map(Number);
    return (ey - sy) * 12 + (em - sm);
  }

  function recurringActiveForMonth(item, monthKey) {
    const start = item.startMonth || String(item.createdAt).slice(0, 7);
    const offset = monthDistance(start, monthKey);
    return offset >= 0 && (item.durationMonths == null || offset < Number(item.durationMonths));
  }

  function recurringMonthsRemaining(item, monthKey) {
    if (item.durationMonths == null) return null;
    if (!monthKey) {
      const now = new Date();
      monthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    }
    const start = item.startMonth || String(item.createdAt).slice(0, 7);
    return Math.max(0, Number(item.durationMonths) - monthDistance(start, monthKey));
  }

  function recurringEndMonth(item) {
    if (item.durationMonths == null) return null;
    const [year, month] = String(item.startMonth || item.createdAt).slice(0, 7).split('-').map(Number);
    const end = new Date(year, month - 1 + Number(item.durationMonths) - 1, 1);
    return `${end.getFullYear()}-${String(end.getMonth() + 1).padStart(2, '0')}`;
  }

  return { roundMoney, effectiveMonthlyResources, monthlyExtra, monthDistance, recurringActiveForMonth, recurringMonthsRemaining, recurringEndMonth };
});
