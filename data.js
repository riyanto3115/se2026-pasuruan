/**
 * ============================================================
 *  DATABASE SENSUS EKONOMI 2026 — BPS KABUPATEN PASURUAN
 *  File: data.js
 * ============================================================
 *  CARA UPDATE DATA:
 *  1. Edit file ini saja, JANGAN edit dashboard.html
 *  2. Simpan file ini, lalu refresh browser
 *  3. Format angka: gunakan angka biasa (bukan string)
 *  4. Status SLS: "open" = belum dikerjakan, "submit" = sudah
 * ============================================================
 */

const DB = {

  // ── INFO UMUM ──────────────────────────────────────────────
  meta: {
    nama_kabupaten: "Kabupaten Pasuruan",
    tahun: 2026,
    tanggal_update: "2026-05-25",  // format: YYYY-MM-DD
    target_selesai: "2026-06-30",  // batas akhir sensus
    total_pml: 180,
    total_ppl: 1334,
    total_sls: 9760,
  },

  // ── DATA KECAMATAN ─────────────────────────────────────────
  // Kolom: id, nama, jumlah_desa, jumlah_pml, jumlah_ppl, jumlah_sls
  kecamatan: [
    { id: "KEC01", nama: "Bangil",        jumlah_desa: 18, jumlah_pml: 10, jumlah_ppl: 74,  jumlah_sls: 540  },
    { id: "KEC02", nama: "Pandaan",       jumlah_desa: 18, jumlah_pml: 12, jumlah_ppl: 88,  jumlah_sls: 648  },
    { id: "KEC03", nama: "Gempol",        jumlah_desa: 14, jumlah_pml: 10, jumlah_ppl: 72,  jumlah_sls: 528  },
    { id: "KEC04", nama: "Beji",          jumlah_desa: 13, jumlah_pml: 8,  jumlah_ppl: 58,  jumlah_sls: 424  },
    { id: "KEC05", nama: "Rembang",       jumlah_desa: 19, jumlah_pml: 10, jumlah_ppl: 72,  jumlah_sls: 528  },
    { id: "KEC06", nama: "Kraton",        jumlah_desa: 17, jumlah_pml: 8,  jumlah_ppl: 56,  jumlah_sls: 408  },
    { id: "KEC07", nama: "Pohjentrek",    jumlah_desa: 8,  jumlah_pml: 4,  jumlah_ppl: 28,  jumlah_sls: 200  },
    { id: "KEC08", nama: "Gondangwetan",  jumlah_desa: 16, jumlah_pml: 6,  jumlah_ppl: 44,  jumlah_sls: 320  },
    { id: "KEC09", nama: "Rejoso",        jumlah_desa: 14, jumlah_pml: 6,  jumlah_ppl: 42,  jumlah_sls: 304  },
    { id: "KEC10", nama: "Grati",         jumlah_desa: 18, jumlah_pml: 8,  jumlah_ppl: 58,  jumlah_sls: 424  },
    { id: "KEC11", nama: "Nguling",       jumlah_desa: 13, jumlah_pml: 6,  jumlah_ppl: 44,  jumlah_sls: 320  },
    { id: "KEC12", nama: "Lekok",         jumlah_desa: 12, jumlah_pml: 6,  jumlah_ppl: 42,  jumlah_sls: 304  },
    { id: "KEC13", nama: "Winongan",      jumlah_desa: 14, jumlah_pml: 6,  jumlah_ppl: 40,  jumlah_sls: 288  },
    { id: "KEC14", nama: "Pasrepan",      jumlah_desa: 14, jumlah_pml: 6,  jumlah_ppl: 40,  jumlah_sls: 288  },
    { id: "KEC15", nama: "Lumbang",       jumlah_desa: 12, jumlah_pml: 6,  jumlah_ppl: 38,  jumlah_sls: 272  },
    { id: "KEC16", nama: "Puspo",         jumlah_desa: 8,  jumlah_pml: 4,  jumlah_ppl: 24,  jumlah_sls: 168  },
    { id: "KEC17", nama: "Tosari",        jumlah_desa: 9,  jumlah_pml: 4,  jumlah_ppl: 24,  jumlah_sls: 168  },
    { id: "KEC18", nama: "Purwodadi",     jumlah_desa: 14, jumlah_pml: 6,  jumlah_ppl: 40,  jumlah_sls: 288  },
    { id: "KEC19", nama: "Tutur",         jumlah_desa: 12, jumlah_pml: 6,  jumlah_ppl: 38,  jumlah_sls: 272  },
    { id: "KEC20", nama: "Prigen",        jumlah_desa: 14, jumlah_pml: 8,  jumlah_ppl: 56,  jumlah_sls: 408  },
    { id: "KEC21", nama: "Sukorejo",      jumlah_desa: 17, jumlah_pml: 8,  jumlah_ppl: 56,  jumlah_sls: 408  },
    { id: "KEC22", nama: "Kejayan",       jumlah_desa: 16, jumlah_pml: 8,  jumlah_ppl: 56,  jumlah_sls: 408  },
    { id: "KEC23", nama: "Wonorejo",      jumlah_desa: 13, jumlah_pml: 6,  jumlah_ppl: 42,  jumlah_sls: 304  },
    { id: "KEC24", nama: "Purwosari",     jumlah_desa: 12, jumlah_pml: 6,  jumlah_ppl: 42,  jumlah_sls: 304  },
  ],

  // ── DATA PML ──────────────────────────────────────────────
  // Kolom: id, nama, kec_id (merujuk ke id kecamatan di atas)
  pml: [
    { id: "PML001", nama: "Ahmad Fauzi",       kec_id: "KEC01" },
    { id: "PML002", nama: "Siti Rahayu",        kec_id: "KEC01" },
    { id: "PML003", nama: "Budi Santoso",       kec_id: "KEC01" },
    { id: "PML004", nama: "Endah Wulandari",    kec_id: "KEC02" },
    { id: "PML005", nama: "Rudi Hartono",       kec_id: "KEC02" },
    { id: "PML006", nama: "Wahyu Priyanto",     kec_id: "KEC02" },
    { id: "PML007", nama: "Dewi Anjani",        kec_id: "KEC03" },
    { id: "PML008", nama: "Eko Purnomo",        kec_id: "KEC03" },
    { id: "PML009", nama: "Gunawan Saputra",    kec_id: "KEC04" },
    { id: "PML010", nama: "Hendra Kurniawan",   kec_id: "KEC04" },
    { id: "PML011", nama: "Ika Ratnasari",      kec_id: "KEC05" },
    { id: "PML012", nama: "Joko Purnomo",       kec_id: "KEC05" },
    { id: "PML013", nama: "Lestari Wibowo",     kec_id: "KEC06" },
    { id: "PML014", nama: "Muhamad Rizal",      kec_id: "KEC06" },
    { id: "PML015", nama: "Nanda Arif",         kec_id: "KEC07" },
    { id: "PML016", nama: "Oktavia Dewi",       kec_id: "KEC08" },
    { id: "PML017", nama: "Prasetyo Adi",       kec_id: "KEC08" },
    { id: "PML018", nama: "Qori Andika",        kec_id: "KEC09" },
    { id: "PML019", nama: "Rina Wati",          kec_id: "KEC10" },
    { id: "PML020", nama: "Surya Dinata",       kec_id: "KEC11" },
    // ... tambahkan PML lain sesuai kebutuhan (total 180 PML)
    // Format: { id: "PMLxxx", nama: "Nama Lengkap", kec_id: "KECxx" }
  ],

  // ── DATA PPL ──────────────────────────────────────────────
  // Kolom: id, nama, pml_id, kec_id, desa, jenis_sls
  // jenis_sls: "RT" atau "Dusun"
  ppl: [
    { id: "PPL0001", nama: "Agus Setiawan",    pml_id: "PML001", kec_id: "KEC01", desa: "Desa Bangil",        jenis_sls: "RT"    },
    { id: "PPL0002", nama: "Bambang Irawan",   pml_id: "PML001", kec_id: "KEC01", desa: "Desa Kolursari",     jenis_sls: "RT"    },
    { id: "PPL0003", nama: "Candra Dewi",      pml_id: "PML002", kec_id: "KEC01", desa: "Desa Latek",         jenis_sls: "Dusun" },
    { id: "PPL0004", nama: "Dani Pratama",     pml_id: "PML002", kec_id: "KEC01", desa: "Desa Masangan",      jenis_sls: "RT"    },
    { id: "PPL0005", nama: "Eni Susanti",      pml_id: "PML004", kec_id: "KEC02", desa: "Desa Pandaan",       jenis_sls: "RT"    },
    { id: "PPL0006", nama: "Fajar Nugraha",    pml_id: "PML004", kec_id: "KEC02", desa: "Desa Kejapanan",     jenis_sls: "RT"    },
    { id: "PPL0007", nama: "Galih Permana",    pml_id: "PML005", kec_id: "KEC02", desa: "Desa Kutorejo",      jenis_sls: "RT"    },
    { id: "PPL0008", nama: "Heni Oktavia",     pml_id: "PML007", kec_id: "KEC03", desa: "Desa Gempol",        jenis_sls: "RT"    },
    { id: "PPL0009", nama: "Imam Mustofa",     pml_id: "PML007", kec_id: "KEC03", desa: "Desa Randupitu",     jenis_sls: "RT"    },
    { id: "PPL0010", nama: "Juliana Sari",     pml_id: "PML008", kec_id: "KEC03", desa: "Desa Wonokoyo",      jenis_sls: "Dusun" },
    { id: "PPL0011", nama: "Kurniawan S.",     pml_id: "PML009", kec_id: "KEC04", desa: "Desa Beji",          jenis_sls: "RT"    },
    { id: "PPL0012", nama: "Laila Nurhayati",  pml_id: "PML009", kec_id: "KEC04", desa: "Desa Ngempit",       jenis_sls: "RT"    },
    { id: "PPL0013", nama: "Muhamad Rizki",    pml_id: "PML010", kec_id: "KEC04", desa: "Desa Cangkringmalang",jenis_sls:"Dusun" },
    { id: "PPL0014", nama: "Nanda Permata",    pml_id: "PML011", kec_id: "KEC05", desa: "Desa Rembang",       jenis_sls: "RT"    },
    { id: "PPL0015", nama: "Okta Putra",       pml_id: "PML012", kec_id: "KEC05", desa: "Desa Tampung",       jenis_sls: "RT"    },
    { id: "PPL0016", nama: "Putri Rahayu",     pml_id: "PML013", kec_id: "KEC06", desa: "Desa Kraton",        jenis_sls: "RT"    },
    { id: "PPL0017", nama: "Qori Andika P.",   pml_id: "PML014", kec_id: "KEC06", desa: "Desa Sumberanyar",   jenis_sls: "Dusun" },
    { id: "PPL0018", nama: "Rizal Firmansyah", pml_id: "PML015", kec_id: "KEC07", desa: "Desa Pohjentrek",    jenis_sls: "RT"    },
    { id: "PPL0019", nama: "Santi Wijayanti",  pml_id: "PML016", kec_id: "KEC08", desa: "Desa Gondangwetan",  jenis_sls: "RT"    },
    { id: "PPL0020", nama: "Teguh Prasetyo",   pml_id: "PML017", kec_id: "KEC08", desa: "Desa Parelegi",      jenis_sls: "Dusun" },
    // ... tambahkan PPL lain (total 1334 PPL)
  ],

  // ── DATA SLS ──────────────────────────────────────────────
  /**
   * Ini adalah data utama evaluasi.
   * Kolom:
   *   id        : kode unik SLS
   *   ppl_id    : id PPL yang bertanggung jawab
   *   nama_sls  : nama RT/Dusun
   *   desa      : nama desa
   *   kec_id    : id kecamatan
   *   target    : jumlah usaha/bangunan yang harus dicacah (angka)
   *   open      : jumlah yang sudah dibuka/dikunjungi (angka)
   *   submit    : jumlah yang sudah disubmit/selesai (angka)
   *
   * PROGRES = (submit / target) × 100%
   *
   * UPDATE DATA: cukup ubah angka open dan submit di baris SLS yang bersangkutan
   */
  sls: [
    // ── PPL0001 — Agus Setiawan — Desa Bangil ──
    { id: "SLS00001", ppl_id: "PPL0001", nama_sls: "RT 001/RW 001", desa: "Desa Bangil",    kec_id: "KEC01", target: 45, open: 45, submit: 45 },
    { id: "SLS00002", ppl_id: "PPL0001", nama_sls: "RT 002/RW 001", desa: "Desa Bangil",    kec_id: "KEC01", target: 38, open: 38, submit: 38 },
    { id: "SLS00003", ppl_id: "PPL0001", nama_sls: "RT 001/RW 002", desa: "Desa Bangil",    kec_id: "KEC01", target: 52, open: 50, submit: 48 },
    { id: "SLS00004", ppl_id: "PPL0001", nama_sls: "RT 002/RW 002", desa: "Desa Bangil",    kec_id: "KEC01", target: 41, open: 30, submit: 28 },
    { id: "SLS00005", ppl_id: "PPL0001", nama_sls: "RT 001/RW 003", desa: "Desa Bangil",    kec_id: "KEC01", target: 36, open: 20, submit: 18 },

    // ── PPL0002 — Bambang Irawan — Desa Kolursari ──
    { id: "SLS00006", ppl_id: "PPL0002", nama_sls: "RT 001/RW 001", desa: "Desa Kolursari", kec_id: "KEC01", target: 55, open: 55, submit: 55 },
    { id: "SLS00007", ppl_id: "PPL0002", nama_sls: "RT 002/RW 001", desa: "Desa Kolursari", kec_id: "KEC01", target: 48, open: 48, submit: 45 },
    { id: "SLS00008", ppl_id: "PPL0002", nama_sls: "RT 001/RW 002", desa: "Desa Kolursari", kec_id: "KEC01", target: 42, open: 42, submit: 42 },
    { id: "SLS00009", ppl_id: "PPL0002", nama_sls: "RT 002/RW 002", desa: "Desa Kolursari", kec_id: "KEC01", target: 39, open: 30, submit: 25 },

    // ── PPL0003 — Candra Dewi — Desa Latek (SLS=Dusun) ──
    { id: "SLS00010", ppl_id: "PPL0003", nama_sls: "Dusun Barat",   desa: "Desa Latek",     kec_id: "KEC01", target: 80, open: 80, submit: 80 },
    { id: "SLS00011", ppl_id: "PPL0003", nama_sls: "Dusun Timur",   desa: "Desa Latek",     kec_id: "KEC01", target: 72, open: 72, submit: 72 },
    { id: "SLS00012", ppl_id: "PPL0003", nama_sls: "Dusun Tengah",  desa: "Desa Latek",     kec_id: "KEC01", target: 65, open: 65, submit: 65 },
    { id: "SLS00013", ppl_id: "PPL0003", nama_sls: "Dusun Selatan", desa: "Desa Latek",     kec_id: "KEC01", target: 58, open: 58, submit: 58 },

    // ── PPL0004 — Dani Pratama — Desa Masangan ──
    { id: "SLS00014", ppl_id: "PPL0004", nama_sls: "RT 001/RW 001", desa: "Desa Masangan",  kec_id: "KEC01", target: 44, open: 44, submit: 44 },
    { id: "SLS00015", ppl_id: "PPL0004", nama_sls: "RT 002/RW 001", desa: "Desa Masangan",  kec_id: "KEC01", target: 37, open: 37, submit: 37 },
    { id: "SLS00016", ppl_id: "PPL0004", nama_sls: "RT 001/RW 002", desa: "Desa Masangan",  kec_id: "KEC01", target: 50, open: 45, submit: 40 },
    { id: "SLS00017", ppl_id: "PPL0004", nama_sls: "RT 002/RW 002", desa: "Desa Masangan",  kec_id: "KEC01", target: 43, open: 30, submit: 22 },

    // ── PPL0005 — Eni Susanti — Desa Pandaan ──
    { id: "SLS00018", ppl_id: "PPL0005", nama_sls: "RT 001/RW 001", desa: "Desa Pandaan",   kec_id: "KEC02", target: 60, open: 30, submit: 18 },
    { id: "SLS00019", ppl_id: "PPL0005", nama_sls: "RT 002/RW 001", desa: "Desa Pandaan",   kec_id: "KEC02", target: 55, open: 20, submit: 12 },
    { id: "SLS00020", ppl_id: "PPL0005", nama_sls: "RT 001/RW 002", desa: "Desa Pandaan",   kec_id: "KEC02", target: 48, open: 15, submit:  8 },
    { id: "SLS00021", ppl_id: "PPL0005", nama_sls: "RT 002/RW 002", desa: "Desa Pandaan",   kec_id: "KEC02", target: 52, open: 10, submit:  5 },
    { id: "SLS00022", ppl_id: "PPL0005", nama_sls: "RT 003/RW 002", desa: "Desa Pandaan",   kec_id: "KEC02", target: 44, open:  8, submit:  3 },

    // ── PPL0006 — Fajar Nugraha — Desa Kejapanan ──
    { id: "SLS00023", ppl_id: "PPL0006", nama_sls: "RT 001/RW 001", desa: "Desa Kejapanan", kec_id: "KEC02", target: 70, open: 25, submit: 15 },
    { id: "SLS00024", ppl_id: "PPL0006", nama_sls: "RT 002/RW 001", desa: "Desa Kejapanan", kec_id: "KEC02", target: 65, open: 20, submit: 12 },
    { id: "SLS00025", ppl_id: "PPL0006", nama_sls: "RT 001/RW 002", desa: "Desa Kejapanan", kec_id: "KEC02", target: 58, open: 18, submit: 10 },
    { id: "SLS00026", ppl_id: "PPL0006", nama_sls: "RT 002/RW 002", desa: "Desa Kejapanan", kec_id: "KEC02", target: 62, open: 15, submit:  8 },

    // ── PPL0007 — Galih Permana — Desa Kutorejo ──
    { id: "SLS00027", ppl_id: "PPL0007", nama_sls: "RT 001/RW 001", desa: "Desa Kutorejo",  kec_id: "KEC02", target: 50, open: 20, submit: 10 },
    { id: "SLS00028", ppl_id: "PPL0007", nama_sls: "RT 002/RW 001", desa: "Desa Kutorejo",  kec_id: "KEC02", target: 45, open: 15, submit:  8 },
    { id: "SLS00029", ppl_id: "PPL0007", nama_sls: "RT 001/RW 002", desa: "Desa Kutorejo",  kec_id: "KEC02", target: 55, open: 18, submit:  9 },

    // ── PPL0008 — Heni Oktavia — Desa Gempol ──
    { id: "SLS00030", ppl_id: "PPL0008", nama_sls: "RT 001/RW 001", desa: "Desa Gempol",    kec_id: "KEC03", target: 58, open: 40, submit: 35 },
    { id: "SLS00031", ppl_id: "PPL0008", nama_sls: "RT 002/RW 001", desa: "Desa Gempol",    kec_id: "KEC03", target: 52, open: 38, submit: 32 },
    { id: "SLS00032", ppl_id: "PPL0008", nama_sls: "RT 001/RW 002", desa: "Desa Gempol",    kec_id: "KEC03", target: 48, open: 30, submit: 25 },
    { id: "SLS00033", ppl_id: "PPL0008", nama_sls: "RT 002/RW 002", desa: "Desa Gempol",    kec_id: "KEC03", target: 44, open: 28, submit: 22 },

    // ── PPL0009 — Imam Mustofa — Desa Randupitu ──
    { id: "SLS00034", ppl_id: "PPL0009", nama_sls: "RT 001/RW 001", desa: "Desa Randupitu", kec_id: "KEC03", target: 47, open: 35, submit: 30 },
    { id: "SLS00035", ppl_id: "PPL0009", nama_sls: "RT 002/RW 001", desa: "Desa Randupitu", kec_id: "KEC03", target: 42, open: 30, submit: 26 },
    { id: "SLS00036", ppl_id: "PPL0009", nama_sls: "RT 001/RW 002", desa: "Desa Randupitu", kec_id: "KEC03", target: 38, open: 28, submit: 22 },

    // ── PPL0010 — Juliana Sari — Desa Wonokoyo (Dusun) ──
    { id: "SLS00037", ppl_id: "PPL0010", nama_sls: "Dusun Krajan",   desa: "Desa Wonokoyo", kec_id: "KEC03", target: 90, open: 60, submit: 50 },
    { id: "SLS00038", ppl_id: "PPL0010", nama_sls: "Dusun Wetan",    desa: "Desa Wonokoyo", kec_id: "KEC03", target: 75, open: 50, submit: 42 },
    { id: "SLS00039", ppl_id: "PPL0010", nama_sls: "Dusun Kulon",    desa: "Desa Wonokoyo", kec_id: "KEC03", target: 68, open: 40, submit: 32 },

    // ── PPL0011 — Kurniawan S. — Desa Beji ──
    { id: "SLS00040", ppl_id: "PPL0011", nama_sls: "RT 001/RW 001", desa: "Desa Beji",      kec_id: "KEC04", target: 40, open: 40, submit: 40 },
    { id: "SLS00041", ppl_id: "PPL0011", nama_sls: "RT 002/RW 001", desa: "Desa Beji",      kec_id: "KEC04", target: 36, open: 36, submit: 36 },
    { id: "SLS00042", ppl_id: "PPL0011", nama_sls: "RT 001/RW 002", desa: "Desa Beji",      kec_id: "KEC04", target: 44, open: 44, submit: 44 },
    { id: "SLS00043", ppl_id: "PPL0011", nama_sls: "RT 002/RW 002", desa: "Desa Beji",      kec_id: "KEC04", target: 38, open: 38, submit: 38 },

    // ── PPL0012 — Laila Nurhayati — Desa Ngempit ──
    { id: "SLS00044", ppl_id: "PPL0012", nama_sls: "RT 001/RW 001", desa: "Desa Ngempit",   kec_id: "KEC04", target: 42, open: 42, submit: 42 },
    { id: "SLS00045", ppl_id: "PPL0012", nama_sls: "RT 002/RW 001", desa: "Desa Ngempit",   kec_id: "KEC04", target: 38, open: 38, submit: 38 },
    { id: "SLS00046", ppl_id: "PPL0012", nama_sls: "RT 001/RW 002", desa: "Desa Ngempit",   kec_id: "KEC04", target: 46, open: 46, submit: 45 },
    { id: "SLS00047", ppl_id: "PPL0012", nama_sls: "RT 002/RW 002", desa: "Desa Ngempit",   kec_id: "KEC04", target: 35, open: 32, submit: 30 },

    // ── PPL0013 — Muhamad Rizki — Desa Cangkringmalang (Dusun) ──
    { id: "SLS00048", ppl_id: "PPL0013", nama_sls: "Dusun Utara",   desa: "Desa Cangkringmalang", kec_id: "KEC04", target: 85, open: 85, submit: 72 },
    { id: "SLS00049", ppl_id: "PPL0013", nama_sls: "Dusun Selatan", desa: "Desa Cangkringmalang", kec_id: "KEC04", target: 78, open: 70, submit: 60 },
    { id: "SLS00050", ppl_id: "PPL0013", nama_sls: "Dusun Tengah",  desa: "Desa Cangkringmalang", kec_id: "KEC04", target: 70, open: 55, submit: 45 },

    // ── PPL0014 — Nanda Permata — Desa Rembang ──
    { id: "SLS00051", ppl_id: "PPL0014", nama_sls: "RT 001/RW 001", desa: "Desa Rembang",   kec_id: "KEC05", target: 48, open: 40, submit: 35 },
    { id: "SLS00052", ppl_id: "PPL0014", nama_sls: "RT 002/RW 001", desa: "Desa Rembang",   kec_id: "KEC05", target: 44, open: 38, submit: 32 },
    { id: "SLS00053", ppl_id: "PPL0014", nama_sls: "RT 001/RW 002", desa: "Desa Rembang",   kec_id: "KEC05", target: 52, open: 45, submit: 40 },

    // ── PPL0015 — Okta Putra — Desa Tampung ──
    { id: "SLS00054", ppl_id: "PPL0015", nama_sls: "RT 001/RW 001", desa: "Desa Tampung",   kec_id: "KEC05", target: 45, open: 45, submit: 45 },
    { id: "SLS00055", ppl_id: "PPL0015", nama_sls: "RT 002/RW 001", desa: "Desa Tampung",   kec_id: "KEC05", target: 40, open: 40, submit: 40 },
    { id: "SLS00056", ppl_id: "PPL0015", nama_sls: "RT 001/RW 002", desa: "Desa Tampung",   kec_id: "KEC05", target: 38, open: 38, submit: 38 },
    { id: "SLS00057", ppl_id: "PPL0015", nama_sls: "RT 002/RW 002", desa: "Desa Tampung",   kec_id: "KEC05", target: 42, open: 42, submit: 42 },

    // ── PPL0016 — Putri Rahayu — Desa Kraton (LAMBAT) ──
    { id: "SLS00058", ppl_id: "PPL0016", nama_sls: "RT 001/RW 001", desa: "Desa Kraton",    kec_id: "KEC06", target: 60, open: 15, submit:  8 },
    { id: "SLS00059", ppl_id: "PPL0016", nama_sls: "RT 002/RW 001", desa: "Desa Kraton",    kec_id: "KEC06", target: 55, open: 12, submit:  6 },
    { id: "SLS00060", ppl_id: "PPL0016", nama_sls: "RT 001/RW 002", desa: "Desa Kraton",    kec_id: "KEC06", target: 58, open: 10, submit:  5 },

    // ── PPL0017 — Qori Andika P. — Desa Sumberanyar (Dusun, LAMBAT) ──
    { id: "SLS00061", ppl_id: "PPL0017", nama_sls: "Dusun Barat",   desa: "Desa Sumberanyar", kec_id: "KEC06", target: 95, open: 20, submit: 12 },
    { id: "SLS00062", ppl_id: "PPL0017", nama_sls: "Dusun Timur",   desa: "Desa Sumberanyar", kec_id: "KEC06", target: 88, open: 18, submit: 10 },

    // ── PPL0018 — Rizal Firmansyah — Desa Pohjentrek ──
    { id: "SLS00063", ppl_id: "PPL0018", nama_sls: "RT 001/RW 001", desa: "Desa Pohjentrek", kec_id: "KEC07", target: 50, open: 50, submit: 48 },
    { id: "SLS00064", ppl_id: "PPL0018", nama_sls: "RT 002/RW 001", desa: "Desa Pohjentrek", kec_id: "KEC07", target: 45, open: 45, submit: 44 },
    { id: "SLS00065", ppl_id: "PPL0018", nama_sls: "RT 001/RW 002", desa: "Desa Pohjentrek", kec_id: "KEC07", target: 48, open: 48, submit: 46 },
    { id: "SLS00066", ppl_id: "PPL0018", nama_sls: "RT 002/RW 002", desa: "Desa Pohjentrek", kec_id: "KEC07", target: 42, open: 40, submit: 38 },

    // ── PPL0019 — Santi Wijayanti — Desa Gondangwetan ──
    { id: "SLS00067", ppl_id: "PPL0019", nama_sls: "RT 001/RW 001", desa: "Desa Gondangwetan", kec_id: "KEC08", target: 55, open: 35, submit: 28 },
    { id: "SLS00068", ppl_id: "PPL0019", nama_sls: "RT 002/RW 001", desa: "Desa Gondangwetan", kec_id: "KEC08", target: 50, open: 30, submit: 24 },
    { id: "SLS00069", ppl_id: "PPL0019", nama_sls: "RT 001/RW 002", desa: "Desa Gondangwetan", kec_id: "KEC08", target: 45, open: 28, submit: 22 },

    // ── PPL0020 — Teguh Prasetyo — Desa Parelegi (Dusun, LAMBAT) ──
    { id: "SLS00070", ppl_id: "PPL0020", nama_sls: "Dusun Krajan",  desa: "Desa Parelegi",  kec_id: "KEC08", target: 100, open: 20, submit: 12 },
    { id: "SLS00071", ppl_id: "PPL0020", nama_sls: "Dusun Kidul",   desa: "Desa Parelegi",  kec_id: "KEC08", target: 88,  open: 15, submit:  8 },

    // ── Tambahkan data SLS lain sesuai kebutuhan ──
    // Format:
    // { id: "SLSxxxxx", ppl_id: "PPLxxxx", nama_sls: "RT xxx/RW xxx", desa: "Desa ...",
    //   kec_id: "KECxx", target: 0, open: 0, submit: 0 },
  ],

}; // akhir DB
