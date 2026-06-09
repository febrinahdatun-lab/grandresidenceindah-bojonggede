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

  // Helper to classify a photo name into one of the 8 category tags
  function classifyPhotoTag(filename) {
    const name = filename.toLowerCase();
    if (name.includes("cover")) return "halaman-depan";
    if (name.includes("halaman")) return "halaman-depan";
    if (name.includes("garasi mobil") || name.includes("garasi_mobil")) return "garasi-mobil";
    if (name.includes("garasi warung") || name.includes("garasi_warung") || name.includes("warung")) return "garasi-warung";
    if (name.includes("ruang tamu") || name.includes("ruang_tamu") || name.includes("tamu")) return "ruang-tamu";
    if (name.includes("dapur") || name.includes("taman") || name.includes("kolam")) return "dapur-taman-kolam";
    if (name.includes("mushollah") || name.includes("mushola")) return "ruang-mushollah";
    if (name.includes("kamar 1") || name.includes("kamar mandi") || name.includes("kamar_mandi")) return "kamar-1-mandi";
    if (name.includes("kamar 2")) return "kamar-2";
    
    // Fallbacks
    if (name.includes("garasi")) return "garasi-mobil";
    return "halaman-depan";
  }

  // Get human-readable Indonesian label for each category tag
  function getCategoryLabel(tag) {
    const labels = {
      "halaman-depan": "Halaman Depan",
      "garasi-mobil": "Garasi Mobil",
      "garasi-warung": "Garasi Warung",
      "ruang-tamu": "Ruang Tamu",
      "dapur-taman-kolam": "Dapur & Kolam",
      "ruang-mushollah": "Ruang Mushollah",
      "kamar-1-mandi": "Kamar 1 & Mandi",
      "kamar-2": "Kamar 2"
    };
    return labels[tag] || "Lainnya";
  }

  // Load and Initialize Data
  async function init() {
    // 1. Load static fallback data instantly for instant rendering
    activePhotos = CONFIG.assets.photos;
    filteredPhotos = [...activePhotos];

    // 2. Initialize Components
    setupSplashHero();
    setupNavbarScroll();
    renderSpecifications();
    renderFacilities();
    renderVideoTour(CONFIG.assets.video);
    setupGalleryFilters();
    renderGallery();
    setupRentSchemeSelector();
    setupLightbox();
    setupStaticData();
    setupScrollIndicator();
    setupScrollAnimations();

    // 3. Initialize dynamic space animations (starfield & shooting stars)
    setupSpaceAnimations();

    // 4. Check for dynamic Google Apps Script updates in background
    fetchDynamicData();
  }

  // Background dynamic sync check
  async function fetchDynamicData() {
    if (!CONFIG.appsScriptUrl) {
      console.log("No Apps Script URL configured. Running on offline cached metadata.");
      return;
    }
    
    try {
      console.log("Background checking Google Apps Script for new media uploads...");
      const response = await fetch(CONFIG.appsScriptUrl);
      const data = await response.json();
      
      if (data.success && data.photos && data.photos.length) {
        const existingIds = new Set(activePhotos.map(p => p.id));
        const newPhotos = data.photos;
        
        let hasChanges = false;
        newPhotos.forEach(p => {
          if (!existingIds.has(p.id)) {
            hasChanges = true;
          }
        });
        
        if (hasChanges || newPhotos.length !== activePhotos.length) {
          console.log("New uploads detected in Google Drive! Updating page gallery...");
          activePhotos = newPhotos;
          
          // Re-evaluate filtered photos using active tag
          if (activeFilter === "all") {
            filteredPhotos = [...activePhotos];
          } else {
            filteredPhotos = activePhotos.filter(p => p.tag.toLowerCase() === activeFilter);
          }
          
          // Smoothly re-render gallery components
          setupSplashHero();
          renderGallery();
          
          if (data.video && data.video.embedUrl && data.video.embedUrl !== CONFIG.assets.video.embedUrl) {
            renderVideoTour(data.video);
          }
        } else {
          console.log("Google Drive is fully in sync. No new uploads detected.");
        }
      }
    } catch (err) {
      console.warn("Background Apps Script sync failed (using offline cached metadata):", err);
    }
  }

  // Dynamic Space Starfield & Shooting Stars Controller
  function setupSpaceAnimations() {
    const spaceSections = [
      document.getElementById("splash-hero"),
      document.getElementById("spesifikasi"),
      document.getElementById("galeri"),
      document.getElementById("video-tour"),
      document.getElementById("fasilitas"),
      document.getElementById("lokasi"),
      document.getElementById("informasi-sewa")
    ];

    spaceSections.forEach(section => {
      if (!section) return;

      // Create a starry background container
      const starfield = document.createElement("div");
      starfield.className = "space-starfield-container";
      starfield.style.position = "absolute";
      starfield.style.top = "0";
      starfield.style.left = "0";
      starfield.style.width = "100%";
      starfield.style.height = "100%";
      starfield.style.pointerEvents = "none";
      starfield.style.zIndex = "1";
      
      // Clean static stars inside this section
      const oldStars = section.querySelectorAll(".cosmic-star, .shooting-star");
      oldStars.forEach(s => s.remove());

      // Generate 35-45 stars per section
      const numStars = 35 + Math.floor(Math.random() * 10);
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.className = "cosmic-star-particle";
        
        const size = (1 + Math.random() * 2.2).toFixed(1);
        const top = (Math.random() * 100).toFixed(1);
        const left = (Math.random() * 100).toFixed(1);
        const delay = (Math.random() * 6).toFixed(1);
        const duration = (3.5 + Math.random() * 4.5).toFixed(1);
        const opacity = (0.2 + Math.random() * 0.7).toFixed(1);

        star.style.position = "absolute";
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.background = "#ffffff";
        star.style.borderRadius = "50%";
        star.style.top = `${top}%`;
        star.style.left = `${left}%`;
        star.style.opacity = opacity;
        star.style.boxShadow = `0 0 ${size * 3}px ${size / 2}px rgba(255, 255, 255, 0.8)`;
        star.style.animation = `twinkleStar ${duration}s infinite ease-in-out ${delay}s`;
        
        starfield.appendChild(star);
      }
      section.insertBefore(starfield, section.firstChild);
    });

    // Shooting Stars Scheduler
    function triggerShootingStar() {
      const activeSections = spaceSections.filter(s => s !== null);
      if (!activeSections.length) return;
      
      const randomSection = activeSections[Math.floor(Math.random() * activeSections.length)];
      const star = document.createElement("div");
      const isLeftToRight = Math.random() > 0.5;
      
      star.className = `shooting-star ${isLeftToRight ? 'shoot-l2r' : 'shoot-r2l'}`;
      
      const startTop = 5 + Math.random() * 55;
      star.style.top = `${startTop}%`;
      
      if (isLeftToRight) {
        star.style.left = `${-50 + Math.random() * 40}px`;
      } else {
        star.style.right = `${-50 + Math.random() * 40}px`;
      }
      
      randomSection.appendChild(star);
      
      setTimeout(() => {
        if (star.parentNode === randomSection) {
          randomSection.removeChild(star);
        }
      }, 1250);
    }

    // Interval to fire shooting stars
    setInterval(triggerShootingStar, 5000 + Math.random() * 5000);
    
    // Trigger initial ones
    setTimeout(triggerShootingStar, 1500);
    setTimeout(triggerShootingStar, 4000);
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
    const ownerAvatarContainer = document.getElementById("owner-avatar-lg-container");
    if (ownerAvatarContainer) {
      if (CONFIG.owner.photoUrl) {
        ownerAvatarContainer.innerHTML = `<img src="${CONFIG.owner.photoUrl}" class="owner-avatar-img-lg" alt="${CONFIG.owner.name}">`;
      } else {
        ownerAvatarContainer.textContent = CONFIG.owner.name.split(" ").map(n => n[0]).join("");
      }
    }

    const ownerName = document.querySelector(".owner-name-lg");
    if (ownerName) ownerName.textContent = CONFIG.owner.name;
  }

  // Setup Juventus-style Fullscreen Intro Slideshow
  function setupSplashHero() {
    const slideshow = document.getElementById("splash-slideshow");
    if (!slideshow) return;

    // Pick 4-5 dynamic photos to showcase
    const splashPhotoTags = ["halaman-depan", "garasi-mobil", "ruang-tamu", "dapur-taman-kolam"];
    const splashPhotos = [];
    
    // Select one photo for each category tag for variation
    splashPhotoTags.forEach(tag => {
      const match = activePhotos.find(p => classifyPhotoTag(p.name) === tag);
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
          filteredPhotos = activePhotos.filter(p => classifyPhotoTag(p.name) === activeFilter);
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
    track.innerHTML = filteredPhotos.map((photo, index) => {
      const tagLabel = getCategoryLabel(classifyPhotoTag(photo.name));
      return `
      <li class="carousel-slide" data-index="${index}">
        <img class="carousel-img" src="${getDriveImageUrl(photo.id, 1200)}" alt="${photo.name}" loading="lazy">
        <div class="carousel-slide-caption">
          <span>${photo.name.replace(/^\d+\.\s*/, "").split(".")[0]}</span>
          <span class="slide-tag">${tagLabel}</span>
        </div>
      </li>
    `;}).join("");

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
  // RENT SCHEME SELECTOR & CONTACT SYNC
  // ==========================================================================
  function setupRentSchemeSelector() {
    const schemeButtons = document.querySelectorAll(".scheme-btn");
    if (!schemeButtons.length) return;

    function setScheme(selectedScheme) {
      schemeButtons.forEach(btn => {
        const isActive = btn.dataset.scheme === selectedScheme;
        btn.classList.toggle("active", isActive);
      });

      // Update WhatsApp URL
      syncWhatsAppLink(selectedScheme);
    }

    function syncWhatsAppLink(schemeText) {
      const waButtons = document.querySelectorAll(".wa-contact-btn");
      const baseMsg = `Halo Pak Febri, saya tertarik untuk masuk daftar antrean (waiting list) sewa kontrakan Grand Residence Indah dengan skema pembayaran [${schemeText}] jika unit tersedia kembali.`;
      const encodedMsg = encodeURIComponent(baseMsg);
      const customWaUrl = `https://api.whatsapp.com/send/?phone=6287888893111&text=${encodedMsg}&type=phone_number&app_absent=0`;
      
      waButtons.forEach(btn => {
        btn.href = customWaUrl;
      });
    }

    schemeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        setScheme(btn.dataset.scheme);
      });
    });

    // Default to the first scheme (Per 3 Bulan)
    setScheme("3 Bulan");
  }

  // ==========================================================================
  // SCROLL ENTRANCE ANIMATIONS (Intersection Observer & Fallbacks)
  // ==========================================================================
  function setupScrollAnimations() {
    const triggerElements = document.querySelectorAll(".scroll-trigger-element");
    if (!triggerElements.length) return;

    // Fallback if IntersectionObserver is not supported
    if (!('IntersectionObserver' in window)) {
      triggerElements.forEach(el => el.classList.add("active-scroll"));
      return;
    }

    const observerOptions = {
      root: null,
      threshold: 0.02, // Trigger early as soon as 2% is visible
      rootMargin: "0px 0px 120px 0px" // Trigger 120px before entering viewport
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active-scroll");
          obs.unobserve(entry.target); // Trigger once
        }
      });
    }, observerOptions);

    triggerElements.forEach(el => observer.observe(el));

    // Safety fallback: immediately trigger elements that are already near the viewport
    setTimeout(() => {
      triggerElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 120) {
          el.classList.add("active-scroll");
          observer.unobserve(el);
        }
      });
    }, 450);
  }

  // ==========================================================================
  // LIGHTBOX MODAL (3D PowerPoint Gallery Transition & Swipe gestures)
  // ==========================================================================
  let lightboxActiveIndex = 0;
  let lightboxTransitioning = false;

  function setupLightbox() {
    const modal = document.getElementById("lightbox-modal");
    const closeBtn = document.getElementById("lightbox-close");
    const prevBtn = document.getElementById("lightbox-btn-prev");
    const nextBtn = document.getElementById("lightbox-btn-next");

    if (!modal || !closeBtn) return;

    closeBtn.addEventListener("click", closeLightbox);
    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.id === "lightbox-slides-wrapper") {
        closeLightbox();
      }
    });

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        let idx = lightboxActiveIndex - 1;
        if (idx < 0) idx = filteredPhotos.length - 1;
        transitionTo(idx, "prev");
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        let idx = lightboxActiveIndex + 1;
        if (idx >= filteredPhotos.length) idx = 0;
        transitionTo(idx, "next");
      });
    }

    document.addEventListener("keydown", (e) => {
      if (!modal.classList.contains("active")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevBtn && prevBtn.click();
      if (e.key === "ArrowRight") nextBtn && nextBtn.click();
    });

    // Touch Swipe Event Listeners for Mobile devices (Android/iOS)
    let startX = 0;
    let startY = 0;

    modal.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    modal.addEventListener("touchend", (e) => {
      if (lightboxTransitioning) return;
      
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;

      const diffX = endX - startX;
      const diffY = endY - startY;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          // Swipe right -> Prev slide
          let idx = lightboxActiveIndex - 1;
          if (idx < 0) idx = filteredPhotos.length - 1;
          transitionTo(idx, "prev");
        } else {
          // Swipe left -> Next slide
          let idx = lightboxActiveIndex + 1;
          if (idx >= filteredPhotos.length) idx = 0;
          transitionTo(idx, "next");
        }
      }
    }, { passive: true });
  }

  function renderLightboxSlides(index) {
    const wrapper = document.getElementById("lightbox-slides-wrapper");
    if (!wrapper) return;
    wrapper.innerHTML = "";

    const len = filteredPhotos.length;
    if (len === 0) return;

    const prevIdx = (index - 1 + len) % len;
    const nextIdx = (index + 1) % len;

    // Helper to create slide element
    function createSlideElement(idx, positionClass) {
      const photo = filteredPhotos[idx];
      const slide = document.createElement("div");
      slide.className = `lightbox-slide ${positionClass}`;
      slide.dataset.index = idx;
      slide.innerHTML = `<img src="${getDriveImageUrl(photo.id, 1600)}" alt="${photo.name}" class="lightbox-img">`;
      
      // Standby slide click triggers navigation
      slide.addEventListener("click", () => {
        if (slide.classList.contains("prev-slide")) {
          transitionTo(prevIdx, "prev");
        } else if (slide.classList.contains("next-slide")) {
          transitionTo(nextIdx, "next");
        }
      });
      return slide;
    }

    if (len === 1) {
      wrapper.appendChild(createSlideElement(index, "active-slide"));
    } else if (len === 2) {
      wrapper.appendChild(createSlideElement(prevIdx, "prev-slide"));
      wrapper.appendChild(createSlideElement(index, "active-slide"));
    } else {
      wrapper.appendChild(createSlideElement(prevIdx, "prev-slide"));
      wrapper.appendChild(createSlideElement(index, "active-slide"));
      wrapper.appendChild(createSlideElement(nextIdx, "next-slide"));
    }
  }

  function openLightbox(index) {
    const modal = document.getElementById("lightbox-modal");
    const wrapper = document.getElementById("lightbox-slides-wrapper");
    if (!modal || !wrapper) return;

    lightboxActiveIndex = index;
    lightboxTransitioning = false;

    // Render the initial 3 slides
    renderLightboxSlides(index);

    const photo = filteredPhotos[index];
    const caption = document.getElementById("lightbox-caption");
    if (caption && photo) {
      caption.textContent = photo.name.replace(/^\d+\.\s*/, "").split(".")[0];
    }

    modal.classList.add("active");
    stopAutoplay();
  }

  function closeLightbox() {
    const modal = document.getElementById("lightbox-modal");
    if (modal) modal.classList.remove("active");
    
    // Clear wrapper DOM elements after the 300ms CSS fade-out animation completes
    // to prevent any click-blocking or overlay bugs
    setTimeout(() => {
      const wrapper = document.getElementById("lightbox-slides-wrapper");
      if (wrapper && modal && !modal.classList.contains("active")) {
        wrapper.innerHTML = "";
      }
    }, 310);
    
    startAutoplay();
  }

  function transitionTo(idx, direction) {
    if (lightboxTransitioning || filteredPhotos.length <= 1) return;
    lightboxTransitioning = true;

    const wrapper = document.getElementById("lightbox-slides-wrapper");
    const len = filteredPhotos.length;
    const photo = filteredPhotos[idx];
    
    const caption = document.getElementById("lightbox-caption");
    if (caption && photo) {
      caption.textContent = photo.name.replace(/^\d+\.\s*/, "").split(".")[0];
    }

    lightboxActiveIndex = idx;

    if (direction === "next") {
      const prevSlide = wrapper.querySelector(".prev-slide");
      const activeSlide = wrapper.querySelector(".active-slide");
      const nextSlide = wrapper.querySelector(".next-slide");

      // Shift existing classes leftward
      if (prevSlide) prevSlide.className = "lightbox-slide offscreen-left";
      if (activeSlide) activeSlide.className = "lightbox-slide prev-slide";
      if (nextSlide) nextSlide.className = "lightbox-slide active-slide";

      // Append new standby next slide from far right
      const farNextIdx = (idx + 1) % len;
      const farNextPhoto = filteredPhotos[farNextIdx];
      
      const newNextSlide = document.createElement("div");
      newNextSlide.className = "lightbox-slide offscreen-right";
      newNextSlide.dataset.index = farNextIdx;
      newNextSlide.innerHTML = `<img src="${getDriveImageUrl(farNextPhoto.id, 1600)}" alt="${farNextPhoto.name}" class="lightbox-img">`;
      
      newNextSlide.addEventListener("click", () => {
        transitionTo(farNextIdx, "next");
      });

      wrapper.appendChild(newNextSlide);
      newNextSlide.offsetHeight; // force reflow
      
      newNextSlide.className = "lightbox-slide next-slide";

    } else {
      const prevSlide = wrapper.querySelector(".prev-slide");
      const activeSlide = wrapper.querySelector(".active-slide");
      const nextSlide = wrapper.querySelector(".next-slide");

      // Shift existing classes rightward
      if (nextSlide) nextSlide.className = "lightbox-slide offscreen-right";
      if (activeSlide) activeSlide.className = "lightbox-slide next-slide";
      if (prevSlide) prevSlide.className = "lightbox-slide active-slide";

      // Insert new standby prev slide from far left
      const farPrevIdx = (idx - 1 + len) % len;
      const farPrevPhoto = filteredPhotos[farPrevIdx];
      
      const newPrevSlide = document.createElement("div");
      newPrevSlide.className = "lightbox-slide offscreen-left";
      newPrevSlide.dataset.index = farPrevIdx;
      newPrevSlide.innerHTML = `<img src="${getDriveImageUrl(farPrevPhoto.id, 1600)}" alt="${farPrevPhoto.name}" class="lightbox-img">`;
      
      newPrevSlide.addEventListener("click", () => {
        transitionTo(farPrevIdx, "prev");
      });

      wrapper.insertBefore(newPrevSlide, wrapper.firstChild);
      newPrevSlide.offsetHeight; // force reflow
      
      newPrevSlide.className = "lightbox-slide prev-slide";
    }

    // Clean up offscreen slides and stabilize state after 800ms transition completes
    setTimeout(() => {
      const offscreen = wrapper.querySelectorAll(".offscreen-left, .offscreen-right");
      offscreen.forEach(el => {
        if (el.parentNode === wrapper) {
          wrapper.removeChild(el);
        }
      });
      
      // Synchronize DOM elements to match the new active index
      renderLightboxSlides(lightboxActiveIndex);
      lightboxTransitioning = false;
    }, 800);
  }

  init();
});
