'use strict';

(() => {
  const panels = Array.from(document.querySelectorAll('.tab-panel'));
  const tabs = Array.from(document.querySelectorAll('.main-nav [role="tab"]'));
  const validIds = new Set(panels.map(panel => panel.id));
  const titles = {
    fabriq: 'Fabriq · Computação que já existe. Novas possibilidades.',
    sincrona: 'Fabriq · Análise da entrevista síncrona',
    assincrona: 'Fabriq · Análise da entrevista assíncrona'
  };

  function selectPanel(id, resetScroll = false) {
    if (!validIds.has(id)) return;
    panels.forEach(panel => { panel.hidden = panel.id !== id; });
    tabs.forEach(tab => {
      const selected = tab.getAttribute('aria-controls') === id;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    document.title = titles[id];
    if (resetScroll) window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function currentRoute() {
    const id = window.location.hash.slice(1);
    if (!id) return 'fabriq';
    if (validIds.has(id)) return id;
    return document.getElementById(id)?.closest('.tab-panel')?.id || null;
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    const id = link.getAttribute('href').slice(1);
    if (!validIds.has(id)) return;
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      if (window.location.hash !== `#${id}`) window.history.pushState(null, '', `#${id}`);
      selectPanel(id, true);
      if (!link.closest('.main-nav')) {
        const panel = document.getElementById(id);
        panel.tabIndex = 0;
        panel.focus({ preventScroll: true });
      }
    });
  });

  tabs.forEach((tab, index) => {
    tab.addEventListener('keydown', event => {
      let target = null;
      if (event.key === 'ArrowRight') target = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') target = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') target = 0;
      if (event.key === 'End') target = tabs.length - 1;
      if (target === null) return;
      event.preventDefault();
      tabs[target].focus();
      tabs[target].click();
    });
  });

  function restoreRoute() {
    const route = currentRoute();
    if (!route) return;
    const fragment = window.location.hash.slice(1);
    const sectionRoute = !fragment || validIds.has(fragment);
    selectPanel(route, sectionRoute);
    if (!sectionRoute) {
      requestAnimationFrame(() => document.getElementById(fragment)?.scrollIntoView({ block: 'start' }));
    }
  }
  window.addEventListener('hashchange', restoreRoute);
  window.addEventListener('popstate', restoreRoute);
  selectPanel(currentRoute() || 'fabriq');
})();
