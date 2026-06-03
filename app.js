/**
 * Premium Rental Landing Page - Interactive Controller
 * Styled like Gemini Canvas & Juventus Landing Experience
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
  let carouselAutoplayInterval = null;

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
    setupSplashHero();
    setupNavbarScroll();
    renderHeroSection();
    renderSpecifications();
    renderFacilities();
    renderVideoTour(videoData);
    setupGalleryFilters();
    renderGallery();
    setupRentCalculator();
    setupLightbox();
    setupStaticData();
    setupScrollIndicator();
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
          <span style="display: inline-block; font-size: 0.85rem; padding: 4px 10px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 100px; color: var(--text-secondary); font-family: var(--font-mono);">
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

    // Owner Photo or Initial in card
    const ownerAvatarContainer = document.getElementById("owner-avatar-container");
    if (ownerAvatarContainer) {
      if (CONFIG.owner.photoUrl) {
        ownerAvatarContainer.innerHTML = `<img src="${CONFIG.owner.photoUrl}" class="owner-avatar-img" alt="${CONFIG.owner.name}">`;
      } else {
        ownerAvatarContainer.textContent = CONFIG.owner.name.split(" ").map(n => n[0]).join("");
      }
    }

    const ownerName = document.querySelector(".owner-name");
    if (ownerName) ownerName.textContent = CONFIG.owner.name;
  }

  // Setup Juventus-style Fullscreen Intro Slideshow
  function setupSplashHero() {
    const slideshow = document.getElementById("splash-slideshow");
    if (!slideshow) return;

    // Pick 4-5 dynamic photos to showcase
    const splashPhotoTags = ["Cover", "Exterior", "Interior", "Garden"];
    const splashPhotos = [];
    
    // Select one photo for each category tag for variation
    splashPhotoTags.forEach(tag => {
      const match = activePhotos.find(p => p.tag.toLowerCase() === tag.toLowerCase());
      if (match) splashPhotos.push(match);
    });

    // Fallback if tags not found
    if (splashPhotos.length < 3) {
      splashPhotos.push(...activePhotos.slice(0, 4));
    }

    // Render splash slideshow layers
    slideshow.innerHTML = splashPhotos.map((photo, index) => `
      <img src="${getDriveImageUrl(photo.id, 1600)}" class="splash-slide ${index === 0 ? 'active' : ''}" alt="Slideshow Image">
    `).join("");

    // Cycle slides randomly (similar to Juventus homepage)
    let currentIdx = 0;
    const slides = document.querySelectorAll(".splash-slide");
    
    if (slides.length <= 1) return;

    setInterval(() => {
      slides[currentIdx].classList.remove("active");
      
      // Select a random index different from current to guarantee transition
      let nextIdx = currentIdx;
      while (nextIdx === currentIdx) {
        nextIdx = Math.floor(Math.random() * slides.length);
      }
      
      currentIdx = nextIdx;
      slides[currentIdx].classList.add("active");
    }, 5000); // Transitions every 5 seconds
  }

  // Setup Navigation Bar transparency on scroll
  function setupNavbarScroll() {
    const navbar = document.getElementById("header-nav");
    if (!navbar) return;

    function checkScroll() {
      // Transition past 100vh height minus navbar height
      const threshold = window.innerHeight - 80;
      if (window.scrollY > threshold) {
        navbar.classList.remove("nav-transparent");
        navbar.classList.add("nav-solid");
      } else {
        navbar.classList.remove("nav-solid");
        navbar.classList.add("nav-transparent");
      }
    }

    window.addEventListener("scroll", checkScroll);
    // Initial check
    checkScroll();
  }

  // Setup scroll indicator arrow click
  function setupScrollIndicator() {
    const indicator = document.getElementById("scroll-indicator");
    if (!indicator) return;

    indicator.addEventListener("click", () => {
      // Scroll to start of main content
      const contentStart = document.getElementById("main-content");
      if (contentStart) {
        contentStart.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Hero Section Renderer (inside content area)
  function renderHeroSection() {
    const coverPhoto = activePhotos.find(p => p.tag === "Cover") || activePhotos[0];
    const heroBg = document.querySelector(".hero-bg");
    if (heroBg && coverPhoto) {
      heroBg.src = getDriveImageUrl(coverPhoto.id, 1200);
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
      const isHighlight = fac.name.toLowerCase().includes("warung") || fac.name.toLowerCase().includes("toko");
      return `
        <div class="facility-card ${isHighlight ? 'highlight-facility' : ''}">
          <div class="facility-icon">${SVG_ICONS[fac.icon] || ""}</div>
          <div class="facility-info">
            <span class="facility-name">${fac.name} ${isHighlight ? '<span style="font-size: 0.68rem; color: #7C3AED; border: 1.5px solid rgba(124, 58, 237, 0.3); background: rgba(124, 58, 237, 0.08); padding: 2px 8px; border-radius: 100px; margin-left: 6px; vertical-align: middle; text-transform: uppercase; font-weight: 700; font-family: var(--font-mono);">Cocok Usaha</span>' : ''}</span>
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
      stopAutoplay();
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

      const dots = nav.querySelectorAll(".carousel-dot");
      dots.forEach(dot => {
        dot.addEventListener("click", () => {
          goToSlide(parseInt(dot.dataset.index));
          resetAutoplay();
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

      const thumbs = thumbStrip.querySelectorAll(".thumbnail-item");
      thumbs.forEach(thumb => {
        thumb.addEventListener("click", () => {
          goToSlide(parseInt(thumb.dataset.index));
          resetAutoplay();
        });
      });
    }

    // Reset slide position & start autoplay
    goToSlide(0);
    startAutoplay();

    // Setup Click Event on main slide to launch Lightbox Zoom
    const slides = track.querySelectorAll(".carousel-slide");
    slides.forEach(slide => {
      slide.addEventListener("click", () => {
        openLightbox(parseInt(slide.dataset.index));
      });
    });

    // Pause autoplay on mouse hover over carousel
    const wrapper = document.getElementById("gallery-carousel-wrapper");
    if (wrapper) {
      wrapper.addEventListener("mouseenter", stopAutoplay);
      wrapper.addEventListener("mouseleave", startAutoplay);
    }
  }

  // Slide Navigation
  function goToSlide(index) {
    const track = document.getElementById("carousel-track");
    if (!track) return;
    
    currentSlideIndex = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    
    const dots = document.querySelectorAll(".carousel-nav .carousel-dot");
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });

    const thumbs = document.querySelectorAll(".thumbnail-strip .thumbnail-item");
    thumbs.forEach((thumb, idx) => {
      thumb.classList.toggle("active", idx === index);
    });

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

  // Autoplay Gallery Controller (Cycles every 4 seconds)
  function startAutoplay() {
    stopAutoplay(); // clear existing
    if (filteredPhotos.length <= 1) return;
    carouselAutoplayInterval = setInterval(() => {
      let nextIdx = currentSlideIndex + 1;
      if (nextIdx >= filteredPhotos.length) nextIdx = 0;
      goToSlide(nextIdx);
    }, 4000);
  }

  function stopAutoplay() {
    if (carouselAutoplayInterval) {
      clearInterval(carouselAutoplayInterval);
      carouselAutoplayInterval = null;
    }
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Arrow Controls for Carousel
  const prevBtn = document.getElementById("carousel-btn-prev");
  const nextBtn = document.getElementById("carousel-btn-next");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      let idx = currentSlideIndex - 1;
      if (idx < 0) idx = filteredPhotos.length - 1;
      goToSlide(idx);
      resetAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      let idx = currentSlideIndex + 1;
      if (idx >= filteredPhotos.length) idx = 0;
      goToSlide(idx);
      resetAutoplay();
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

    function setRentalPeriod(period) {
      if (period === "monthly") {
        monthlyBtn.classList.add("active");
        quarterlyBtn.classList.remove("active");
        labelDurasi.textContent = "1 Bulan";
        valSewa.textContent = "Hubungi Pemilik";
        valTotal.textContent = "Hubungi Pemilik";
        
        const sidebarPriceVal = document.getElementById("sidebar-price-val");
        const sidebarPricePeriod = document.getElementById("sidebar-price-period");
        if (sidebarPriceVal) {
          sidebarPriceVal.textContent = "Hubungi Pemilik";
          sidebarPriceVal.style.fontSize = "1.8rem";
        }
        if (sidebarPricePeriod) sidebarPricePeriod.textContent = "Tanya Skema Sewa & Harga";
        
        syncWhatsAppLink("Bulanan");
      } else {
        quarterlyBtn.classList.add("active");
        monthlyBtn.classList.remove("active");
        labelDurasi.textContent = "3 Bulan";
        valSewa.textContent = "Hubungi Pemilik";
        valTotal.textContent = "Hubungi Pemilik";
        
        const sidebarPriceVal = document.getElementById("sidebar-price-val");
        const sidebarPricePeriod = document.getElementById("sidebar-price-period");
        if (sidebarPriceVal) {
          sidebarPriceVal.textContent = "Hubungi Pemilik";
          sidebarPriceVal.style.fontSize = "1.8rem";
        }
        if (sidebarPricePeriod) sidebarPricePeriod.textContent = "Tanya Skema Sewa & Harga";
        
        syncWhatsAppLink("Per 3 Bulan");
      }
    }

    function syncWhatsAppLink(schemeText) {
      const waButtons = document.querySelectorAll(".wa-contact-btn");
      const baseMsg = `Halo Pak Febri, saya tertarik sewa kontrakan di Grand Residence Indah dengan skema pembayaran [${schemeText}]. Berapa harga sewa dan apakah bisa survei lokasi?`;
      const encodedMsg = encodeURIComponent(baseMsg);
      const customWaUrl = `https://api.whatsapp.com/send/?phone=6287888893111&text=${encodedMsg}&type=phone_number&app_absent=0`;
      
      waButtons.forEach(btn => {
        btn.href = customWaUrl;
      });
    }

    monthlyBtn.addEventListener("click", () => setRentalPeriod("monthly"));
    quarterlyBtn.addEventListener("click", () => setRentalPeriod("quarterly"));

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
    stopAutoplay(); // pause main autoplay when zoom lightbox is active
  }

  function closeLightbox() {
    const modal = document.getElementById("lightbox-modal");
    if (modal) modal.classList.remove("active");
    startAutoplay(); // resume autoplay
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

  init();
});
