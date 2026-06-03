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
      { name: "10. Ruang Dapur | Taman Kecil & Kolam Ikan.jpg", id: "1kunLkqun1sgB7rDn3KWQVXjlQ9yJBGvS", tag: "Garden" },
      { name: "11. Ruang Dapur.jpg", id: "1gatjPe0EDJgatreHwGOiA111VYUOOLC2", tag: "Interior" },
      { name: "12. Kamar 1.jpg", id: "1aStRrIpm5CCdGwTMs3aHWgasXNq2Ezt6", tag: "Interior" },
      { name: "13. Kamar Mandi untuk Kamar 1.jpg", id: "1p6LdzcCukxeKXa5IquaJqsI49fNC-Vlh", tag: "Interior" },
      { name: "14. Kamar 2.jpg", id: "1ntolUT4at01EXse0G6851sBWCz_dqq93", tag: "Interior" }
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
