const CONFIG = {
  // Google Apps Script Web App URL (leave empty to use the fallback static mapping below)
  // Example: "https://script.google.com/macros/s/.../exec"
  appsScriptUrl: "",

  // Fallback static mapping of Google Drive File IDs (retrieved automatically from folder)
  assets: {
    video: {
      name: "Dokumentasi Full.mp4",
      id: "1uxJJaRYhurfEOJygphk89pgeNFgjf7rA",
      embedUrl: "https://drive.google.com/file/d/1uxJJaRYhurfEOJygphk89pgeNFgjf7rA/preview"
    },
    photos: [
      { name: "1. Cover.png", id: "1K6FwKtIHxv-btnG5185cGGvU4VvMlYOx", tag: "Cover" },
      { name: "2. Halaman Depan.png", id: "1vucq0swybwi0wSBjIoAxclLYVzZcnX_k", tag: "Exterior" },
      { name: "3. Garasi Mobil.jpg", id: "12kQH9KgtoWlg8XpaDg5xxA4t9fDDBOAw", tag: "Exterior" },
      { name: "4. Garasi Mobil.jpg", id: "124AFI3Byy_7vEKlwNcUENE3HKQmd5tEX", tag: "Exterior" },
      { name: "5. Garasi Mobil.jpg", id: "1kxCQ6bIfiChS6IvUEg_fJ4AFdI3933qi", tag: "Exterior" },
      { name: "6. Garasi Warung.jpg", id: "16cBqeRiLrYZvjemYXXJFgW1QgUzHDFeQ", tag: "Exterior" },
      { name: "7. Ruang Tamu.jpg", id: "1cHqPyNJloqk57MLRrnICghTgosBbaJ86", tag: "Interior" },
      { name: "8. Ruang Dapur.jpg", id: "1k3e6-SvPgf-cVKshuL6sPGmFX3HmS7UR", tag: "Interior" },
      { name: "9. Ruang Mushollah.jpg", id: "1kKEB68mKw3uBBOPIp0-FMo-5fYPyplSm", tag: "Interior" },
      { name: "10. Ruang Dapur | Taman Kecil & Kolam Ikan.jpg", id: "1kKEB68mKw3uBBOPIp0-FMo-5fYPyplSm", tag: "Garden" },
      { name: "11. Ruang Dapur.jpg", id: "1gatjPe0EDJgatreHwGOiA111VYUOOLC2", tag: "Interior" },
      { name: "12. Kamar 1.jpg", id: "1aStRrIpm5CCdGwTMs3aHWgasXNq2Ezt6", tag: "Interior" },
      { name: "13. Kamar Mandi untuk Kamar 1.jpg", id: "1p6LdzcCukxeKXa5IquaJqsI49fNC-Vlh", tag: "Interior" },
      { name: "14. Kamar 2.jpg", id: "1ntolUT4at01EXse0G6851sBWCz_dqq93", tag: "Interior" },
      { name: "15. Ruang Dapur  Taman Kecil & Kolam Ikan.jpg", id: "1ntolUT4at01EXse0G6851sBWCz_dqq93", tag: "Garden" },
      { name: "16. Ruang Dapur  Taman Kecil & Kolam Ikan.jpg", id: "1EuG_K38FwwFogZ4FSpCzn9Y7IJMlMfas", tag: "Garden" },
      { name: "17. Ruang Dapur  Taman Kecil & Kolam Ikan.jpg", id: "1YhDrPBqrqmX1xG89x3v8SSeOhCTajsX4", tag: "Garden" },
      { name: "18. Ruang Dapur  Taman Kecil & Kolam Ikan.jpg", id: "1cyVfVf7eZtN0UnezBsxDrdqecNdWmaBg", tag: "Garden" },
      { name: "19. Ruang Dapur  Taman Kecil & Kolam Ikan.jpg", id: "1DlAhT5Tof99AeaXY_3H2zGRu7whRuT92", tag: "Garden" },
      { name: "21. Ruang Dapur  Taman Kecil & Kolam Ikan.jpg", id: "1pR1PB-9uU6CVKYa5kgBUvelrDPQxi3Hl", tag: "Garden" },
      { name: "22. Ruang Dapur  Taman Kecil & Kolam Ikan.jpg", id: "18fXb5WM9WQIWEfbETDdXBzp0_ZTZgOVe", tag: "Garden" },
      { name: "23. Ruang Dapur  Taman Kecil & Kolam Ikan.jpg", id: "1JPiKBzaclt5rCE6PLBp_yI_zbI8k6pMS", tag: "Garden" },
      { name: "24. Ruang Dapur  Taman Kecil & Kolam Ikan.jpg", id: "1exmn141g0MhRsbEVGza1tNr_uynUukDG", tag: "Garden" },
      { name: "25. Ruang Dapur  Taman Kecil & Kolam Ikan.jpg", id: "1HCK2C4Tw_MfAsype7VrYQ1tBxrLmtHeK", tag: "Garden" },
      { name: "26. Ruang Dapur  Taman Kecil & Kolam Ikan.jpg", id: "12aE_pWHnKu4rk0q-KIFOX6sQexw5gkqG", tag: "Garden" },
      { name: "27. Ruang Dapur  Taman Kecil & Kolam Ikan.jpg", id: "17suF4QsLN_V9IiqA9xcQOPxKNLWj4zsh", tag: "Garden" },
      { name: "28. Ruang Dapur  Taman Kecil & Kolam Ikan.jpg", id: "1j4vD4jflhFHYW2tUjSX9CrziY_pAIFTp", tag: "Garden" },
      { name: "29. Garasi Warung.jpg", id: "1gJmombB3WV19rqAcCVRFXKZp3o5omgRo", tag: "Exterior" },
      { name: "30. Kamar Mandi untuk Kamar 1.jpg", id: "1ZzScAOsmvBqDODfSS5eqdo6m54uCZJll", tag: "Interior" },
      { name: "31. Kamar Mandi untuk Kamar 1.jpg", id: "1pVyir3WSDr5gNli_qnR1mnjn4DDZHjW5", tag: "Interior" },
      { name: "32. Kamar Mandi untuk Kamar 1.jpg", id: "1ya4fBHBs9V8Dke4XX9AXtaQxcIdp47qZ", tag: "Interior" },
      { name: "33. Kamar Mandi untuk Kamar 1.jpg", id: "1ZqRXzHdHKTEUIjIuoPTyEluarJnG__bG", tag: "Interior" },
      { name: "34. Kamar Mandi untuk Kamar 1.jpg", id: "1-moTKMBoXEGf-ZMjMzf_-jccCU-3Ccxx", tag: "Interior" },
      { name: "35. Kamar Mandi untuk Kamar 1.jpg", id: "19oSLDnEpkz54BXHHmRNpiMyIegC2Ohlh", tag: "Interior" },
      { name: "36. Kamar Mandi untuk Kamar 1.jpg", id: "1XG6Q0b_AKKpLzSrcj8IPLLqDU93-Y8Sc", tag: "Interior" },
      { name: "37. Kamar Mandi untuk Kamar 1.jpg", id: "1t_DEWPgmGKVu8otNIgvjqdDhg30yUOTa", tag: "Interior" },
      { name: "38. Garasi Mobil.jpg", id: "1WOGv6TnIK513lFBqqM7T6gfLE-K_h3bC", tag: "Exterior" },
      { name: "39. Garasi Mobil.jpg", id: "1WocYRhZM9aZ7LmFLc5YlQ_h7hefGI2EX", tag: "Exterior" },
      { name: "40. Garasi Mobil.jpg", id: "1F-OJZzaeatcs7AJwHBYW6QN8fqrU60lT", tag: "Exterior" },
      { name: "41. Garasi Mobil.jpg", id: "1RNawNrWBPunVPr5RPae-NUCmN5w2mnlP", tag: "Exterior" },
      { name: "42. Garasi Mobil.jpg", id: "1bl2HttHQM912j_loYmHx9DpKySlZ2HgO", tag: "Exterior" },
      { name: "43. Halaman Depan.jpg", id: "1t8ZQcVWKxNlGUDLyGswWbXcXJbzI2etc", tag: "Exterior" },
      { name: "44. Halaman Depan.jpg", id: "1RkU43XsZ1kjfb7EJTA-sutk2CFoceNlu", tag: "Exterior" },
      { name: "44. Ruang Dapur  Taman Kecil & Kolam Ikan.jpg", id: "1RkU43XsZ1kjfb7EJTA-sutk2CFoceNlu", tag: "Garden" },
      { name: "45. Halaman Depan.jpg", id: "1BspAHHtB16yTw91ithZwhAwONS7nAPr5", tag: "Exterior" },
      { name: "45. Kamar 2.jpg", id: "1lUpatqhbTh_4_G5tYoJ1XMl0T-TSQ3KW", tag: "Interior" },
      { name: "46. Kamar 2.jpg", id: "1yv_km9KoN49WF0JnLzF2t7ZUaU6QMZTR", tag: "Interior" },
      { name: "47. Ruang Mushollah.jpg", id: "1I6_btBGxiaMtky3CGjkb9JD2vYwmbw7L", tag: "Interior" },
      { name: "48. Ruang Mushollah.jpg", id: "1ySIwi1RbaB_p_0793dlU_eyTDcQFQrwG", tag: "Interior" },
      { name: "49. Ruang Mushollah.jpg", id: "1g30sfVG59eQ5INpUuhnQekw-BtiiGQEC", tag: "Interior" }
    ]
  },

  // Owner contact details
  owner: {
    name: "Febri Nahdatun",
    photoUrl: "https://drive.google.com/thumbnail?id=1SWtNTC7S035nmC2l7R39w-vGOfdhgtaC&sz=w200",
    whatsapp: "https://api.whatsapp.com/send/?phone=6287888893111&text=Halo%20Pak%20Febri%2C%20saya%20tertarik%20dengan%20kontrakan%20rumah%20di%20Grand%20Residence%20Indah.%20Apakah%20masih%20tersedia%3F&type=phone_number&app_absent=0",
    telegram: "https://t.me/fbrnhdtn"
  },

  // House Specifications & Info
  details: {
    tipe: "Rumah Kontrakan",
    harga: {
      bulanan: 1700000,
      tigaBulanan: 5100000
    },
    spesifikasi: [
      { label: "Luas Tanah", value: "84 m²", icon: "square" },
      { label: "Luas Bangunan", value: "84 m²", icon: "home" },
      { label: "Kamar Tidur", value: "2", icon: "bed" },
      { label: "Kamar Mandi", value: "2", icon: "droplet" },
      { label: "Jumlah Lantai", value: "1", icon: "layers" },
      { label: "Sertifikasi", value: "SHM (Sertifikat Hak Milik)", icon: "file-text" }
    ],
    fasilitas: [
      { name: "Garasi Mobil", desc: "Garasi tertutup aman untuk menyimpan kendaraan roda empat.", icon: "truck" },
      { name: "Garasi Warung / Toko", desc: "Sangat cocok untuk Anda yang ingin membuka usaha langsung dari rumah.", icon: "shopping-bag" },
      { name: "Ruang Tamu", desc: "Ruang tamu bersih dan nyaman untuk menerima kunjungan kerabat.", icon: "users" },
      { name: "Ruang Musholla", desc: "Area khusus beribadah tenang di dalam rumah.", icon: "moon" },
      { name: "Dapur Lengkap", desc: "Dapur siap pakai dengan sirkulasi udara yang baik.", icon: "coffee" },
      { name: "Taman Kecil + Kolam Ikan", desc: "Menghadirkan suasana asri, sejuk, dan suara gemercik air kolam.", icon: "sun" },
      { name: "Listrik Token", desc: "Sistem listrik prabayar untuk kemudahan pengaturan daya.", icon: "zap" },
      { name: "Air Sumur Bor", desc: "Kualitas air tanah yang bersih, jernih, dan debit melimpah.", icon: "droplet" }
    ],
    lokasi: {
      alamat: "Perumahan Grand Residence Indah, Jl. Duren Baru Poncol, Susukan, Kec. Bojonggede, Kabupaten Bogor, Jawa Barat 16920",
      jarakStasiun: "± 20 Menit ke Stasiun KRL Bojong Gede",
      mapsLink: "https://maps.app.goo.gl/AcypG6Pd6CwEHtNJA"
    }
  }
};
