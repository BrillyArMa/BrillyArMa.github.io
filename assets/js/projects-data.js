// ============================================================
// DATA PROJECT: edit this file only for add new / update project detail.
// t("English", "Indonesia") = text multi language.
// ============================================================

const t = (en, id) => ({ en, id });

window.PROJECTS = [
  {
    id: "whatsapp-bot-cendana",
    type: "automation",
    image: "assets/img/RAG-Retriever-LLM.png",
    title: "AI WhatsApp Chat Bot - Cendana Music Studio",
    role: t("AI Automation Engineer", "AI Automation Engineer"),
    period: t("2026 · Client Project", "2026 · Proyek Klien"),
    summary: t(
      "A WhatsApp assistant for a small music studio. It answers customer questions, checks the calendar, works out the price and books sessions without an admin typing a single reply.",
      "Asisten WhatsApp untuk sebuah studio musik kecil. Dia menjawab pertanyaan pelanggan, mengecek kalender, menghitung biaya, dan mencatat booking tanpa admin perlu membalas satu per satu.",
    ),
    problem: t(
      "Cendana Music Studio ran its WhatsApp by hand. Every question about prices, rules or free slots, and every booking, went through an admin. When the admin was busy, replies could take hours, and it was easy to misread a date or a time while checking the schedule by manual. The owner was planning to pay someone extra just to look after the chat.",
      "Semua chat WhatsApp di Cendana Music Studio dibalas manual. Pertanyaan tentang harga, aturan, atau jam kosong, sampai booking, semuanya melalui admin. Jika admin sedang sibuk, balasan baru bisa diberikan berjam-jam kemudian, dan mengecek jadwal secara manual dapat terjadi salah baca tanggal atau jam. Owner berencana membayar tambahan untuk orang yang khusus mengurus chat.",
    ),
    solution: t(
      "I built an n8n workflow that connects WhatsApp to an AI model running on a private server. The assistant answers from the studio's price list and rules, and checks Google Calendar for free slots. It works out the total, discounts included, and writes each confirmed booking to the calendar and a spreadsheet. Payment stays manual: the owner prefers to be paid at the studio after the session, so I left that part alone.",
      "Saya membuat workflow n8n yang menghubungkan WhatsApp dengan model AI di server private. Asisten menjawab dari daftar harga dan aturan studio, lalu mengecek Google Calendar untuk jam yang masih kosong. Total biaya dihitung otomatis, termasuk diskon, dan setiap booking yang sudah dikonfirmasi dicatat ke kalender dan spreadsheet. Pembayaran tetap manual karena owner memilih menerima bayaran di studio setelah sewa selesai, jadi bagian itu sengaja tidak saya otomatisasi.",
    ),
    results: [
      {
        value: "89%",
        label: t(
          "of the booking steps now handled automatically",
          "langkah penanganan booking yang kini berjalan otomatis",
        ),
      },
      {
        value: t("Rp120,000", "Rp120.000"),
        label: t(
          "per month in extra staffing the owner no longer needs (~US$7)",
          "per bulan untuk tenaga tambahan yang tidak jadi dibayarkan (~US$7)",
        ),
      },
      {
        value: t("Instant", "Instan"),
        label: t(
          "replies at any time of day, instead of waiting for an admin",
          "balasan di jam berapa pun, tanpa menunggu admin",
        ),
      },
    ],
    flow: [
      t(
        "A customer messages the studio on WhatsApp, usually asking about prices, rules or facilities.",
        "Pelanggan mengirim pesan ke WhatsApp studio, biasanya menanyakan harga, aturan, atau fasilitas.",
      ),
      t(
        "The assistant answers from the studio's price list and house rules.",
        "Asisten menjawab berdasarkan daftar harga dan aturan studio.",
      ),
      t(
        "To book, the customer fills in a short form. The assistant checks it for mistakes and repeats the details back.",
        "Untuk booking, pelanggan mengisi data formulir singkat. Asisten memeriksa kalau ada yang tidak benar, lalu mengulang datanya untuk dikonfirmasi kembali.",
      ),
      t(
        "Once the customer confirms, it looks at Google Calendar. If the slot is taken, it says sorry and suggests times that are free.",
        "Setelah pelanggan setuju, asisten mengecek Google Calendar. Kalau jamnya sudah terisi, ia meminta maaf dan menawarkan jam lain yang masih tersedia.",
      ),
      t(
        "If the slot is free, the booking goes into the calendar and the spreadsheet, and the customer gets a summary.",
        "Kalau jamnya kosong, booking dicatat di kalender dan spreadsheet, lalu pelanggan menerima ringkasannya.",
      ),
      t(
        "A short satisfaction survey closes the chat.",
        "Chat ditutup dengan survei kepuasan singkat.",
      ),
      t(
        "At 07:00 every morning, the owner gets the renter list as an Excel file.",
        "Setiap pukul 07.00, owner menerima daftar penyewa dalam bentuk file Excel.",
      ),
    ],
    features: [
      t(
        "Price answers that cover weekday and weekend rates, add-ons and package discounts",
        "Jawaban harga lengkap: tarif weekday dan weekend, tambahan alat, dan diskon paket",
      ),
      t(
        "Questions about facilities, how to book and studio rules",
        "Pertanyaan soal fasilitas, cara memesan, dan aturan studio",
      ),
      t(
        "Availability check on Google Calendar, with other times suggested when a slot is taken",
        "Cek jadwal di Google Calendar dan menawarkan jam lain bila sudah terisi",
      ),
      t(
        "A summary for the customer to confirm before anything is saved",
        "Ringkasan untuk dikonfirmasi pelanggan sebelum data disimpan",
      ),
      t(
        "Complaints and a short satisfaction survey",
        "Penanganan komplain dan survei kepuasan singkat",
      ),
      t(
        "A renter list in Excel, sent to the owner every morning",
        "Daftar penyewa dalam Excel yang dikirim ke owner setiap pagi",
      ),
    ],
    decisions: [
      {
        title: t(
          "Prices and bookings live in Google Sheets",
          "Harga dan booking disimpan di Google Sheets",
        ),
        why: t(
          "The owner can change a price or look through the renter list without touching a database or asking me.",
          "Owner bisa mengubah harga atau melihat daftar penyewa sendiri, tanpa perlu menyentuh database atau menghubungi saya.",
        ),
      },
      {
        title: t(
          "Google Calendar decides what's free",
          "Google Calendar jadi patokan jadwal",
        ),
        why: t(
          "Each confirmed booking becomes an event under the renter's name, and every new request is checked against it. Overlapping bookings get turned down in the chat, and no one has to read dates and hours off a list by manual.",
          "Setiap booking yang sudah dikonfirmasi menjadi event atas nama penyewa, dan permintaan baru selalu dicocokkan ke sana. Jadwal yang bentrok langsung ditolak di chat, dan tidak ada lagi yang salah membaca tanggal atau jam.",
        ),
      },
      {
        title: t("Confirm first, check second", "Konfirmasi dulu, baru dicek"),
        why: t(
          "The assistant repeats the details back before it touches the calendar. A wrong detail gets fixed in the chat instead of turning into a wrong booking.",
          "Asisten mengulang data sebelum membuka kalender. Kalau ada yang salah, langsung dibetulkan di chat sehingga tidak ada booking yang keliru.",
        ),
      },
      {
        title: t("Payment stays manual", "Pembayaran tetap manual"),
        why: t(
          "The owner takes payment at the studio after the session, so there is nothing for the workflow to verify. I only automated what the business actually needed.",
          "Owner menerima pembayaran di studio setelah sewa, jadi tidak ada yang perlu diverifikasi workflow. Saya hanya mengotomatisasi bagian yang memang dibutuhkan.",
        ),
      },
      {
        title: t(
          "Redis keeps the conversation in mind",
          "Redis untuk mengingat percakapan",
        ),
        why: t(
          "Redis holds each customer's recent messages for a short while, so the assistant remembers what was already said and doesn't ask the same thing twice.",
          "Redis menyimpan pesan terbaru tiap pelanggan untuk sementara, jadi asisten ingat apa yang sudah dibahas dan tidak menanyakan hal yang sama dua kali.",
        ),
      },
      {
        title: t(
          "The AI runs on a private server",
          "AI berjalan di server privat",
        ),
        why: t(
          "Customer chats include names, phone numbers and booking details. Running the model on a private inference server keeps that data on a server we control instead of sending it to an outside AI provider.",
          "Chat pelanggan berisi nama, nomor telepon, dan data booking. Dengan model yang berjalan di private inference server, data itu tetap berada di server yang kami kendalikan dan tidak dikirim ke penyedia AI luar.",
        ),
      },
      {
        title: t(
          "PostgreSQL for studying how people use it",
          "PostgreSQL untuk menganalisis penggunaan",
        ),
        why: t(
          "I log interactions in PostgreSQL so I can see what customers actually ask and improve the assistant from there.",
          "Saya menyimpan data interaksi pelanggan dengan PostgreSQL untuk melihat apa saja yang sebenarnya ditanyakan pelanggan, lalu memperbaiki asisten dari situ.",
        ),
      },
    ],
    challenges: [
      t(
        "People type booking details however they like, and the details don't always agree. In one sample chat the time range was 2 PM to 6 PM (4 hours), but the duration said 2 hours. The assistant caught it and asked which was right before working out the price.",
        "Pengguna menulis data booking sesuka mereka, dan terkadang isinya tidak selalu benar. Di salah satu contoh chat, jamnya tertulis mulai sewa dari jam 2 siang sampai jam 6 sore (4 jam), tetapi durasi sewanya hanya tertulis 2 jam. Asisten menangkap perbedaan itu dan menanyakan mana yang benar sebelum menghitung biaya.",
      ),
      t(
        "A request can clash with an existing booking only in part. If booking 3 PM to 7 PM is taken, 6 PM to 9 PM has to be refused as well. The assistant apologizes and offers times outside the booked slot.",
        "Permintaan bisa bentrok dengan jadwal booking yang lain. Jika booking jam 3 sore sampai 7 malam sudah terisi, maka permintaan jam 6 sore sampai 9 malam tetap harus ditolak. Asisten meminta maaf dan menawarkan jam lain di luar dari jadwal yang telah terisi.",
      ),
    ],
    usecases: [
      t("Salons", "Salon"),
      t("Clinics & doctors' practices", "Klinik & praktik dokter"),
      t("Sports courts (football, padel)", "Lapangan olahraga (bola, padel)"),
      t("Photo & recording studios", "Studio foto & rekaman"),
      t("Meeting rooms & co-working", "Ruang rapat & co-working"),
      t("Equipment & vehicle rental", "Rental peralatan & kendaraan"),
      t("Barbershops & spas", "Barbershop & spa"),
      t("Tutoring & coaching sessions", "Les & sesi coaching"),
    ],
    tech: [
      "n8n",
      "Google Calendar API",
      "Google Sheets API",
      "WhatsApp",
      "Redis",
      "PostgreSQL",
      "Private Inference Servers",
    ],
    domain: ["Music Studio", "AI Chatbot"],
    gallery: [
      // { src: "assets/img/chat-booking-1.png", caption: t("Price question and availability check", "Pertanyaan harga dan cek jadwal") }
    ],
    links: {
      study:
        "https://github.com/BrillyArMa/project-showcase/tree/2bab42e7f9203ce6dc2248ba15a2dc19dd1b7640/whatsapp-bot-cendana",
      demo: "",
      repo: "",
      video: "",
    },
  },
  {
    id: "raisa",
    type: "code",
    image: "assets/img/raisa.png",
    title: "RAISA Reporting & Analysis Integrated System",
    role: t("Developer", "Developer"),
    period: "2020-2022 · Telkomsel",
    summary: t(
      "A centralized reporting platform for GraPARI operations that replaced inconsistent manual reports with one database.",
      "Platform pelaporan terpusat untuk operasional GraPARI yang menggantikan laporan manual yang tidak seragam dengan satu database.",
    ),
    problem: t(
      "Each area reported Brief/Debrief, Revenue Handover and Operational Compliance in its own manual format, so the Head Office could not analyze the data quickly.",
      "Tiap area melaporkan Brief/Debrief, Revenue Handover, dan Operational Compliance dengan format manual sendiri, sehingga Head Office sulit menganalisis data dengan cepat.",
    ),
    solution: t(
      "A web application with standardized input forms that stores every area's report in one integrated database, accessed through VPN.",
      "Aplikasi web dengan form input standar yang menyimpan laporan semua area dalam satu database terintegrasi, diakses melalui VPN.",
    ),
    results: [
      {
        value: "2020",
        label: t(
          "Best Application of Sales Directorate award",
          "Penghargaan Best Application of Sales Directorate",
        ),
      },
    ],
    features: [
      t(
        "Standardized forms for 3 report types",
        "Form standar untuk 3 jenis laporan",
      ),
      t(
        "Centralized database for all areas",
        "Database terpusat untuk semua area",
      ),
      t(
        "Faster analysis for the Head Office",
        "Analisis lebih cepat untuk Head Office",
      ),
    ],
    tech: ["CodeIgniter", "MySQL Database", "VPN", "OLTP Application"],
    domain: ["Sales Department"],
    gallery: [],
    note: t(
      "Internal system, described at process level. Names, data and screenshots are anonymized.",
      "Sistem internal, dijelaskan pada tingkat proses. Nama, data, dan screenshot disamarkan.",
    ),
    flow: [],
    decisions: [],
    usecases: [],
    links: {
      study: "https://github.com/brillyarma/project-showcase/tree/main/raisa/",
      demo: "",
      repo: "",
      video: "",
    },
    challenges: [],
  },
  {
    id: "private-llm",
    type: "automation",
    image: "assets/img/Private-LLM-Deployment_RL.png",
    title: "Private LLM Infrastructure & Secure Inference",
    role: t("Software Engineer", "Software Engineer"),
    period: t("2026 · Independent Project", "2026 · Proyek Mandiri"),
    summary: t(
      "A self-hosted LLM environment so sensitive data stays under your control.",
      "Lingkungan LLM self-hosted agar data sensitif tetap berada dalam kendali sendiri.",
    ),
    problem: t(
      "Premium external AI services are costly and send sensitive information to third parties.",
      "Layanan AI premium eksternal mahal dan mengirim informasi sensitif ke pihak ketiga.",
    ),
    solution: t(
      "Private inference servers reachable from multiple platforms through secure VPN tunneling, designed for data privacy and security.",
      "Private inference server yang dapat diakses dari banyak platform lewat VPN aman, dirancang untuk privasi dan keamanan data.",
    ),
    results: [],
    features: [],
    tech: ["Docker", "Private Inference Servers", "VPN", "LM Studio"],
    domain: [],
    gallery: [],
    flow: [],
    decisions: [],
    usecases: [],
    links: {
      study:
        "https://github.com/brillyarma/project-showcase/tree/main/private-llm-infrastructure/",
      demo: "",
      repo: "",
      video: "",
    },
    challenges: [],
  },
  {
    id: "business-solution-analysis",
    type: "code",
    image: "assets/img/executive-interaction-date-filter.png",
    title: "Business Solution Analysis & Data Strategy",
    role: t("Technical Liaison", "Technical Liaison"),
    period: "2020-2022 · Telkomsel",
    summary: t(
      "Turned business needs from Sales teams into clear technical requirements for IT.",
      "Menerjemahkan kebutuhan bisnis tim Sales menjadi kebutuhan teknis yang jelas untuk IT.",
    ),
    problem: t(
      "Sales and Escalation teams had needs that IT could not act on without clear requirements.",
      "Tim Sales dan Escalation memiliki kebutuhan yang tidak bisa dikerjakan IT tanpa kebutuhan yang jelas.",
    ),
    solution: t(
      "Wrote 4+ Business Requirement Documents for dashboards and internal tools, and managed a high-priority Big Data migration requested by the General Manager of Sales.",
      "Menyusun 4+ Business Requirement Document untuk dashboard dan internal tools, serta mengelola migrasi Big Data prioritas tinggi atas permintaan General Manager Sales.",
    ),
    results: [{ value: "4+", label: t("BRDs delivered", "BRD diselesaikan") }],
    features: [],
    tech: ["Balsamiq Wireframe", "Hadoop", "Tableau"],
    domain: ["Business Analysis"],
    gallery: [],
    note: t(
      "Internal system, described at process level. Names, data and screenshots are anonymized.",
      "Sistem internal, dijelaskan pada tingkat proses. Nama, data, dan screenshot disamarkan.",
    ),
    flow: [],
    decisions: [],
    usecases: [],
    links: {
      study:
        "https://github.com/brillyarma/project-showcase/tree/main/business-solution-analysis/",
      demo: "",
      repo: "",
      video: "",
    },
    challenges: [],
  },
  {
    id: "mbjj",
    type: "code",
    image: "assets/img/mbjj.jpg",
    title: "Merdeka Belajar Jarak Jauh (MBJJ) Data System",
    role: t("Developer", "Developer"),
    period: "2020-2022 · Telkomsel",
    summary: t(
      "A data system that verifies student, teacher and parent eligibility during COVID-19 remote learning.",
      "Sistem data yang memverifikasi kelayakan siswa, guru, dan orang tua selama pembelajaran jarak jauh COVID-19.",
    ),
    problem: t(
      "Customer Service had to verify eligibility manually and escalate to IT, which took time.",
      "Customer Service harus memverifikasi kelayakan secara manual dan eskalasi ke IT, sehingga memakan waktu.",
    ),
    solution: t(
      "A centralized database and web interface integrating Kemendikbud and Dukcapil datasets, with automated verification so CS can validate eligibility instantly.",
      "Database terpusat dan antarmuka web yang mengintegrasikan data Kemendikbud dan Dukcapil, dengan verifikasi otomatis agar CS dapat memvalidasi kelayakan seketika.",
    ),
    results: [],
    features: [],
    tech: ["Full-Stack PHP", "Oracle Database"],
    domain: ["Telecommunication", "Education"],
    gallery: [],
    note: t(
      "Internal system, described at process level. Names, data and screenshots are anonymized.",
      "Sistem internal, dijelaskan pada tingkat proses. Nama, data, dan screenshot disamarkan.",
    ),
    flow: [],
    decisions: [],
    usecases: [],
    links: {
      study: "https://github.com/brillyarma/project-showcase/tree/main/mbjj/",
      demo: "",
      repo: "",
      video: "",
    },
    challenges: [],
  },
  {
    id: "ekskul-widuri",
    type: "code",
    image: "assets/img/ekskul.png",
    title: "Web Pendaftaran & Informasi Ekskul SMA Widuri",
    role: t("Developer", "Developer"),
    period: "2018-2019 · Gunadarma University",
    summary: t(
      "A dual-portal web app that digitizes extracurricular registration and grading.",
      "Aplikasi web dua portal yang mendigitalkan pendaftaran dan penilaian ekstrakurikuler.",
    ),
    problem: t(
      "Extracurricular administration was done manually.",
      "Administrasi ekstrakurikuler dilakukan secara manual.",
    ),
    solution: t(
      "Students see schedules and evaluations; teachers manage registrations and grades.",
      "Siswa melihat jadwal dan evaluasi; guru mengelola pendaftaran dan nilai.",
    ),
    results: [],
    features: [],
    tech: ["CodeIgniter", "MySQL Database"],
    domain: ["Education"],
    gallery: [],
    flow: [],
    decisions: [],
    usecases: [],
    links: {
      study:
        "https://github.com/brillyarma/project-showcase/tree/main/ekskul-registration/",
      demo: "",
      repo: "",
      video: "",
    },
    challenges: [],
  },
];
