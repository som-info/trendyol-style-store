/* Trendora — Marketplace-style e-commerce homepage (portfolio concept)
   Vanilla JS, no dependencies. All brands and products are fictional. */
(function () {
  'use strict';

  /* ---------- Data ---------- */
  var CATS = {
    kadin: 'Kadın', erkek: 'Erkek', cocuk: 'Anne & Çocuk', ev: 'Ev & Yaşam', kozmetik: 'Kozmetik',
    'ayakkabi-canta': 'Ayakkabı & Çanta', elektronik: 'Elektronik', spor: 'Spor & Outdoor', aksesuar: 'Saat & Aksesuar'
  };

  // price/old in TL; flash = { price, sold% }
  var PRODUCTS = [
    { id: 1, brand: 'Velora', name: 'Askılı Midi Boy Keten Elbise', cat: 'kadin', img: 'dress-green', alt: 'Askıda yeşil keten elbise', price: 649.99, old: 999.99, rating: 4.6, reviews: 1284, freeShip: true, fast: true, tag: 'best', flash: { price: 549.99, sold: 78 } },
    { id: 2, brand: 'Nordvik', name: 'Erkek Kadife Yakalı Kot Ceket', cat: 'erkek', img: 'jacket', alt: 'Kadife yakalı mavi kot ceket', price: 1199.90, old: 1599.90, rating: 4.7, reviews: 642, freeShip: true, fast: false, tag: null },
    { id: 3, brand: 'Sonique', name: 'Kablosuz Kulak Üstü Bluetooth Kulaklık 40 Saat Pil', cat: 'elektronik', img: 'headphones', alt: 'Sarı fon üzerinde siyah kulak üstü kulaklık', price: 1849.00, old: 2499.00, rating: 4.5, reviews: 3157, freeShip: true, fast: true, tag: 'best', flash: { price: 1599.00, sold: 64 } },
    { id: 4, brand: 'Pera Atelier', name: 'Örgü Desenli Zincir Askılı Omuz Çantası', cat: 'ayakkabi-canta', img: 'bag-brown', alt: 'Kahverengi örgü desenli deri omuz çantası', price: 899.90, old: 1299.90, rating: 4.4, reviews: 512, freeShip: true, fast: false, tag: 'new' },
    { id: 5, brand: 'Dermia', name: 'C Vitamini Aydınlatıcı Yüz Serumu 30 ml', cat: 'kozmetik', img: 'serum', alt: 'Ahşap stant üzerinde amber renkli serum şişesi', price: 289.90, old: 449.90, rating: 4.8, reviews: 4821, freeShip: false, fast: true, tag: 'best', flash: { price: 229.90, sold: 91 } },
    { id: 6, brand: 'Fitora', name: 'Unisex Renkli Günlük Sneaker', cat: 'ayakkabi-canta', img: 'sneaker', alt: 'Beyaz zemin üzerinde renkli bir çift sneaker', price: 1349.90, old: 1899.90, rating: 4.3, reviews: 876, freeShip: true, fast: true, tag: null, flash: { price: 1149.90, sold: 57 } },
    { id: 7, brand: 'Pera Home', name: 'Ahşap Ayaklı Masa Lambası Keten Abajur', cat: 'ev', img: 'lamp', alt: 'Ahşap ayaklı, yanan masa lambası', price: 749.00, old: 999.00, rating: 4.6, reviews: 389, freeShip: true, fast: false, tag: null },
    { id: 8, brand: 'Tempo', name: 'Akıllı Saat Amoled Ekran Nabız ve Uyku Takibi', cat: 'elektronik', img: 'watch-round', alt: 'Masada duran yuvarlak kadranlı akıllı saat', price: 2199.00, old: 2999.00, rating: 4.4, reviews: 1965, freeShip: true, fast: true, tag: 'best', flash: { price: 1899.00, sold: 83 } },
    { id: 9, brand: 'Aurelle', name: 'Dantel Detaylı Beyaz Yazlık Elbise', cat: 'kadin', img: 'dress-white', alt: 'Askıda dantel detaylı beyaz elbise', price: 1099.90, old: null, rating: 4.7, reviews: 233, freeShip: true, fast: false, tag: 'new' },
    { id: 10, brand: 'Basico', name: '%100 Pamuk Bisiklet Yaka Basic Tişört', cat: 'erkek', img: 'tshirt', alt: 'Askıda beyaz basic tişört', price: 199.99, old: 299.99, rating: 4.5, reviews: 7412, freeShip: false, fast: true, tag: 'best', flash: { price: 149.99, sold: 95 } },
    { id: 11, brand: 'Minibu', name: 'Ahşap Oyuncak Tren Seti 3 Vagon', cat: 'cocuk', img: 'train', alt: 'Ahşap oyuncak tren', price: 459.90, old: 599.90, rating: 4.9, reviews: 318, freeShip: true, fast: false, tag: null },
    { id: 12, brand: 'Ambra', name: 'Ambra Blanc EDP Kadın Parfüm 100 ml', cat: 'kozmetik', img: 'perfume', alt: 'Kumaş üzerinde şeffaf cam parfüm şişesi', price: 1249.00, old: 1749.00, rating: 4.6, reviews: 1102, freeShip: true, fast: true, tag: null, flash: { price: 999.00, sold: 69 } },
    { id: 13, brand: 'Lumio', name: 'Yuvarlak Metal Çerçeve Güneş Gözlüğü UV400', cat: 'aksesuar', img: 'sunglasses', alt: 'Beyaz zeminde yuvarlak metal çerçeveli güneş gözlüğü', price: 549.90, old: 799.90, rating: 4.3, reviews: 455, freeShip: true, fast: true, tag: null },
    { id: 14, brand: 'Fitora', name: 'Pilates Seti: 2x1 kg Dambıl, Yoga Bloğu ve Havlu', cat: 'spor', img: 'dumbbell', alt: 'Pembe yoga matı üzerinde dambıllar, blok ve havlu', price: 499.90, old: 749.90, rating: 4.7, reviews: 1543, freeShip: true, fast: true, tag: 'best' },
    { id: 15, brand: 'Pera Home', name: 'Mat Seramik Kupa 350 ml', cat: 'ev', img: 'mug', alt: 'Mavi zemin üzerinde beyaz seramik kupa', price: 129.90, old: 179.90, rating: 4.8, reviews: 2687, freeShip: false, fast: true, tag: null, flash: { price: 99.90, sold: 88 } },
    { id: 16, brand: 'Aurelle', name: 'Pembe Mini Çapraz Çanta Zincir Askılı', cat: 'ayakkabi-canta', img: 'bag-pink', alt: 'Beyaz platform üzerinde pembe mini çanta', price: 699.90, old: 999.90, rating: 4.5, reviews: 720, freeShip: true, fast: false, tag: null },
    { id: 17, brand: 'Nordvik', name: 'Oversize Basic Kapüşonlu Sweatshirt', cat: 'erkek', img: 'hoodie', alt: 'Askıda beyaz kapüşonlu sweatshirt', price: 599.90, old: 849.90, rating: 4.6, reviews: 1890, freeShip: true, fast: true, tag: null },
    { id: 18, brand: 'Sonique', name: 'ANC Aktif Gürültü Engelleyici Kulak İçi Kulaklık', cat: 'elektronik', img: 'earbuds', alt: 'Şarj kutusu yanında siyah kablosuz kulak içi kulaklıklar', price: 1299.00, old: 1799.00, rating: 4.2, reviews: 2241, freeShip: true, fast: true, tag: 'new' },
    { id: 19, brand: 'Minibu', name: 'Kız Çocuk Desenli Tül Elbise', cat: 'cocuk', img: 'dress-kids', alt: 'Askıda desenli kız çocuk elbisesi', price: 389.90, old: 549.90, rating: 4.7, reviews: 276, freeShip: false, fast: true, tag: null },
    { id: 20, brand: 'Dermia', name: 'Nemlendirici Bakım Seti 5 Parça', cat: 'kozmetik', img: 'makeup', alt: 'Pembe zeminde bakır kapaklı bakım ürünleri', price: 649.90, old: 899.90, rating: 4.5, reviews: 964, freeShip: true, fast: false, tag: null },
    { id: 21, brand: 'Pera Home', name: 'Keten Görünümlü Kırlent Kılıfı 45x45 cm', cat: 'ev', img: 'pillow', alt: 'Gri koltuk üzerinde beyaz kırlent', price: 149.90, old: 219.90, rating: 4.4, reviews: 1320, freeShip: false, fast: true, tag: null },
    { id: 22, brand: 'Kumsal', name: 'Hasır Detaylı Deri El Çantası', cat: 'ayakkabi-canta', img: 'bag-wicker', alt: 'Turuncu hasır detaylı el çantası', price: 1149.90, old: null, rating: 4.8, reviews: 187, freeShip: true, fast: false, tag: 'new' },
    { id: 23, brand: 'Tempo', name: 'Akıllı Saat Lite Kare Ekran Beyaz Kordon', cat: 'elektronik', img: 'watch-square', alt: 'Beyaz kordonlu kare ekranlı akıllı saat', price: 1399.00, old: 1899.00, rating: 4.3, reviews: 1033, freeShip: true, fast: true, tag: null },
    { id: 24, brand: 'Ambra', name: 'Woody Musk EDP Erkek Parfüm 50 ml', cat: 'kozmetik', img: 'perfume-black', alt: 'Siyah kapaklı şeffaf parfüm şişesi', price: 899.00, old: 1199.00, rating: 4.5, reviews: 688, freeShip: true, fast: false, tag: null },
    { id: 25, brand: 'Minibu', name: 'Ahşap Harf ve Rakam Blokları 30 Parça', cat: 'cocuk', img: 'blocks', alt: 'Renkli harf ve rakamlı ahşap bloklar', price: 279.90, old: 399.90, rating: 4.9, reviews: 845, freeShip: false, fast: true, tag: 'best' },
    { id: 26, brand: 'Basico', name: "5'li Basic Tişört Paketi Çok Renkli", cat: 'erkek', img: 'shirts', alt: 'Ahşap zemin üzerinde katlanmış renkli tişörtler', price: 749.90, old: 1199.90, rating: 4.4, reviews: 2210, freeShip: true, fast: true, tag: null },
    { id: 27, brand: 'Fitora', name: 'Mantar Yoga Bloğu 2li Set', cat: 'spor', img: 'yoga', alt: 'Yoga matı üzerinde iki mantar yoga bloğu', price: 329.90, old: 449.90, rating: 4.6, reviews: 402, freeShip: false, fast: true, tag: null },
    { id: 28, brand: 'Lumio', name: 'Şeffaf Çerçeve Kahverengi Cam Güneş Gözlüğü', cat: 'aksesuar', img: 'sunglasses-brown', alt: 'Deniz kenarında şeffaf çerçeveli güneş gözlüğü', price: 479.90, old: 649.90, rating: 4.2, reviews: 298, freeShip: true, fast: false, tag: null },
    { id: 29, brand: 'Pera Atelier', name: 'Hakiki Deri Sırt Çantası Laptop Bölmeli', cat: 'ayakkabi-canta', img: 'backpack', alt: 'Kahverengi deri sırt çantası', price: 1899.90, old: 2599.90, rating: 4.7, reviews: 534, freeShip: true, fast: true, tag: null }
  ];
  var byId = {};
  PRODUCTS.forEach(function (p, i) { p.order = i; byId[p.id] = p; });

  var FREE_SHIP_LIMIT = 400;
  var SHIP_FEE = 49.99;
  var PAGE = 12;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Helpers ---------- */
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  // Turkish price format: 1.299,90 TL
  function money(n) {
    var parts = (Math.round(n * 100) / 100).toFixed(2).split('.');
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + parts[1] + ' TL';
  }
  function num(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
  function dec(n) { return n.toFixed(1).replace('.', ','); }
  function off(p) { return p.old ? Math.round((1 - p.price / p.old) * 100) : 0; }
  // accent/case-insensitive Turkish matching ("canta" finds "Çanta")
  function norm(s) {
    return String(s).toLocaleLowerCase('tr-TR')
      .replace(/ı/g, 'i').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ö/g, 'o').replace(/ç/g, 'c')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  function highlight(text, q) {
    if (!q) return esc(text);
    var n = norm(text), i = n.indexOf(norm(q));
    if (i < 0) return esc(text);
    return esc(text.slice(0, i)) + '<mark>' + esc(text.slice(i, i + q.length)) + '</mark>' + esc(text.slice(i + q.length));
  }
  var store = {
    get: function (k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } }
  };
  function scrollToEl(el) {
    if (!el) return;
    el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }

  var ICON = {
    heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-9.2-9.4C1.6 7.6 3.9 4.5 7.2 4.5c2 0 3.5 1.1 4.8 2.8 1.3-1.7 2.8-2.8 4.8-2.8 3.3 0 5.6 3.1 4.4 6.6-1.7 4.8-9.2 9.4-9.2 9.4z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    bag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l-1.2 12.2a1 1 0 0 1-1 .8H7.2a1 1 0 0 1-1-.8z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 10V7a3 3 0 0 1 6 0v3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    truck: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 6h12v10H2zM14 9.5h4.5L22 13v3h-8z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="6.5" cy="17.5" r="1.8" fill="#fff" stroke="currentColor" stroke-width="1.6"/><circle cx="17.5" cy="17.5" r="1.8" fill="#fff" stroke="currentColor" stroke-width="1.6"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z" fill="currentColor"/></svg>'
  };

  /* ---------- State ---------- */
  var favs = store.get('trendora-favs-v1', []).filter(function (id) { return byId[id]; });
  var cart = store.get('trendora-cart-v1', {});
  Object.keys(cart).forEach(function (id) { if (!byId[id] || !(cart[id] > 0)) delete cart[id]; });
  var state = { cat: 'all', freeShip: false, fast: false, discount: false, rating: false, favs: false, sort: 'recommended', query: '', shown: PAGE };

  /* ---------- Toast ---------- */
  var toastEl = $('#toast'), toastTimer;
  function toast(msg, img) {
    toastEl.innerHTML = (img ? '<img src="assets/img/p-' + img + '.jpg" alt="">' : '<span class="toast-ic">' + ICON.check + '</span>') + '<span>' + msg + '</span>';
    toastEl.classList.add('is-show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('is-show'); }, 2600);
  }

  /* ---------- Cards ---------- */
  function card(p, opts) {
    opts = opts || {};
    var isFav = favs.indexOf(p.id) > -1;
    var price = opts.flash && p.flash ? p.flash.price : p.price;
    var old = opts.flash && p.flash ? (p.old || p.price) : p.old;
    var pct = old ? Math.round((1 - price / old) * 100) : 0;
    var tag = opts.flash ? '<span class="tag tag--flash">Flaş</span>'
      : p.tag === 'best' ? '<span class="tag tag--best">Çok Satan</span>'
      : p.tag === 'new' ? '<span class="tag tag--new">Yeni</span>' : '';
    var flags = (p.freeShip ? '<span class="flag flag--ship">' + ICON.truck + 'Kargo Bedava</span>' : '') +
      (p.fast ? '<span class="flag flag--fast">' + ICON.bolt + 'Hızlı Teslimat</span>' : '');
    var label = p.brand + ' ' + p.name;
    return '<article class="card' + (opts.mini ? ' card--mini' : '') + (opts.animate ? ' is-new' : '') + '" data-id="' + p.id + '">' +
      '<div class="card-media">' +
        '<img src="assets/img/p-' + p.img + '.jpg" alt="' + esc(p.alt) + '" width="480" height="640" loading="lazy">' +
        (tag ? '<div class="card-badges">' + tag + '</div>' : '') +
        '<button class="fav-btn" type="button" data-fav="' + p.id + '" aria-pressed="' + isFav + '" aria-label="' + esc(label) + ' favorilere ekle">' + ICON.heart + '</button>' +
        (flags && !opts.flash ? '<div class="card-flags">' + flags + '</div>' : '') +
      '</div>' +
      '<div class="card-body">' +
        '<h3 class="card-title"><b>' + esc(p.brand) + '</b>' + esc(p.name) + '</h3>' +
        '<div class="rating"><span class="rating-num" aria-hidden="true">' + dec(p.rating) + '</span><span class="stars" style="--r:' + p.rating + '" aria-hidden="true"></span><span class="rating-count" aria-hidden="true">(' + num(p.reviews) + ')</span>' +
          '<span class="sr-only">5 üzerinden ' + dec(p.rating) + ' puan, ' + num(p.reviews) + ' değerlendirme</span></div>' +
        (opts.flash ? '<div class="stock"><span>Stokta azaldı: <b>%' + p.flash.sold + '</b> satıldı</span><span class="stock-bar"><span style="width:' + p.flash.sold + '%"></span></span></div>' : '') +
        '<div class="price">' +
          (old ? '<s class="price-old"><span class="sr-only">Eski fiyat: </span>' + money(old) + '</s><span class="price-off">%' + pct + '</span>' : '') +
          '<strong class="price-new"><span class="sr-only">Fiyat: </span>' + money(price) + '</strong>' +
        '</div>' +
        '<button class="add-btn" type="button" data-add="' + p.id + '"' + (opts.flash ? ' data-flash="1"' : '') + ' aria-label="' + esc(label) + ' sepete ekle">' + ICON.bag + '<span>Sepete Ekle</span></button>' +
      '</div></article>';
  }

  /* ---------- Product grid: filter / sort / search ---------- */
  var grid = $('#productGrid'), resultCount = $('#resultCount'), emptyState = $('#emptyState'), loadMore = $('#loadMore');

  function matches(p) {
    if (state.cat !== 'all' && p.cat !== state.cat) return false;
    if (state.freeShip && !p.freeShip) return false;
    if (state.fast && !p.fast) return false;
    if (state.discount && !p.old) return false;
    if (state.rating && p.rating < 4.5) return false;
    if (state.favs && favs.indexOf(p.id) < 0) return false;
    if (state.query) {
      var hay = norm(p.brand + ' ' + p.name + ' ' + CATS[p.cat]);
      var words = norm(state.query).split(/\s+/).filter(Boolean);
      for (var i = 0; i < words.length; i++) if (hay.indexOf(words[i]) < 0) return false;
    }
    return true;
  }
  var SORTS = {
    recommended: function (a, b) { return a.order - b.order; },
    'price-asc': function (a, b) { return a.price - b.price; },
    'price-desc': function (a, b) { return b.price - a.price; },
    reviews: function (a, b) { return b.reviews - a.reviews; },
    rating: function (a, b) { return b.rating - a.rating || b.reviews - a.reviews; },
    discount: function (a, b) { return off(b) - off(a); }
  };
  function filtered() { return PRODUCTS.filter(matches).sort(SORTS[state.sort] || SORTS.recommended); }

  function renderGrid(animateFrom) {
    var list = filtered();
    var visible = list.slice(0, state.shown);
    grid.innerHTML = visible.map(function (p, i) {
      return '<li>' + card(p, { animate: animateFrom != null && i >= animateFrom }) + '</li>';
    }).join('');
    var label = state.cat !== 'all' ? CATS[state.cat] + ' kategorisinde ' : '';
    resultCount.textContent = list.length ? label + list.length + ' ürün listeleniyor' : '';
    emptyState.hidden = list.length > 0;
    loadMore.parentNode.hidden = list.length <= state.shown;
    $('#activeSearch').hidden = !state.query;
    $('#activeQuery').textContent = state.query ? '“' + state.query + '”' : '';
  }
  function syncControls() {
    $$('[data-filter-cat]').forEach(function (b) {
      var on = b.getAttribute('data-filter-cat') === state.cat;
      b.setAttribute('aria-pressed', on); b.classList.toggle('is-active', on);
    });
    $$('[data-toggle]').forEach(function (b) { b.setAttribute('aria-pressed', !!state[b.getAttribute('data-toggle')]); });
    $('#sortSelect').value = state.sort;
    $('#favBtn').setAttribute('aria-pressed', state.favs);
  }
  function update(opts) {
    opts = opts || {};
    if (!opts.keepPage) state.shown = PAGE;
    syncControls();
    renderGrid(opts.animateFrom);
    if (opts.scroll) scrollToEl($('#products'));
  }

  $('#catChips').addEventListener('click', function (e) {
    var b = e.target.closest('[data-filter-cat]'); if (!b) return;
    state.cat = b.getAttribute('data-filter-cat'); update();
  });
  $$('[data-toggle]').forEach(function (b) {
    b.addEventListener('click', function () { var k = b.getAttribute('data-toggle'); state[k] = !state[k]; update(); });
  });
  $('#sortSelect').addEventListener('change', function (e) { state.sort = e.target.value; update(); });
  loadMore.addEventListener('click', function () {
    var from = state.shown; state.shown += 8;
    renderGrid(from);
    var next = grid.children[from]; if (next) { var b = next.querySelector('button'); if (b) b.focus({ preventScroll: true }); }
  });
  function resetAll() {
    state.cat = 'all'; state.freeShip = state.fast = state.discount = state.rating = state.favs = false;
    state.sort = 'recommended'; state.query = ''; $('#searchInput').value = ''; update();
  }
  $('#resetFilters').addEventListener('click', resetAll);
  $('#clearSearch').addEventListener('click', function () { state.query = ''; $('#searchInput').value = ''; update(); });

  /* ---------- Flash deals + recommended rails ---------- */
  function renderFlash() {
    $('#flashRail').innerHTML = PRODUCTS.filter(function (p) { return p.flash; })
      .map(function (p) { return '<li>' + card(p, { mini: true, flash: true }) + '</li>'; }).join('');
  }
  function renderRec() {
    // favourites' categories first, then best rated items not already favourited
    var favCats = favs.map(function (id) { return byId[id].cat; });
    var list = PRODUCTS.slice().sort(function (a, b) {
      var fa = favCats.indexOf(a.cat) > -1 ? 1 : 0, fb = favCats.indexOf(b.cat) > -1 ? 1 : 0;
      return fb - fa || (b.rating * Math.log(b.reviews)) - (a.rating * Math.log(a.reviews));
    }).filter(function (p) { return favs.indexOf(p.id) < 0; }).slice(0, 10);
    $('#recRail').innerHTML = list.map(function (p) { return '<li>' + card(p, { mini: true }) + '</li>'; }).join('');
  }
  function initRails() {
    $$('[data-rail]').forEach(function (rail) {
      var track = $('.rail-track', rail), prev = $('.rail-btn--prev', rail), next = $('.rail-btn--next', rail);
      function sync() {
        var max = track.scrollWidth - track.clientWidth - 2;
        prev.disabled = track.scrollLeft <= 2;
        next.disabled = track.scrollLeft >= max;
      }
      [prev, next].forEach(function (btn) {
        btn.addEventListener('click', function () {
          track.scrollBy({ left: Number(btn.getAttribute('data-dir')) * track.clientWidth * 0.9, behavior: reduceMotion ? 'auto' : 'smooth' });
        });
      });
      track.addEventListener('scroll', function () { window.requestAnimationFrame(sync); }, { passive: true });
      window.addEventListener('resize', sync);
      sync();
    });
  }

  /* ---------- Favourites ---------- */
  var favCount = $('#favCount');
  function renderFavCount(bump) {
    favCount.textContent = favs.length; favCount.hidden = favs.length === 0;
    $('#favBtn').setAttribute('aria-label', 'Favorilerim (' + favs.length + ' ürün)');
    if (bump) { favCount.classList.remove('bump'); void favCount.offsetWidth; favCount.classList.add('bump'); }
  }
  function toggleFav(id, btn) {
    var p = byId[id], i = favs.indexOf(id), on = i < 0;
    if (on) favs.push(id); else favs.splice(i, 1);
    store.set('trendora-favs-v1', favs);
    $$('[data-fav="' + id + '"]').forEach(function (b) { b.setAttribute('aria-pressed', on); });
    if (btn) { btn.classList.remove('pop'); void btn.offsetWidth; btn.classList.add('pop'); }
    renderFavCount(true);
    toast(on ? '<b>' + esc(p.brand) + '</b> ürünü favorilerine eklendi.' : 'Ürün favorilerinden çıkarıldı.', on ? p.img : null);
    if (state.favs) renderGrid();
  }
  $('#favBtn').addEventListener('click', function () {
    state.favs = !state.favs;
    if (state.favs && !favs.length) toast('Henüz favori ürünün yok. Kalp ikonuna dokunarak ekleyebilirsin.');
    update({ scroll: true });
  });

  /* ---------- Cart ---------- */
  var cartCount = $('#cartCount');
  function cartQty() { return Object.keys(cart).reduce(function (s, id) { return s + cart[id]; }, 0); }
  function unitPrice(id) { return byId[id].price; }
  function saveCart() { store.set('trendora-cart-v1', cart); }
  function renderCartCount(bump) {
    var q = cartQty();
    cartCount.textContent = q > 99 ? '99+' : q; cartCount.hidden = q === 0;
    $('#cartBtn').setAttribute('aria-label', 'Sepetim (' + q + ' ürün)');
    if (bump) { cartCount.classList.remove('bump'); void cartCount.offsetWidth; cartCount.classList.add('bump'); }
  }
  function renderCart() {
    var ids = Object.keys(cart), q = cartQty();
    var subtotal = ids.reduce(function (s, id) { return s + unitPrice(id) * cart[id]; }, 0);
    var ship = subtotal >= FREE_SHIP_LIMIT || !ids.length ? 0 : SHIP_FEE;
    $('#cartHeadCount').textContent = '(' + q + ' ürün)';
    $('#cartItems').innerHTML = ids.map(function (id) {
      var p = byId[id];
      return '<li class="cart-item"><img src="assets/img/p-' + p.img + '.jpg" alt="" width="64" height="85">' +
        '<div><p class="ci-name"><b>' + esc(p.brand) + '</b> ' + esc(p.name) + '</p>' +
        (p.fast ? '<p class="ci-ship">Hızlı teslimat: yarın kapında</p>' : '') +
        '<div class="qty" role="group" aria-label="Adet"><button type="button" data-qty="-1" data-id="' + id + '" aria-label="Adeti azalt">−</button><span aria-live="polite">' + cart[id] + '</span><button type="button" data-qty="1" data-id="' + id + '" aria-label="Adeti artır">+</button></div></div>' +
        '<div class="ci-right"><span class="ci-price">' + money(p.price * cart[id]) + '</span><button class="ci-remove" type="button" data-remove="' + id + '">Sil</button></div></li>';
    }).join('');
    $('#cartEmpty').hidden = ids.length > 0;
    $('#cartFoot').hidden = !ids.length;
    $('#shipBar').hidden = !ids.length;
    var left = FREE_SHIP_LIMIT - subtotal;
    $('#shipText').innerHTML = left > 0 ? 'Kargo bedava için <b>' + money(left) + '</b>’lik daha ürün ekle.' : 'Tebrikler! Siparişin <b>kargo bedava</b>.';
    $('#shipFill').style.width = Math.min(100, subtotal / FREE_SHIP_LIMIT * 100) + '%';
    $('#sumItems').textContent = money(subtotal);
    $('#sumShip').textContent = ship ? money(ship) : 'Bedava';
    $('#sumTotal').textContent = money(subtotal + ship);
  }
  function addToCart(id, btn) {
    var p = byId[id];
    cart[id] = (cart[id] || 0) + 1; saveCart();
    renderCartCount(true); renderCart();
    toast('<b>' + esc(p.brand) + '</b> ürünü sepetine eklendi.', p.img);
    if (btn) {
      btn.classList.add('is-added'); $('span', btn).textContent = 'Sepete Eklendi';
      clearTimeout(btn._t);
      btn._t = setTimeout(function () { btn.classList.remove('is-added'); $('span', btn).textContent = 'Sepete Ekle'; }, 1600);
    }
  }
  $('#cartItems').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    var id = b.getAttribute('data-id') || b.getAttribute('data-remove');
    if (b.hasAttribute('data-remove')) delete cart[id];
    else { cart[id] += Number(b.getAttribute('data-qty')); if (cart[id] <= 0) delete cart[id]; }
    saveCart(); renderCartCount(); renderCart();
    if (!Object.keys(cart).length) $('#cart [data-close]').focus();
  });
  $('#checkoutBtn').addEventListener('click', function () { toast('Bu bir portfolyo demosu — ödeme adımı bulunmuyor.'); });

  /* ---------- Overlays: drawer + cart (focus trap, Esc, scrim) ---------- */
  var scrim = $('#scrim'), openPanel = null, lastFocus = null;
  function focusables(el) { return $$('a[href], button:not([disabled]), input, select, summary, [tabindex]:not([tabindex="-1"])', el).filter(function (x) { return x.offsetParent !== null; }); }
  function openOverlay(panel, trigger) {
    if (openPanel) closeOverlay(true);
    closeMega();
    openPanel = panel; lastFocus = trigger || document.activeElement;
    panel.hidden = false; scrim.hidden = false;
    document.body.classList.add('no-scroll');
    if (trigger) trigger.setAttribute('aria-expanded', 'true');
    var f = focusables(panel); if (f.length) f[0].focus();
  }
  function closeOverlay(silent) {
    if (!openPanel) return;
    var trig = openPanel.id === 'drawer' ? $('#menuBtn') : $('#cartBtn');
    trig.setAttribute('aria-expanded', 'false');
    openPanel.hidden = true; scrim.hidden = true; openPanel = null;
    document.body.classList.remove('no-scroll');
    if (!silent && lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  $('#menuBtn').addEventListener('click', function () { openOverlay($('#drawer'), this); });
  $('#cartBtn').addEventListener('click', function () { renderCart(); openOverlay($('#cart'), this); });
  scrim.addEventListener('click', function () { closeOverlay(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { if (openPanel) closeOverlay(); closeMega(true); closeSuggest(); }
    if (e.key === 'Tab' && openPanel) {
      var f = focusables(openPanel); if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  window.addEventListener('resize', function () { if (openPanel && openPanel.id === 'drawer' && window.innerWidth > 860) closeOverlay(true); });

  /* ---------- Mega menu (hover intent + keyboard) ---------- */
  var megaOpen = null, megaTimer;
  function setMega(item) {
    if (megaOpen === item) return;
    if (megaOpen) { $('.mega', megaOpen).hidden = true; $('.catnav-btn', megaOpen).setAttribute('aria-expanded', 'false'); }
    megaOpen = item;
    if (item) { $('.mega', item).hidden = false; $('.catnav-btn', item).setAttribute('aria-expanded', 'true'); }
  }
  function closeMega(focusBtn) {
    clearTimeout(megaTimer);
    if (megaOpen && focusBtn && megaOpen.contains(document.activeElement)) $('.catnav-btn', megaOpen).focus();
    setMega(null);
  }
  $$('.catnav-item').forEach(function (item) {
    var btn = $('.catnav-btn', item); if (!btn) return;
    item.addEventListener('mouseenter', function () { clearTimeout(megaTimer); megaTimer = setTimeout(function () { setMega(item); }, megaOpen ? 0 : 140); });
    item.addEventListener('mouseleave', function () { clearTimeout(megaTimer); megaTimer = setTimeout(function () { if (megaOpen === item) setMega(null); }, 180); });
    btn.addEventListener('click', function () { clearTimeout(megaTimer); setMega(megaOpen === item ? null : item); });
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); setMega(item); var a = $('.mega a', item); if (a) a.focus(); }
    });
    item.addEventListener('focusout', function (e) { if (!item.contains(e.relatedTarget) && megaOpen === item) setMega(null); });
  });
  $$('.catnav-item:not(:has(.catnav-btn))').forEach(function (item) {
    item.addEventListener('mouseenter', function () { clearTimeout(megaTimer); megaTimer = setTimeout(function () { setMega(null); }, 120); });
  });

  /* ---------- Global delegated actions ---------- */
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-fav], [data-add], [data-cat], [data-sort], [data-close], [data-demo], [data-coupon], a[href="#account"]');
    if (!t) return;
    if (t.hasAttribute('data-fav')) { toggleFav(Number(t.getAttribute('data-fav')), t); return; }
    if (t.hasAttribute('data-add')) { addToCart(Number(t.getAttribute('data-add')), t); return; }
    if (t.hasAttribute('data-coupon')) {
      var code = t.getAttribute('data-coupon'), taken = store.get('trendora-coupons-v1', []);
      if (taken.indexOf(code) < 0) { taken.push(code); store.set('trendora-coupons-v1', taken); }
      t.classList.add('is-taken'); t.textContent = 'Alındı ✓';
      toast('<b>' + esc(code) + '</b> kuponu hesabına tanımlandı.'); return;
    }
    if (t.hasAttribute('data-demo')) { e.preventDefault(); toast(esc(t.getAttribute('data-demo'))); return; }
    if (t.matches('a[href="#account"]')) { e.preventDefault(); closeOverlay(true); toast('Giriş ve üyelik bu demo sürümde aktif değil.'); return; }
    if (t.hasAttribute('data-cat')) {
      e.preventDefault(); closeOverlay(true); closeMega();
      state.cat = t.getAttribute('data-cat'); state.query = ''; $('#searchInput').value = '';
      update({ scroll: true }); return;
    }
    if (t.hasAttribute('data-sort')) {
      e.preventDefault(); closeOverlay(true); closeMega();
      state.sort = t.getAttribute('data-sort'); update({ scroll: true }); return;
    }
    if (t.hasAttribute('data-close')) { closeOverlay(); }
  });
  // plain in-page links inside the drawer close it
  $('#drawer').addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]'); if (a && !a.hasAttribute('data-cat') && a.getAttribute('href') !== '#account') closeOverlay(true);
  });

  /* ---------- Search with suggestions ---------- */
  var input = $('#searchInput'), suggest = $('#suggest'), sugIndex = -1;
  function closeSuggest() { suggest.hidden = true; input.setAttribute('aria-expanded', 'false'); input.removeAttribute('aria-activedescendant'); sugIndex = -1; }
  function renderSuggest() {
    var q = input.value.trim();
    if (q.length < 2) { closeSuggest(); return; }
    var nq = norm(q);
    var cats = Object.keys(CATS).filter(function (k) { return norm(CATS[k]).indexOf(nq) > -1; }).slice(0, 3);
    var prods = PRODUCTS.filter(function (p) { return norm(p.brand + ' ' + p.name + ' ' + CATS[p.cat]).indexOf(nq) > -1; }).slice(0, 5);
    var html = '';
    if (cats.length) html += '<div class="suggest-group" role="presentation">Kategoriler</div>' + cats.map(function (k, i) {
      return '<button type="button" class="suggest-item" role="option" id="sg-c' + i + '" data-scat="' + k + '" aria-selected="false"><span>' + highlight(CATS[k], q) + '</span><span class="s-price" style="color:var(--muted);font-weight:400">kategorisi</span></button>';
    }).join('');
    if (prods.length) html += '<div class="suggest-group" role="presentation">Ürünler</div>' + prods.map(function (p, i) {
      return '<button type="button" class="suggest-item" role="option" id="sg-p' + i + '" data-sprod="' + p.id + '" aria-selected="false"><img src="assets/img/p-' + p.img + '.jpg" alt=""><span><span class="s-name">' + highlight(p.brand + ' ' + p.name, q) + '</span><span class="s-meta">' + esc(CATS[p.cat]) + '</span></span><span class="s-price">' + money(p.price) + '</span></button>';
    }).join('');
    if (!html) html = '<p class="suggest-empty">“' + esc(q) + '” için öneri bulunamadı. Enter ile tüm ürünlerde ara.</p>';
    suggest.innerHTML = html; suggest.hidden = false; input.setAttribute('aria-expanded', 'true'); sugIndex = -1;
  }
  function runSearch(q) {
    state.query = q.trim(); state.cat = 'all'; closeSuggest(); input.blur();
    update({ scroll: true });
  }
  input.addEventListener('input', renderSuggest);
  input.addEventListener('focus', function () { if (input.value.trim().length >= 2) renderSuggest(); });
  input.addEventListener('keydown', function (e) {
    var items = $$('.suggest-item', suggest);
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      if (suggest.hidden || !items.length) return;
      e.preventDefault();
      sugIndex = (sugIndex + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
      items.forEach(function (it, i) { it.setAttribute('aria-selected', i === sugIndex); });
      input.setAttribute('aria-activedescendant', items[sugIndex].id);
      items[sugIndex].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter' && sugIndex > -1 && items[sugIndex]) { e.preventDefault(); items[sugIndex].click(); }
  });
  $('#searchForm').addEventListener('submit', function (e) { e.preventDefault(); runSearch(input.value); });
  suggest.addEventListener('mousedown', function (e) { e.preventDefault(); }); // keep focus while clicking
  suggest.addEventListener('click', function (e) {
    var b = e.target.closest('.suggest-item'); if (!b) return;
    if (b.hasAttribute('data-scat')) { input.value = ''; state.query = ''; state.cat = b.getAttribute('data-scat'); closeSuggest(); input.blur(); update({ scroll: true }); }
    else { var p = byId[b.getAttribute('data-sprod')]; input.value = p.brand + ' ' + p.name; runSearch(input.value); }
  });
  document.addEventListener('click', function (e) { if (!e.target.closest('#searchForm')) closeSuggest(); });

  /* ---------- Hero carousel ---------- */
  (function hero() {
    var root = $('#hero'), track = $('#heroTrack'), slides = $$('.hero-slide', track), dotsWrap = $('#heroDots');
    var index = 0, timer = null, DUR = 5000, hovering = false, focused = false;
    var auto = !reduceMotion;
    if (!auto) root.classList.add('no-auto');
    root.style.setProperty('--dur', DUR / 1000 + 's');
    dotsWrap.innerHTML = slides.map(function (s, i) { return '<button class="hero-dot" type="button" aria-label="Kampanya ' + (i + 1) + '"><span></span></button>'; }).join('');
    var dots = $$('.hero-dot', dotsWrap);
    function render() {
      track.style.transform = 'translateX(' + (-index * 100) + '%)';
      slides.forEach(function (s, i) { var on = i === index; s.setAttribute('aria-hidden', !on); s.inert = !on; });
      dots.forEach(function (d, i) {
        var on = i === index; d.classList.toggle('is-active', on);
        if (on) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current');
        var bar = d.firstChild; bar.style.animation = 'none'; void bar.offsetWidth; bar.style.animation = '';
      });
    }
    function paused() { return !auto || hovering || focused || document.hidden; }
    function schedule() {
      clearTimeout(timer);
      root.classList.toggle('is-paused', paused());
      if (!paused()) timer = setTimeout(function () { go(index + 1); }, DUR);
    }
    function go(i) { index = (i + slides.length) % slides.length; render(); schedule(); }
    $('#heroPrev').addEventListener('click', function () { go(index - 1); });
    $('#heroNext').addEventListener('click', function () { go(index + 1); });
    dots.forEach(function (d, i) { d.addEventListener('click', function () { go(i); }); });
    root.addEventListener('mouseenter', function () { hovering = true; schedule(); });
    root.addEventListener('mouseleave', function () { hovering = false; go(index); });
    // pause only for keyboard focus, so a mouse click on a dot doesn't stop autoplay
    root.addEventListener('focusin', function () { focused = !!root.querySelector(':focus-visible'); schedule(); });
    root.addEventListener('focusout', function (e) { if (!root.contains(e.relatedTarget)) { focused = false; go(index); } });
    root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
    });
    document.addEventListener('visibilitychange', schedule);
    // swipe / drag
    var startX = null, dx = 0, w = 1, pid = null;
    var viewport = $('.hero-viewport', root);
    viewport.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      startX = e.clientX; dx = 0; w = viewport.clientWidth; pid = e.pointerId;
    });
    viewport.addEventListener('pointermove', function (e) {
      if (startX == null || e.pointerId !== pid) return;
      dx = e.clientX - startX;
      if (Math.abs(dx) > 6) {
        track.classList.add('is-dragging');
        track.style.transform = 'translateX(calc(' + (-index * 100) + '% + ' + dx + 'px))';
      }
    });
    function end() {
      if (startX == null) return;
      track.classList.remove('is-dragging');
      var moved = dx; startX = null;
      if (Math.abs(moved) > Math.min(80, w * 0.15)) go(index + (moved < 0 ? 1 : -1)); else render();
    }
    viewport.addEventListener('pointerup', end);
    viewport.addEventListener('pointercancel', end);
    viewport.addEventListener('pointerleave', end);
    viewport.addEventListener('click', function (e) { if (Math.abs(dx) > 6) { e.preventDefault(); e.stopPropagation(); dx = 0; } }, true);
    $$('img', track).forEach(function (img) { img.draggable = false; });
    render(); schedule();
  })();

  /* ---------- Countdown (to midnight, local time) ---------- */
  (function countdown() {
    var h = $('#cdH'), m = $('#cdM'), s = $('#cdS'), sr = $('#cdText'), lastMin = -1;
    function pad(n) { return (n < 10 ? '0' : '') + n; }
    function tick() {
      var now = new Date(), end = new Date(now); end.setHours(24, 0, 0, 0);
      var left = Math.max(0, Math.floor((end - now) / 1000));
      var hh = Math.floor(left / 3600), mm = Math.floor(left % 3600 / 60), ss = left % 60;
      h.textContent = pad(hh); m.textContent = pad(mm); s.textContent = pad(ss);
      if (mm !== lastMin) { lastMin = mm; sr.textContent = hh + ' saat ' + mm + ' dakika kaldı'; }
    }
    tick(); setInterval(tick, 1000);
  })();

  /* ---------- Stories ---------- */
  var seen = store.get('trendora-stories-v1', []);
  $$('.story').forEach(function (b) {
    var k = b.getAttribute('data-story');
    if (seen.indexOf(k) > -1) b.classList.add('is-seen');
    b.addEventListener('click', function () {
      if (seen.indexOf(k) < 0) { seen.push(k); store.set('trendora-stories-v1', seen); }
      b.classList.add('is-seen');
      if (k === 'flash') return scrollToEl($('#flash'));
      if (k === 'kupon') return scrollToEl($('#coupons'));
      state.cat = k; state.query = ''; input.value = ''; update({ scroll: true });
    });
  });

  /* ---------- Coupons already taken ---------- */
  store.get('trendora-coupons-v1', []).forEach(function (code) {
    var b = $('[data-coupon="' + code + '"]'); if (b) { b.classList.add('is-taken'); b.textContent = 'Alındı ✓'; }
  });

  /* ---------- Sticky header shadow ---------- */
  var header = $('#header'), ticking = false;
  function onScroll() { header.classList.toggle('is-stuck', window.scrollY > 32); ticking = false; }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* ---------- Footer accordion (mobile) ---------- */
  var mq = window.matchMedia('(max-width: 640px)');
  function syncFooter() {
    $$('.f-col').forEach(function (col) {
      var btn = $('.f-toggle', col);
      col.classList.toggle('is-collapsed', mq.matches);
      btn.setAttribute('aria-expanded', !mq.matches);
      btn.tabIndex = mq.matches ? 0 : -1;
    });
  }
  $$('.f-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!mq.matches) return;
      var col = btn.closest('.f-col'), open = col.classList.toggle('is-collapsed') === false;
      btn.setAttribute('aria-expanded', open);
    });
  });
  if (mq.addEventListener) mq.addEventListener('change', syncFooter); else mq.addListener(syncFooter);
  syncFooter();

  /* ---------- Newsletter (no data is sent or stored) ---------- */
  $('#newsletter').addEventListener('submit', function (e) {
    e.preventDefault();
    var name = $('#nlName').value.trim();
    toast('Teşekkürler' + (name ? ', <b>' + esc(name) + '</b>' : '') + '! Bu bir demo; hiçbir bilgi kaydedilmez.');
    e.target.reset();
  });

  /* ---------- Init ---------- */
  $('#year').textContent = new Date().getFullYear();
  renderFlash(); renderRec(); initRails();
  renderFavCount(); renderCartCount(); renderCart();
  update();
})();
