/* ============================================================
   PASCAL Homepage — main.js
   ============================================================ */

/* ── 1. 네비게이션 스크롤 연동 ─────────────────────────────── */
(function () {
  const nav = document.getElementById('siteNav');
  if (!nav) return;

  function onScroll() {
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // 초기 상태 반영
})();

/* ── 2. 햄버거 메뉴 토글 ────────────────────────────────────── */
(function () {
  const btn  = document.getElementById('navHamburger');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  function openMenu() {
    btn.classList.add('open');
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', '메뉴 닫기');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    btn.classList.remove('open');
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', '메뉴 열기');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', function () {
    btn.classList.contains('open') ? closeMenu() : openMenu();
  });

  // 메뉴 항목 클릭 시 자동 닫힘
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
})();

/* ── 3. 스크롤 진입 애니메이션 (IntersectionObserver) ───────── */
/*
  TODO: 섹션이 추가되면 아래 코드를 활성화할 것

  const fadeEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  fadeEls.forEach(function (el) { observer.observe(el); });
*/
