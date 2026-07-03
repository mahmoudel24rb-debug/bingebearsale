(function () {
  var VERSION = '2026-07-02-lumio-header';
  var WHATSAPP_URL = 'https://wa.link/arhdnf';
  var LOGO_LIGHT = '/bingebearsale/brand-assets/hatim-zekri/logos/bb-lockup-light.svg';
  var LOGO_DARK = '/bingebearsale/brand-assets/hatim-zekri/logos/bb-lockup-dark.svg';

  var frPathMap = {
    '/': '/bingebearsale/fr/',
    '/bingebearsale/pricing/': '/bingebearsale/fr/pricing/',
    '/bingebearsale/trial/': '/bingebearsale/fr/trial/',
    '/bingebearsale/sport/': '/bingebearsale/fr/sport/',
    '/football/': '/bingebearsale/fr/football/',
    '/bingebearsale/films/': '/bingebearsale/fr/films/',
    '/box-sets/': '/bingebearsale/fr/box-sets-every-season/',
    '/series/': '/bingebearsale/fr/series-completes/',
    '/kids-channels/': '/bingebearsale/fr/kids-channels/',
    '/documentaries/': '/bingebearsale/fr/documentaries/',
    '/news/': '/bingebearsale/fr/news/',
    '/live-channels/': '/bingebearsale/fr/live-channels/',
    '/bingebearsale/library/': '/bingebearsale/fr/library/',
    '/bingebearsale/library/search/': '/bingebearsale/fr/library/search/',
    '/bingebearsale/library/channels/': '/bingebearsale/fr/library/channels/',
    '/bingebearsale/library/films/': '/bingebearsale/fr/library/films/',
    '/bingebearsale/library/series/': '/bingebearsale/fr/library/series/',
    '/bingebearsale/catalogue/': '/bingebearsale/fr/catalogue/',
    '/vods/': '/vods/',
    '/bingebearsale/blog/': '/bingebearsale/fr/blog/',
    '/category/blog/': '/bingebearsale/fr/category/blog/',
    '/bingebearsale/help-center/': '/bingebearsale/fr/help-center/',
    '/bingebearsale/setup-guides/': '/bingebearsale/fr/setup-guides/',
    '/bingebearsale/setup-guides/firestick/': '/bingebearsale/fr/setup-guides/firestick/',
    '/bingebearsale/setup-guides/android-tv/': '/bingebearsale/fr/setup-guides/android-tv/',
    '/bingebearsale/setup-guides/iphone-ipad/': '/bingebearsale/fr/setup-guides/iphone-ipad/',
    '/bingebearsale/setup-guides/samsung-smart-tv/': '/bingebearsale/fr/setup-guides/samsung-smart-tv/',
    '/bingebearsale/setup-guides/lg-smart-tv/': '/bingebearsale/fr/setup-guides/lg-smart-tv/',
    '/faq/': '/bingebearsale/fr/faq/',
    '/refund-policy/': '/bingebearsale/fr/refund-policy/',
    '/privacy-policy/': '/bingebearsale/fr/privacy-policy/',
    '/terms-of-service/': '/bingebearsale/fr/terms-of-service/',
    '/cookies-policy/': '/bingebearsale/fr/cookies-policy/',
    '/best-iptv-firestick-2026/': '/bingebearsale/fr/best-iptv-firestick-2026/',
    '/watch-live-sport-ireland-uk/': '/bingebearsale/fr/watch-live-sport-ireland-uk/',
    '/watch-premier-league-without-sky-ireland/': '/bingebearsale/fr/watch-premier-league-without-sky-ireland/',
    '/watch-gaa-online-2026/': '/bingebearsale/fr/watch-gaa-online-2026/',
    '/iptv-cost-ireland-2026/': '/bingebearsale/fr/iptv-cost-ireland-2026/',
    // No dedicated /bingebearsale/fr/whats-on/ page: fall back to the FR sport hub.
    '/bingebearsale/whats-on/': '/bingebearsale/fr/sport/',
  };

  function isFr() {
    return /^\/fr(?:\/|$)/.test(window.location.pathname);
  }

  function localiseHref(href) {
    if (!isFr() || /^https?:\/\//i.test(href) || href.charAt(0) === '#') return href;
    return frPathMap[href] || href;
  }

  function linkSlug(text) {
    return String(text)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  function arrowIcon() {
    return (
      '<svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M7.215 2.965 10.25 6 7.215 9.035" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.75 6h8.415" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
    );
  }

  // Nav links mirror the homepage (Lumio) header. Each anchor points at a real
  // page so the header works from anywhere, not just the homepage.
  var navLinks = [
    ['plans', '/bingebearsale/pricing/'],
    ['whatson', '/bingebearsale/whats-on/'],
    ['setup', '/bingebearsale/setup-guides/'],
    ['blog', '/bingebearsale/blog/'],
  ];

  function routeData() {
    var fr = isFr();
    return {
      home: localiseHref('/'),
      trial: fr ? '/bingebearsale/fr/trial/' : '/bingebearsale/trial/',
      labels: fr
        ? {
            plans: 'Formules',
            whatson: "À l'affiche",
            setup: 'Aide install',
            blog: 'Blog',
            trial: 'Essai gratuit 24 h',
            whatsapp: 'WhatsApp',
          }
        : {
            plans: 'Plans',
            whatson: "What's on",
            setup: 'Setup help',
            blog: 'Blog',
            trial: 'Start the free trial',
            whatsapp: 'WhatsApp us',
          },
    };
  }

  function desktopNav(data) {
    var links = navLinks
      .map(function (link) {
        var label = data.labels[link[0]];
        return (
          '<li class="bb-mega-header__item"><a class="bb-mega-header__link" href="' +
          localiseHref(link[1]) +
          '" target="_top" data-cta="nav-' +
          linkSlug(label) +
          '">' +
          label +
          '</a></li>'
        );
      })
      .join('');
    return '<ul class="bb-mega-header__links" role="list">' + links + '</ul>';
  }

  function mobileNav(data) {
    var links = navLinks
      .map(function (link) {
        var label = data.labels[link[0]];
        return (
          '<a href="' +
          localiseHref(link[1]) +
          '" target="_top" data-cta="nav-mobile-' +
          linkSlug(label) +
          '">' +
          label +
          '</a>'
        );
      })
      .join('');
    return (
      '<div class="bb-mega-mobile-panel"><div class="bb-mega-mobile-panel__inner">' +
      links +
      '<div class="bb-mega-mobile-actions"><a class="bb-mega-header__whatsapp" href="' +
      WHATSAPP_URL +
      '" target="_blank" rel="noopener noreferrer" data-cta="nav-mobile-whatsapp"><span class="bb-mega-wa-dot"></span>' +
      data.labels.whatsapp +
      '</a><a class="bb-mega-cta" href="' +
      data.trial +
      '" target="_top" data-cta="nav-mobile-trial">' +
      data.labels.trial +
      '<span class="bb-mega-cta__icon">' +
      arrowIcon() +
      '</span></a></div></div></div>'
    );
  }

  function headerHtml() {
    var data = routeData();
    return (
      '<header class="bb-mega-site-header" data-bb-mega-header="true" data-bb-header-tone="dark" data-bb-header-version="' +
      VERSION +
      '"><nav class="bb-mega-header__nav" aria-label="Main navigation"><a class="bb-mega-header__logo" href="' +
      data.home +
      '" target="_top" aria-label="BingeBear home" data-cta="nav-logo-home"><img data-bb-logo="true" src="' +
      LOGO_LIGHT +
      '" alt="BingeBear" width="194" height="44" loading="eager" decoding="async"></a>' +
      desktopNav(data) +
      '<div class="bb-mega-header__actions"><a class="bb-mega-header__whatsapp" href="' +
      WHATSAPP_URL +
      '" target="_blank" rel="noopener noreferrer" data-cta="nav-whatsapp"><span class="bb-mega-wa-dot"></span>' +
      data.labels.whatsapp +
      '</a><a class="bb-mega-cta" href="' +
      data.trial +
      '" target="_top" data-cta="nav-trial">' +
      data.labels.trial +
      '<span class="bb-mega-cta__icon">' +
      arrowIcon() +
      '</span></a><button class="bb-mega-mobile-toggle" type="button" aria-label="Open menu" aria-expanded="false"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button></div></nav>' +
      mobileNav(data) +
      '</header>'
    );
  }

  function removeLegacyHeaders() {
    var selectors = [
      '.bb-hd',
      '.bb-global-header-static',
      '.header-tod',
      '.mp-header',
      '.site-header',
      '#site-header',
      '.oxy-header-wrapper',
      '.bb-lumio-shell__header',
      '.bb-site-header',
      '[data-bb-header="true"]',
      '#nav',
      '.nav__drawer',
      '#navDrawer',
      '.bb-shell-fallback__nav',
    ];
    document.querySelectorAll(selectors.join(',')).forEach(function (node) {
      if (!node.closest('[data-bb-mega-header="true"]')) node.remove();
    });
  }

  function parseAlpha(value) {
    if (value === undefined || value === null || value === '') return 1;
    var text = String(value).trim();
    if (text.indexOf('%') > -1) return Math.max(0, Math.min(1, parseFloat(text) / 100));
    var parsed = parseFloat(text);
    return Number.isFinite(parsed) ? Math.max(0, Math.min(1, parsed)) : 1;
  }

  function parseRgbChannel(value) {
    var text = String(value).trim();
    if (text.indexOf('%') > -1) return Math.max(0, Math.min(255, (parseFloat(text) / 100) * 255));
    var parsed = parseFloat(text);
    return Number.isFinite(parsed) ? Math.max(0, Math.min(255, parsed)) : 0;
  }

  function sampleFromRgb(color) {
    var match = color.match(/rgba?\(([^)]+)\)/i);
    if (!match) return null;
    var parts = match[1].replace(/\//g, ' ').replace(/,/g, ' ').split(/\s+/).filter(Boolean);
    if (parts.length < 3) return null;
    var r = parseRgbChannel(parts[0]) / 255;
    var g = parseRgbChannel(parts[1]) / 255;
    var b = parseRgbChannel(parts[2]) / 255;
    var alpha = parseAlpha(parts[3]);
    return {
      alpha: alpha,
      luminance: 0.2126 * r + 0.7152 * g + 0.0722 * b,
    };
  }

  function sampleFromOklab(color) {
    var match = color.match(/oklab\(([^)]+)\)/i);
    if (!match) return null;
    var alphaParts = match[1].split('/');
    var channels = alphaParts[0].trim().split(/\s+/).filter(Boolean);
    if (!channels.length) return null;
    var lightness = parseFloat(channels[0]);
    if (!Number.isFinite(lightness)) return null;
    return {
      alpha: parseAlpha(alphaParts[1]),
      luminance: Math.max(0, Math.min(1, lightness)),
    };
  }

  function sampleFromHex(color) {
    var value = color.trim().replace('#', '');
    if (![3, 4, 6, 8].includes(value.length)) return null;
    if (value.length === 3 || value.length === 4) {
      value = value
        .split('')
        .map(function (char) {
          return char + char;
        })
        .join('');
    }
    var r = parseInt(value.slice(0, 2), 16) / 255;
    var g = parseInt(value.slice(2, 4), 16) / 255;
    var b = parseInt(value.slice(4, 6), 16) / 255;
    var a = value.length === 8 ? parseInt(value.slice(6, 8), 16) / 255 : 1;
    return {
      alpha: Number.isFinite(a) ? a : 1,
      luminance: 0.2126 * r + 0.7152 * g + 0.0722 * b,
    };
  }

  function colorSample(color) {
    if (!color) return null;
    var text = String(color).trim();
    if (!text || text === 'transparent') return null;
    if (/^rgba?\(/i.test(text)) return sampleFromRgb(text);
    if (/^oklab\(/i.test(text)) return sampleFromOklab(text);
    if (text.charAt(0) === '#') return sampleFromHex(text);
    return null;
  }

  function backgroundImageSample(backgroundImage) {
    if (!backgroundImage || backgroundImage === 'none') return null;
    var matches = backgroundImage.match(/rgba?\([^)]+\)|oklab\([^)]+\)|#[0-9a-fA-F]{3,8}/g) || [];
    var candidates = matches
      .map(colorSample)
      .filter(function (sample) {
        return sample && sample.alpha >= 0.24;
      });
    if (!candidates.length) return null;
    return (
      candidates.find(function (sample) {
        return sample.alpha >= 0.55;
      }) ||
      candidates.sort(function (a, b) {
        return a.luminance - b.luminance;
      })[0]
    );
  }

  function backgroundSampleFor(element) {
    var node = element;
    while (node && node.nodeType === 1) {
      var styles = window.getComputedStyle(node);
      var bg = colorSample(styles.backgroundColor);
      if (bg && bg.alpha >= 0.35) return bg;
      var imageBg = backgroundImageSample(styles.backgroundImage);
      if (imageBg) return imageBg;
      node = node.parentElement;
    }
    return colorSample(window.getComputedStyle(document.body).backgroundColor) || {
      alpha: 1,
      luminance: 1,
    };
  }

  function pageElementBehind(header, x, y) {
    var stack = document.elementsFromPoint(x, y);
    for (var i = 0; i < stack.length; i += 1) {
      var element = stack[i];
      if (!element || element === document.documentElement) continue;
      if (header.contains(element) || element.closest('[data-bb-mega-header="true"]')) continue;
      return element;
    }
    return document.body;
  }

  function detectHeaderTone(header) {
    if (!header || !document.body) return 'dark';
    var rect = header.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return 'dark';
    var y = Math.max(1, Math.min(window.innerHeight - 2, rect.top + rect.height * 0.58));
    var points = [
      Math.max(1, rect.left + Math.min(80, rect.width * 0.18)),
      Math.max(1, rect.left + rect.width * 0.5),
      Math.min(window.innerWidth - 2, rect.right - Math.min(80, rect.width * 0.18)),
    ];
    var light = 0;
    var dark = 0;
    points.forEach(function (x) {
      var element = pageElementBehind(header, x, y);
      var sample = backgroundSampleFor(element);
      if (!sample) return;
      if (sample.luminance >= 0.58) light += 1;
      else dark += 1;
    });
    return light > dark ? 'light' : 'dark';
  }

  function applyHeaderTone(header, tone) {
    var nextTone = tone === 'light' ? 'light' : 'dark';
    var changed = header.dataset.bbHeaderTone !== nextTone;
    if (changed) header.dataset.bbHeaderTone = nextTone;
    document.documentElement.dataset.bbHeaderTone = nextTone;
    if (nextTone === 'light') {
      // Liquid glass: translucent enough that the page (and the body's decorative
      // gradient) shows through the blur, so there is no hard seam under the bar.
      header.style.setProperty('background', 'rgba(255, 255, 255, 0.6)', 'important');
      header.style.setProperty('border-color', 'rgba(6, 18, 38, 0.07)', 'important');
      header.style.setProperty('color', '#061226', 'important');
      header.style.setProperty(
        'box-shadow',
        'inset 0 1px 0 rgba(255,255,255,0.6), 0 10px 30px rgba(6,18,38,0.05)',
        'important',
      );
      header.style.setProperty('-webkit-backdrop-filter', 'saturate(1.8) blur(22px)', 'important');
      header.style.setProperty('backdrop-filter', 'saturate(1.8) blur(22px)', 'important');
    } else {
      header.style.removeProperty('background');
      header.style.removeProperty('border-color');
      header.style.removeProperty('color');
      header.style.removeProperty('box-shadow');
      header.style.removeProperty('-webkit-backdrop-filter');
      header.style.removeProperty('backdrop-filter');
    }
    header
      .querySelectorAll('.bb-mega-header__link, .bb-mega-header__whatsapp')
      .forEach(function (item) {
        if (nextTone === 'light') {
          item.style.setProperty('color', 'rgba(6, 18, 38, 0.78)', 'important');
          item.style.setProperty('text-shadow', 'none', 'important');
        } else {
          item.style.removeProperty('color');
          item.style.removeProperty('text-shadow');
        }
      });
    var mobileToggle = header.querySelector('.bb-mega-mobile-toggle');
    if (mobileToggle) {
      if (nextTone === 'light') {
        mobileToggle.style.setProperty('border-color', 'rgba(6, 18, 38, 0.12)', 'important');
        mobileToggle.style.setProperty('background', 'rgba(6, 18, 38, 0.055)', 'important');
        mobileToggle.style.setProperty('color', '#061226', 'important');
      } else {
        mobileToggle.style.removeProperty('border-color');
        mobileToggle.style.removeProperty('background');
        mobileToggle.style.removeProperty('color');
      }
    }
    var logo = header.querySelector('[data-bb-logo="true"]');
    if (logo) {
      var nextLogo = nextTone === 'light' ? LOGO_DARK : LOGO_LIGHT;
      if (logo.getAttribute('src') !== nextLogo) logo.setAttribute('src', nextLogo);
    }
  }

  function installHeaderTone(header) {
    var pending = 0;
    var schedule = function () {
      if (pending) return;
      pending = window.requestAnimationFrame(function () {
        pending = 0;
        applyHeaderTone(header, detectHeaderTone(header));
      });
    };
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    if (window.ResizeObserver) {
      new ResizeObserver(schedule).observe(document.body);
    }
    if (window.MutationObserver) {
      new MutationObserver(schedule).observe(document.body, {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ['class', 'style'],
      });
    }
    header._bbScheduleTone = schedule;
  }

  function closeMobile(header, toggle) {
    header.classList.remove('is-mobile-open');
    document.body.classList.remove('bb-mobile-menu-open');
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      toggle.innerHTML =
        '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
    }
    if (header._bbScheduleTone) header._bbScheduleTone();
  }

  function install() {
    if (!document.body || document.querySelector('[data-bb-mega-header="true"]')) return;
    removeLegacyHeaders();
    if (document.querySelector('.curtain')) document.body.classList.add('bb-mega-header-overlap');
    document.body.insertAdjacentHTML('afterbegin', headerHtml());
    document.body.classList.add('bb-mega-header-mounted');
    document.documentElement.classList.remove('bb-mega-header-pending');

    var header = document.querySelector('[data-bb-mega-header="true"]');
    var toggle = header.querySelector('.bb-mega-mobile-toggle');

    toggle.addEventListener('click', function () {
      var open = !header.classList.contains('is-mobile-open');
      header.classList.toggle('is-mobile-open', open);
      document.body.classList.toggle('bb-mobile-menu-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      toggle.innerHTML = open
        ? '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
        : '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
    });

    header.addEventListener('click', function (event) {
      if (event.target.closest('.bb-mega-mobile-panel a')) closeMobile(header, toggle);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeMobile(header, toggle);
    });

    installHeaderTone(header);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', install);
  } else {
    install();
  }
})();
