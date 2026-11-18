$(function () {
      const $nav = $("#site-nav"),
        $menu = $("#nav-menu"),
        $toggle = $("#nav-toggle"),
        $top = $("#back-to-top");
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      /* ---------- 1. Menu hamburger ---------- */
      const setMenu = (open) => {
        $menu.toggleClass("open", open);
        $toggle.attr("aria-expanded", open).find("i").toggleClass("fa-bars", !open).toggleClass("fa-times", open);
      };
      $toggle.on("click", () => setMenu(!$menu.hasClass("open")));
      $(document).on("click", (e) => {
        if (!$(e.target).closest("#site-nav").length) setMenu(false);
      });
      $(document).on("keydown", (e) => {
        if (e.key === "Escape") setMenu(false);
      });
      $(window).on("resize", () => {
        if (window.innerWidth >= 1024) setMenu(false);
      });

      /* ---------- 2. Smooth scroll back to top ---------- */
      const SCROLL_OFFSET = 0;
      const scrollToY = (y) => window.scrollTo({
        top: y,
        behavior: reduceMotion ? "auto" : "smooth"
      }); // scroll bawaan browser
      $(document).on("click", 'a[href^="#"]', function (e) {
        const hash = $(this).attr("href");
        const el = hash === "#" ? null : document.getElementById(hash.slice(1));
        if (hash !== "#" && !el) return;
        e.preventDefault();
        setMenu(false);
        scrollToY(el ? Math.max(0, $(el).offset().top - SCROLL_OFFSET) : 0);
      });
      $(window).on("scroll", () => $top.toggleClass("hidden", $(window).scrollTop() <= 300));

      /* ---------- 3. Language EN / ID ---------- */
      const T = [];
      const add = ($e, id) => T.push([$e, id]);
      const many = ($e, list) => $.each(list, (i, t) => add($e.eq(i), t));
      const cards = $("#projects .grid > div"),
        exp = $("#experience .grid > div");

      many($("#nav-menu a"), ["Beranda", "Tentang Saya", "Proyek", "Pengalaman", "Keahlian", "Sertifikasi",
        "Kontak"
      ]);
      add($("#hero p"), "Solusi Bisnis Berbasis AI, FullStack Developer & Auditor | Penggemar Keamanan Siber");
      many($("#hero .flex a"), ["Lihat Proyek", "Hubungi Saya"]);

      add($("#about h2"), "Tentang Saya");
      add($("#about p").eq(0),
        `Profesional dengan keahlian hibrida di bidang Keamanan Data, Pengembangan Perangkat Lunak, dan Implementasi Bisnis. Selama di <b>Telkomsel (2020–2022)</b>, saya membangun sistem penting, mulai dari platform pelaporan analitik hingga solusi pengelolaan data yang kompleks, yang membuktikan kemampuan saya mengubah kebutuhan bisnis yang rumit menjadi kode yang skalabel dan fungsional. Keahlian ini semakin dalam berkat empat tahun saya sebagai <b>Auditor Internal di BNN</b>, tempat saya memahami tata kelola risiko dan identifikasi kerentanan secara sistematis. Kini saya memadukan dua disiplin ini untuk merancang solusi berbasis AI (LLM) yang inovatif dalam fungsi sekaligus menjaga integritas data dari ujung ke ujung.`
      );
      add($("#about p").eq(1), `"Inovasi digerakkan oleh data dan dilindungi oleh prinsip keamanan."`);

      add($("#projects h2"), "Ringkasan Proyek");
      add($("#projects .p-6 > p:first-of-type"), (en) => en.replace("Role:", "Peran:").replace(
        "Independent Project", "Proyek Mandiri"));
      add($("#projects .p-6 > a"), "Detail Proyek");
      add(cards.eq(3).find("span.bg-gray-100"), "Internet Gratis");
      add(cards.eq(5).find("h3"), "Web Pendaftaran &amp; Informasi Ekskul SMA Widuri");
      const sums = [
        "Chatbot AI WhatsApp yang cerdas dan responsif untuk menjawab pertanyaan dan memproses booking studio musik. Menghemat Rp120.000/bulan dan 89% lebih efisien.",
        "Merancang lingkungan LLM privat dengan server inferensi aman untuk solusi AI internal.",
        "Menyusun 4+ Business Requirement Document (BRD) untuk pengembangan dashboard dan alat internal.",
        "Mengembangkan sistem data daring untuk mengelola autentikasi siswa, guru, dan orang tua selama pandemi COVID-19.",
        "Mengembangkan sistem pelaporan terpusat untuk GraPARI dengan menyatukan data manual dari berbagai area ke dalam satu database terintegrasi.",
        "Menyederhanakan administrasi ekstrakurikuler sekolah dengan mendigitalkan proses manual menjadi platform yang lebih tertata dan mudah diakses semua pengguna."
      ];
      cards.each(function (i) {
        add($(this).find(".p-6 > p").eq(1), sums[i]);
      });

      add($("#experience h2"), "Pengalaman Profesional");
      add($("#experience .grid > div > span"), (en) => en.replace("Present", "Sekarang"));
      const bullets = [
        ["Melaksanakan penilaian kerentanan keamanan TI dan audit ISO 27001 untuk divisi riset BNN.",
          "Mengelola siklus audit internal di Kantor Pusat dan unit daerah untuk memastikan kepatuhan terhadap kebijakan.",
          "Menerapkan komponen utama SAKIP (Sistem Akuntabilitas Kinerja Instansi Pemerintah) untuk meningkatkan transparansi layanan.",
          "Melakukan penilaian risiko menyeluruh dan memberikan rekomendasi berbasis data untuk menekan kerentanan operasional."
        ],
        ["Menjadi Technical Liaison utama antara tim Sales/Escalation dan IT, menerjemahkan kebutuhan bisnis non-teknis yang kompleks menjadi spesifikasi teknis yang dapat dikerjakan.",
          "Menyusun 4+ Business Requirement Document (BRD) untuk dashboard dan alat internal baru agar pengembangan selaras dengan tujuan pertumbuhan perusahaan.",
          "Mengelola proyek migrasi Big Data prioritas tinggi atas permintaan GM Sales untuk meningkatkan skalabilitas dan aksesibilitas data antardepartemen.",
          "Mengembangkan platform pelaporan terpusat untuk operasional GraPARI (Brief, Revenue Handover, Operational Compliance).",
          "Menyeragamkan input manual dari berbagai area ke dalam satu database terpadu sehingga analisis data untuk Head Office lebih cepat dan akurat.",
          `Efisiensi sistem ini mengantarkan pada penghargaan <span class="font-semibold">"Best Application of Sales Directorate"</span> pada 2020.`,
          "Merancang dan merilis database terpusat serta antarmuka web untuk mengelola data kelayakan jutaan siswa, guru, dan orang tua selama pandemi.",
          "Membangun sistem verifikasi otomatis yang memvalidasi kelayakan pelanggan seketika, sehingga waktu verifikasi manual jauh berkurang dan eskalasi lebih lancar."
        ],
        ["Meningkatkan hasil belajar mahasiswa melalui praktikum intensif di tiga bidang: Jaringan Komputer (rata-rata pemahaman 83%), Pengembangan Aplikasi Android (80%), dan implementasi FPGA (87%).",
          "Merancang, mengembangkan, dan menerapkan modul pembelajaran yang digunakan lebih dari 40 mahasiswa per semester untuk mendukung kebutuhan teori dan praktik kurikulum.",
          "Mengelola seluruh siklus penilaian akademik, termasuk menyusun instrumen ujian dan memberikan evaluasi kinerja teknis yang rinci untuk memastikan kompetensi mahasiswa."
        ]
      ];
      exp.each(function (i) {
        many($(this).find("li"), bullets[i]);
      });

      add($("#skills h2"), "Teknologi & Keahlian");
      add($("#certifications h2"), "Sertifikasi & Pelatihan");
      many($("#certifications th"), ["Tahun", "Pengembangan Profesional", "Organisasi"]);

      add($("#contact h1"), "Hubungi Saya");
      add($("#contact p").eq(0),
        "Punya ide proyek atau sekadar ingin menyapa? Saya selalu terbuka untuk terhubung dengan orang-orang berbakat dan menjajaki peluang baru. Mari bangun sesuatu yang hebat!"
      );
      const cT = ["Profil GitHub", "LinkedIn", "Kirim Email", "Telepon Saya"];
      const cS = ["Lihat repositori kode saya", "Terhubung secara profesional dengan saya",
        "Kirim pesan langsung kepada saya", "Hubungi saya lewat telepon"
      ];
      $("#contact .space-y-6 a").each(function (i) {
        add($(this).find("span").eq(0), cT[i]);
        add($(this).find("span").eq(1), cS[i]);
      });
      add($("footer p").eq(0), "Hak Cipta &copy; 2026, Brilly Arfendo Gautama. Seluruh hak dilindungi.");

      function setLang(lang) {
        $.each(T, (_, [$e, id]) => $e.each(function () {
          const $el = $(this);
          if ($el.data("en") === undefined) $el.data("en", $el.html()); // first time save teks in Inggris
          const en = $el.data("en");
          $el.html(lang === "id" ? (typeof id === "function" ? id(en) : id) : en);
        }));
        $("html").attr("lang", lang);
        $(".lang-btn").each(function () {
          const on = $(this).data("lang") === lang;
          $(this).toggleClass("bg-white text-black font-semibold", on).toggleClass("text-white", !on).attr(
            "aria-pressed", on);
        });
        try {
          localStorage.setItem("lang", lang);
        } catch (e) {}
      }
      let saved = null;
      try {
        saved = localStorage.getItem("lang");
      } catch (e) {}
      const q = new URLSearchParams(location.search).get("lang");
      const start = [q, saved].find((l) => l === "id" || l === "en") || "en"; // default: English
      $(".lang-btn").on("click", function () {
        setLang($(this).data("lang"));
      });
      setLang(start);
    });
