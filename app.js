/**
   * Premium Rental Landing Page - Interactive Controller
   * Styled like Gemini Canvas
   */

document.addEventListener("DOMContentLoaded", () => {
  // SVG Icon Registry for UI cards
  const SVG_ICONS = {
    square: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>',
    home: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
    bed: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16M2 8h20M2 12h20M2 16h20M22 4v16M18 8v4M6 8v4"></path></svg>',
    droplet: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z"></path></svg>',
    layers: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polygon points="2 17 12 22 22 17"></polygon><polygon points="2 12 12 17 22 12"></polygon></svg>',
    'file-text': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>',
    truck: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>',
    'shopping-bag': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>',
    users: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    moon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>',
    coffee: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 8 0v1a4 4 0 0 1-8 0v-1Z"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>',
    sun: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
    zap: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
    'map-pin': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>'
  };

  // State Management
  let activePhotos = [];
  let filteredPhotos = [];
  let currentSlideIndex = 0;
  let activeFilter = "all";

  // Google Drive Image URL Resolver (high speed thumbnail renderer)
  function getDriveImageUrl(id, width = 1200) {
    return `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;
  }

  // Load and Initialize Data
  async function init() {
    let rawPhotos = CONFIG.assets.photos;
    let videoData = CONFIG.assets.video;

    // Check if Apps Script is configured
    if (CONFIG.appsScriptUrl) {
      try {
        const response = await fetch(CONFIG.appsScriptUrl);
        const data = await response.json();
        if (data.success) {
          rawPhotos = data.photos.length ? data.photos : rawPhotos;
          videoData = data.video ? data.video : videoData;
          console.log("Assets loaded dynamically via Apps Script.");
        }
      } catch (err) {
        console.warn("Failed to fetch from Apps Script, falling back to static config mapping.", err);
      }
    }

    activePhotos = rawPhotos;
    filteredPhotos = [...activePhotos];

    // Initialize Components
    renderHeroSection();
    renderSpecifications();
    renderFacilities();
    renderVideoTour(videoData);
    setupGalleryFilters();
    renderGallery();
    setupRentCalculator();
    setupLightbox();
    setupStaticData();
  }

  // Set up owner info, maps, links in static sections
  function setupStaticData() {
    // Alamat & Jarak KRL
    const addressContainer = document.getElementById("address-details");
    if (addressContainer) {
      addressContainer.innerHTML = `
        ${SVG_ICONS['map-pin']}
        <div>
          <p style="font-weight: 600; color: var(--text-primary); margin-bottom: 4px;">Grand Residence Indah</p>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 8px;">${CONFIG.details.lokasi.alamat}</p>
          <span style="display: inline-block; font-size: 0.85rem; padding: 4px 10px; background: rgba(99, 102, 241, 0.15); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 100px; color: #a5b4fc;">
            ${CONFIG.details.lokasi.jarakStasiun}
          </span>
        </div>
      `;
    }

    // Floating WhatsApp Owner link sync
    const waButtons = document.querySelectorAll(".wa-contact-btn");
    waButtons.forEach(btn => {
      btn.href = CONFIG.owner.whatsapp;
    });

    const tgButtons = document.querySelectorAll(".tg-contact-btn");
    tgButtons.forEach(btn => {
      btn.href = CONFIG.owner.telegram;
    });

    // Owner info in card
    const ownerAvatar = document.querySelector(".owner-avatar");
    if (ownerAvatar) ownerAvatar.textContent = CONFIG.owner.name.split(" ").map(n => n[0]).join("");

    const ownerName = document.querySelector(".owner-name");
    if (ownerName) ownerName.textContent = CONFIG.owner.name;
  }

  // Hero Section Renderer
  function renderHeroSection() {
    const coverPhoto = activePhotos.find(p => p.tag === "Cover") || activePhotos[0];
    const heroBg = document.querySelector(".hero-bg");
    if (heroBg && coverPhoto) {
      heroBg.src = getDriveImageUrl(coverPhoto.id, 1600);
    }
  }

  // Specifications Tiles Renderer
  function renderSpecifications() {
    const grid = document.getElementById("spec-grid-container");
    if (!grid) return;

    grid.innerHTML = CONFIG.details.spesifikasi.map(spec => `
      <div class="spec-tile">
        <div class="spec-tile-icon">${SVG_ICONS[spec.icon] || ""}</div>
        <span class="spec-tile-label">${spec.label}</span>
        <span class="spec-tile-value">${spec.value}</span>
      </div>
    `).join("");
  }

  // Facilities Grid Renderer
  function renderFacilities() {
    const grid = document.getElementById("facilities-grid-container");
    if (!grid) return;

    grid.innerHTML = CONFIG.details.fasilitas.map(fac => {
      // Highlight "Garasi Warung" to stress business value as requested
      const isHighlight = fac.name.toLowerCase().includes("warung") || fac.name.toLowerCase().includes("toko");
      return `
        <div class="facility-card ${isHighlight ? 'highlight-facility' : ''}">
          <div class="facility-icon">${SVG_ICONS[fac.icon] || ""}</div>
          <div class="facility-info">
            <span class="facility-name">${fac.name} ${isHighlight ? '<span style="font-size: 0.7rem; color: #a855f7; border: 1px solid rgba(168, 85, 247, 0.4); background: rgba(168, 85, 247, 0.1); padding: 2px 6px; border-radius: 4px; margin-left: 6px; vertical-align: middle; text-transform: uppercase; font-weight: 600;">Cocok Usaha</span>' : ''}</span>
            <span class="facility-desc">${fac.desc}</span>
          </div>
        </div>
      `;
    }).join("");
  }

  // Video Tour Widget Renderer
  function renderVideoTour(video) {
    const container = document.getElementById("video-tour-container");
    if (!container || !video) return;

    container.innerHTML = `
      <iframe src="${video.embedUrl}" allow="autoplay" allowfullscreen></iframe>
    `;
  }

  // Setup Image Filters
  function setupGalleryFilters() {
    const filters = document.querySelectorAll(".tag-btn");
    filters.forEach(btn => {
      btn.addEventListener("click", () => {
        filters.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        activeFilter = btn.dataset.filter;
        
        if (activeFilter === "all") {
          filteredPhotos = [...activePhotos];
        } else {
          filteredPhotos = activePhotos.filter(p => p.tag.toLowerCase() === activeFilter);
        }
        
        currentSlideIndex = 0;
        renderGallery();
      });
    });
  }

  // Render Carousel and Thumbnails
  function renderGallery() {
    const track = document.getElementById("carousel-track");
    const nav = document.getElementById("carousel-nav");
    const thumbStrip = document.getElementById("thumbnail-strip");
    
    if (!track) return;
    
    if (filteredPhotos.length === 0) {
      track.innerHTML = '<li style="padding: 40px; text-align: center; width: 100%;">Tidak ada foto untuk kategori ini.</li>';
      if (nav) nav.innerHTML = "";
      if (thumbStrip) thumbStrip.innerHTML = "";
      return;
    }

    // Render Track Slides
    track.innerHTML = filteredPhotos.map((photo, index) => `
      <li class="carousel-slide" data-index="${index}">
        <img class="carousel-img" src="${getDriveImageUrl(photo.id, 1200)}" alt="${photo.name}" loading="lazy">
        <div class="carousel-slide-caption">
          <span>${photo.name.replace(/^\d+\.\s*/, "").split(".")[0]}</span>
          <span class="slide-tag">${photo.tag}</span>
        </div>
      </li>
    `).join("");

    // Render Nav Dots
    if (nav) {
      nav.innerHTML = filteredPhotos.map((_, index) => `
        <button class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Slide ${index + 1}"></button>
      `).join("");

      // Add click events to dots
      const dots = nav.querySelectorAll(".carousel-dot");
      dots.forEach(dot => {
        dot.addEventListener("click", () => {
          goToSlide(parseInt(dot.dataset.index));
        });
      });
    }

    // Render Thumbnail Strip
    if (thumbStrip) {
      thumbStrip.innerHTML = filteredPhotos.map((photo, index) => `
        <div class="thumbnail-item ${index === 0 ? 'active' : ''}" data-index="${index}">
          <img src="${getDriveImageUrl(photo.id, 150)}" alt="Mini ${photo.name}" loading="lazy">
        </div>
      `).join("");

      // Add click events to thumbnails
      const thumbs = thumbStrip.querySelectorAll(".thumbnail-item");
      thumbs.forEach(thumb => {
        thumb.addEventListener("click", () => {
          goToSlide(parseInt(thumb.dataset.index));
        });
      });
    }

    // Reset slide position
    goToSlide(0);

    // Setup Click Event on main slide to launch Lightbox Zoom
    const slides = track.querySelectorAll(".carousel-slide");
    slides.forEach(slide => {
      slide.addEventListener("click", () => {
        openLightbox(parseInt(slide.dataset.index));
      });
    });
  }

  // Slide Navigation
  function goToSlide(index) {
    const track = document.getElementById("carousel-track");
    if (!track) return;
    
    currentSlideIndex = index;
    
    // Apply smooth sliding translation
    track.style.transform = `translateX(-${index * 100}%)`;
    
    // Sync navigation dots
    const dots = document.querySelectorAll(".carousel-nav .carousel-dot");
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });

    // Sync thumbnails
    const thumbs = document.querySelectorAll(".thumbnail-strip .thumbnail-item");
    thumbs.forEach((thumb, idx) => {
      thumb.classList.toggle("active", idx === index);
    });

    // Auto scroll thumb strip to keep active thumbnail visible
    const activeThumb = thumbs[index];
    if (activeThumb) {
      const container = document.getElementById("thumbnail-strip");
      const thumbLeft = activeThumb.offsetLeft;
      const thumbWidth = activeThumb.offsetWidth;
      const containerWidth = container.offsetWidth;
      container.scrollTo({
        left: thumbLeft - (containerWidth / 2) + (thumbWidth / 2),
        behavior: 'smooth'
      });
    }
  }

  // Setup Arrow Controls for Carousel
  const prevBtn = document.getElementById("carousel-btn-prev");
  const nextBtn = document.getElementById("carousel-btn-next");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      let idx = currentSlideIndex - 1;
      if (idx < 0) idx = filteredPhotos.length - 1;
      goToSlide(idx);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      let idx = currentSlideIndex + 1;
      if (idx >= filteredPhotos.length) idx = 0;
      goToSlide(idx);
    });
  }

  // ==========================================================================
  // RENT CALCULATOR
  // ==========================================================================
  function setupRentCalculator() {
    const monthlyBtn = document.getElementById("calc-monthly-btn");
    const quarterlyBtn = document.getElementById("calc-quarterly-btn");
    const labelDurasi = document.getElementById("calc-label-durasi");
    const valSewa = document.getElementById("calc-val-sewa");
    const valTotal = document.getElementById("calc-total-val");

    if (!monthlyBtn || !quarterlyBtn || !labelDurasi || !valSewa || !valTotal) return;

    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    });

    function setRentalPeriod(period) {
      if (period === "monthly") {
        monthlyBtn.classList.add("active");
        quarterlyBtn.classList.remove("active");
        labelDurasi.textContent = "1 Bulan";
        valSewa.textContent = formatter.format(CONFIG.details.harga.bulanan);
        valTotal.textContent = formatter.format(CONFIG.details.harga.bulanan);
        
        // Update price display on sidebar too
        const sidebarPriceVal = document.getElementById("sidebar-price-val");
        const sidebarPricePeriod = document.getElementById("sidebar-price-period");
        if (sidebarPriceVal) sidebarPriceVal.textContent = formatter.format(CONFIG.details.harga.bulanan).replace("Rp", "").trim();
        if (sidebarPricePeriod) sidebarPricePeriod.textContent = "/ Bulan";
        
        // Sync WhatsApp direct link to mention monthly interest
        syncWhatsAppLink("Bulanan");
      } else {
        quarterlyBtn.classList.add("active");
        monthlyBtn.classList.remove("active");
        labelDurasi.textContent = "3 Bulan";
        valSewa.textContent = formatter.format(CONFIG.details.harga.tigaBulanan);
        valTotal.textContent = formatter.format(CONFIG.details.harga.tigaBulanan);
        
        // Update price display on sidebar too
        const sidebarPriceVal = document.getElementById("sidebar-price-val");
        const sidebarPricePeriod = document.getElementById("sidebar-price-period");
        if (sidebarPriceVal) sidebarPriceVal.textContent = formatter.format(CONFIG.details.harga.tigaBulanan).replace("Rp", "").trim();
        if (sidebarPricePeriod) sidebarPricePeriod.textContent = "/ 3 Bulan";
        
        // Sync WhatsApp direct link to mention 3-month interest
        syncWhatsAppLink("Per 3 Bulan");
      }
    }

    function syncWhatsAppLink(schemeText) {
      const waButtons = document.querySelectorAll(".wa-contact-btn");
      const baseMsg = `Halo Pak Febri, saya tertarik sewa kontrakan di Grand Residence Indah dengan skema pembayaran [${schemeText}]. Apakah bisa jadwal survei lokasi?`;
      const encodedMsg = encodeURIComponent(baseMsg);
      const customWaUrl = `https://api.whatsapp.com/send/?phone=6287888893111&text=${encodedMsg}&type=phone_number&app_absent=0`;
      
      waButtons.forEach(btn => {
        btn.href = customWaUrl;
      });
    }

    monthlyBtn.addEventListener("click", () => setRentalPeriod("monthly"));
    quarterlyBtn.addEventListener("click", () => setRentalPeriod("quarterly"));

    // Initial load: monthly
    setRentalPeriod("monthly");
  }

  // ==========================================================================
  // LIGHTBOX MODAL
  // ==========================================================================
  let lightboxActiveIndex = 0;

  function setupLightbox() {
    const modal = document.getElementById("lightbox-modal");
    const closeBtn = document.getElementById("lightbox-close");
    const prevBtn = document.getElementById("lightbox-btn-prev");
    const nextBtn = document.getElementById("lightbox-btn-next");

    if (!modal || !closeBtn) return;

    closeBtn.addEventListener("click", closeLightbox);
    
    // Close on overlay click
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeLightbox();
    });

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        let idx = lightboxActiveIndex - 1;
        if (idx < 0) idx = filteredPhotos.length - 1;
        updateLightboxImage(idx);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        let idx = lightboxActiveIndex + 1;
        if (idx >= filteredPhotos.length) idx = 0;
        updateLightboxImage(idx);
      });
    }

    // Keyboard controls
    document.addEventListener("keydown", (e) => {
      if (!modal.classList.contains("active")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevBtn && prevBtn.click();
      if (e.key === "ArrowRight") nextBtn && nextBtn.click();
    });
  }

  function openLightbox(index) {
    const modal = document.getElementById("lightbox-modal");
    if (!modal) return;
    
    modal.classList.add("active");
    updateLightboxImage(index);
  }

  function closeLightbox() {
    const modal = document.getElementById("lightbox-modal");
    if (modal) modal.classList.remove("active");
  }

  function updateLightboxImage(index) {
    lightboxActiveIndex = index;
    const img = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");
    const photo = filteredPhotos[index];

    if (img && photo) {
      img.src = getDriveImageUrl(photo.id, 1600);
      img.alt = photo.name;
    }

    if (caption && photo) {
      caption.textContent = photo.name.replace(/^\d+\.\s*/, "").split(".")[0];
    }
  }

  // Start the initialization sequence
  init();
});
