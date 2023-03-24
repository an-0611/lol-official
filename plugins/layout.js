function Layout() {
  const docEl = document.documentElement;
  const vmax = Math.max(window.innerWidth, window.innerHeight);
  const vmin = Math.min(window.innerWidth, window.innerHeight);
  docEl.setAttribute('data-screen-ratio', (vmax / vmin).toFixed(1));
}

export default Layout;
