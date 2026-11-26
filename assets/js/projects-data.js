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
      "A web app that replaced Google Forms and spreadsheets for GraPARI, Telkomsel's customer service outlets. Outlets report once, in one place, and the numbers are calculated for them.",
      "Aplikasi web yang menggantikan Google Form dan spreadsheet untuk GraPARI, gerai layanan pelanggan Telkomsel. Outlet melapor sekali di satu tempat, dan angkanya dihitung otomatis."
    ),
    problem: t(
      "Before RAISA, head office sent a Google Form link to the area teams, who passed it on to each outlet. Outlet names were misspelled, numbers were written in different formats, totals had to be recalculated by hand, and getting one period or a few outlets meant downloading everything and filtering it afterwards. The area teams spent days cleaning data before it could reach head office.",
      "Sebelum RAISA, pusat mengirim tautan Google Form ke tim area, lalu diteruskan ke tiap outlet. Nama outlet salah ketik, angka ditulis dengan format berbeda, total harus dihitung ulang manual, dan untuk mengambil satu periode atau beberapa outlet saja, semua data harus diunduh lalu disaring sendiri. Tim area menghabiskan beberapa hari untuk merapikan data sebelum sampai ke pusat."
    ),
    solution: t(
      "RAISA is an internal web application, reachable over VPN and hosted on the company's own servers. Outlets fill in standard forms, or upload an Excel template, with the questions, number formats and outlet list built in. The app calculates the percentages, as a preview before submitting and as the final value after, and everything lands in one database. Data can be filtered by date, month or outlet and downloaded as Excel.",
      "RAISA adalah aplikasi web internal yang diakses lewat VPN dan dihosting di server milik perusahaan. Outlet mengisi form standar, atau mengunggah template Excel, dengan daftar pertanyaan, format angka, dan daftar outlet yang sudah tertanam. Aplikasi menghitung persentase, berupa pratinjau sebelum submit dan nilai akhir setelahnya, dan semuanya masuk ke satu database. Data bisa disaring berdasarkan tanggal, bulan, atau outlet lalu diunduh sebagai Excel."
    ),
    results: [
      { value: t("~5 days", "~5 hari"), label: t("of working time saved per reporting cycle (my estimate)", "waktu kerja dihemat tiap siklus pelaporan (perkiraan saya)") },
      { value: t("~400 outlets", "~400 outlet"), label: t("across four regional areas, about 3,000 staff (2021)", "di empat area wilayah, sekitar 3.000 pegawai (2021)") },
      { value: "2020", label: t("Best Application of Sales Directorate award", "Penghargaan Best Application of Sales Directorate") }
    ],
    flow: [
      t("Outlet staff or team leaders fill in the daily brief and debrief, in the app or by uploading an Excel template.", "Staf outlet atau team leader mengisi brief dan debrief harian, di aplikasi atau lewat unggahan template Excel."),
      t("Every week they do backchecking: the work, data and reports are re-checked, and the percentage is calculated automatically.", "Setiap minggu mereka melakukan backchecking: hasil kerja, data, dan laporan diperiksa ulang, dan persentasenya dihitung otomatis."),
      t("Each month, a supervisor approves the revenue handover minutes for their own region.", "Setiap bulan, supervisor menyetujui berita acara serah terima revenue untuk wilayahnya sendiri."),
      t("Head office receives the data as soon as it is submitted and checks the summary instead of the whole dataset.", "Pusat menerima data begitu disubmit dan cukup memeriksa ringkasannya, bukan seluruh data."),
      t("Analysts filter by date, month or outlet and download the result as Excel for Excel, Tableau or Power BI.", "Analis menyaring berdasarkan tanggal, bulan, atau outlet, lalu mengunduh hasilnya sebagai Excel untuk Excel, Tableau, atau Power BI.")
    ],
    features: [
      t("Standard forms with the questions, number formats and outlet list built in", "Form standar dengan pertanyaan, format angka, dan daftar outlet yang sudah tertanam"),
      t("Excel upload as a second way to fill in", "Unggah Excel sebagai cara pengisian kedua"),
      t("Percentage preview before submitting, final value after", "Pratinjau persentase sebelum submit, nilai akhir setelahnya"),
      t("Access by role and region, with guest and login modes", "Akses berdasarkan peran dan wilayah, dengan mode tamu dan login"),
      t("Filtering by date, month or outlet, and Excel download", "Penyaringan berdasarkan tanggal, bulan, atau outlet, dan unduhan Excel")
    ],
    decisions: [
      { title: t("One central application instead of forms and spreadsheets", "Satu aplikasi pusat menggantikan form dan spreadsheet"),
        why: t("Most of the problems came from people typing the same things in their own way. Standard forms give every outlet the same format.", "Sebagian besar masalah berasal dari orang yang mengetik hal yang sama dengan caranya sendiri. Form standar memberi semua outlet format yang sama.") },
      { title: t("The app does the calculating", "Aplikasi yang menghitung"),
        why: t("Percentages are worked out automatically, with a preview before submission and a final value after. Nobody recalculates by hand.", "Persentase dihitung otomatis, dengan pratinjau sebelum submit dan nilai akhir setelahnya. Tidak ada yang menghitung ulang secara manual.") },
      { title: t("Data goes straight to head office", "Data langsung sampai ke pusat"),
        why: t("The area team no longer collects and re-sends files, but can still see what each outlet submitted.", "Tim area tidak lagi mengumpulkan dan mengirim ulang file, tetapi tetap bisa melihat apa yang diisi tiap outlet.") },
      { title: t("Filters plus Excel export instead of building every report", "Filter dan ekspor Excel, bukan membangun semua laporan"),
        why: t("Analysts already work in Excel, Tableau or Power BI, so I let them take exactly the data they need into those tools.", "Analis sudah bekerja dengan Excel, Tableau, atau Power BI, jadi saya membiarkan mereka mengambil data yang mereka butuhkan ke alat-alat itu.") },
      { title: t("Access by role and region", "Akses berdasarkan peran dan wilayah"),
        why: t("Outlets fill in, supervisors approve and see only their own region, and only selected roles see revenue values.", "Outlet mengisi, supervisor menyetujui dan hanya melihat wilayahnya sendiri, dan hanya peran tertentu yang melihat nilai revenue.") }
    ],
    challenges: [
      t("Making the numbers agree. The preview score is calculated in the browser with jQuery and the final score is calculated again after submitting. If they differed, or if both differed from a hand calculation, that would be a serious mistake, so I tested every form against all three until they agreed. The Excel download had to match the screen as well.",
        "Membuat angka selalu sama. Skor pratinjau dihitung di browser dengan jQuery dan skor akhir dihitung lagi setelah submit. Kalau keduanya berbeda, atau berbeda dari hitungan manual, itu kesalahan fatal, jadi saya menguji setiap form terhadap ketiganya sampai cocok. Unduhan Excel juga harus sama dengan tampilan di layar."),
      t("Filling in by Excel upload. Users asked for a faster way than typing every answer. I built the template with a dropdown list in every cell to keep names and answers consistent, and on the server I made sure each value lands in the right column. Only Excel files are accepted, and the values are filtered so that something like a delete command is just text.",
        "Pengisian lewat unggahan Excel. Pengguna meminta cara yang lebih cepat daripada mengetik setiap jawaban. Saya membuat template dengan daftar pilihan di setiap sel agar nama dan jawaban tetap seragam, dan di server saya memastikan setiap nilai masuk ke kolom yang benar. Hanya file Excel yang diterima, dan nilainya disaring sehingga perintah seperti hapus data hanya menjadi teks biasa."),
      t("Access control. Protected menus ask for a login, but a link copied from a logged-in user must not open them either, so every protected page checks the session itself. Supervisors can only see the records of their own region.",
        "Kontrol akses. Menu yang dilindungi meminta login, tetapi tautan yang disalin dari pengguna yang sudah login juga tidak boleh membukanya, jadi setiap halaman yang dilindungi memeriksa sesinya sendiri. Supervisor hanya bisa melihat catatan wilayahnya sendiri.")
    ],
    usecases: [
      t("Retail and franchise chains", "Jaringan ritel dan waralaba"), t("Bank branch operations", "Operasional cabang bank"), t("Logistics hubs", "Pusat logistik"),
      t("Clinic networks", "Jaringan klinik"), t("Field service teams", "Tim layanan lapangan")
    ],
    tech: ["CodeIgniter", "MySQL Database", "jQuery", "VPN", "OLTP Application"],
    domain: ["Sales Department", "Telecommunications"],
    gallery: [
      { src: "assets/img/project/raisa/raisa-1-login.png", caption: t("Login screen (wireframe)", "Layar login (wireframe)") },
      { src: "assets/img/project/raisa/raisa-2-menu.png", caption: t("Supervisor menu: daily, weekly and monthly checklists, plus reporting", "Menu supervisor: checklist harian, mingguan, dan bulanan, serta pelaporan") },
      { src: "assets/img/project/raisa/raisa-3-checklist.png", caption: t("A monthly checklist form", "Form checklist bulanan") },
      { src: "assets/img/project/raisa/raisa-6-categories.png", caption: t("Questions are grouped into categories, picked from a dropdown", "Pertanyaan dikelompokkan dalam kategori, dipilih lewat dropdown") },
      { src: "assets/img/project/raisa/raisa-4-confirm.png", caption: t("Warning before saving: the data can't be changed afterwards", "Peringatan sebelum menyimpan: data tidak dapat diubah setelahnya") },
      { src: "assets/img/project/raisa/raisa-5-reporting.png", caption: t("Reporting: filter, view and download", "Pelaporan: filter, lihat, dan unduh") }
    ],
    note: t("Internal Telkomsel system, described at process level. No data, screenshots or system details are shown.", "Sistem internal Telkomsel, dijelaskan pada tingkat proses. Tidak ada data, screenshot, atau detail sistem yang ditampilkan."),
    links: { study: "https://github.com/BrillyArMa/project-showcase/tree/b89c8b94d5d854f0849ab1b0e21d74ffd8fb9677/RAISA", demo: "", repo: "", video: "" }
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
    id: "business-solution-analysis-data-strategy",
    type: "code",
    image: "assets/img/executive-interaction-date-filter.png",
    title: "Business Solution Analysis & Data Strategy",
    role: t("Technical Liaison", "Technical Liaison"),
    period: "2020-2022 · Telkomsel",
    summary: t(
      "I sat between business users and Telkomsel's IT team: I listened to the problem, turned it into wireframes and business requirement documents, and followed the work through to production.",
      "Saya berada di antara pengguna bisnis dan tim IT Telkomsel: mendengarkan masalahnya, menuangkannya ke wireframe dan dokumen kebutuhan bisnis, lalu mengawal pekerjaannya sampai produksi."
    ),
    problem: t(
      "Business users know their problem but not the technology. The IT team knows the technology but not the business process. Requests got lost in the gap. In one case, a team had to download data from a slow database that sometimes dropped the session, then write long queries where a typo in a date or category could give wrong results, and then rebuild the same charts again and again.",
      "Pengguna bisnis paham masalahnya tetapi bukan teknologinya. Tim IT paham teknologinya tetapi bukan proses bisnisnya. Permintaan sering hilang di celah itu. Pada satu kasus, sebuah tim harus mengunduh data dari database yang lambat dan kadang memutus sesi, lalu menulis query panjang yang rawan salah ketik pada kondisi tanggal atau kategori, kemudian membuat ulang grafik yang sama berkali-kali."
    ),
    solution: t(
      "As technical liaison, I was the person in the middle. I met the business user, sketched a solution as a wireframe and agreed it with them, then discussed it with the IT team in technical terms and wrote the BRD for review. While IT built it, I followed up on progress and tested the result against the request. For the example above, I proposed a dashboard built in Tableau, where the team can filter the data and download it themselves. I also mapped the databases for a migration from Oracle to Hadoop.",
      "Sebagai technical liaison, saya adalah orang di tengah. Saya bertemu pengguna bisnis, menggambar solusi sebagai wireframe dan menyepakatinya dengan mereka, lalu membahasnya dengan tim IT dalam bahasa teknis dan menulis BRD untuk direview. Selama IT membangun, saya menindaklanjuti progres dan menguji hasilnya terhadap permintaan. Untuk contoh di atas, saya mengusulkan dashboard di Tableau agar tim bisa menyaring dan mengunduh data sendiri. Saya juga memetakan database untuk migrasi dari Oracle ke Hadoop."
    ),
    results: [
      { value: "4+", label: t("business requirement documents (BRDs) for dashboards and internal tools", "dokumen kebutuhan bisnis (BRD) untuk dashboard dan alat internal") },
      { value: t("~5 days", "~5 hari"), label: t("estimated for moving the active Oracle databases to Hadoop", "estimasi untuk memindahkan database Oracle yang masih aktif ke Hadoop") },
      { value: t("Faster", "Lebih cepat"), label: t("analysis, according to the business users who used the dashboards", "analisis, menurut pengguna bisnis yang memakai dashboard") }
    ],
    flow: [
      t("I meet the business user, listen to the problem and offer suggestions. No time estimate yet.", "Saya bertemu pengguna bisnis, mendengarkan masalahnya, dan menawarkan saran. Belum ada estimasi waktu."),
      t("In the same week I draw a wireframe and go back to confirm it matches what they want.", "Pada minggu yang sama saya membuat wireframe dan kembali untuk memastikan sudah sesuai keinginan mereka."),
      t("Once they agree, I give them a time estimate.", "Setelah mereka setuju, saya memberi estimasi waktu."),
      t("I discuss the same topic with the IT team in technical terms, then write the BRD for review by a GM and a VP.", "Saya membahas topik yang sama dengan tim IT dalam bahasa teknis, lalu menulis BRD untuk direview GM dan VP."),
      t("IT builds it. I follow up on progress and test it against the request.", "IT membangunnya. Saya menindaklanjuti progres dan mengujinya terhadap permintaan."),
      t("It is handed to the business users. Errors get fixed, and new ideas become new requests.", "Hasilnya diserahkan ke pengguna bisnis. Error diperbaiki, dan ide baru menjadi permintaan baru.")
    ],
    features: [
      t("BRDs for dashboards and internal tools", "BRD untuk dashboard dan alat internal"),
      t("Presentations and wireframes in plain language", "Presentasi dan wireframe dengan bahasa yang mudah dipahami"),
      t("Technical notes for IT: which tables to use and when data-transfer jobs run", "Catatan teknis untuk IT: tabel yang dipakai dan jadwal job transfer data"),
      t("Follow-up, monitoring and testing while IT builds", "Tindak lanjut, pemantauan, dan pengujian selama IT membangun"),
      t("A map of the active databases for the Oracle to Hadoop migration", "Pemetaan database yang masih aktif untuk migrasi Oracle ke Hadoop")
    ],
    decisions: [
      { title: t("A wireframe in the same week", "Wireframe pada minggu yang sama"),
        why: t("People react best to something they can see. Agreeing on a picture first means IT's time isn't spent on the wrong thing.", "Orang paling mudah memberi tanggapan pada sesuatu yang bisa dilihat. Menyepakati gambar lebih dulu membuat waktu IT tidak terbuang untuk hal yang salah.") },
      { title: t("Two conversations, two languages", "Dua percakapan, dua bahasa"),
        why: t("Business users hear plain language. The IT team hears the technical details, such as which tables to use and when data-transfer jobs run.", "Pengguna bisnis mendengar bahasa yang sederhana. Tim IT mendengar detail teknis, seperti tabel yang dipakai dan jadwal job transfer data.") },
      { title: t("No time estimate until the solution is agreed", "Tidak ada estimasi waktu sebelum solusinya disepakati"),
        why: t("Once the business user approves the wireframe, I give them an estimate, so the number is about the right solution.", "Setelah pengguna bisnis menyetujui wireframe, saya memberi estimasi, sehingga angkanya benar-benar untuk solusi yang tepat.") },
      { title: t("Honest about technical limits", "Jujur soal batasan teknis"),
        why: t("When a technical problem comes up, I explain it plainly to the business user and bring a solution or an alternative they can accept.", "Saat ada kendala teknis, saya menjelaskannya dengan bahasa sederhana kepada pengguna bisnis dan membawa solusi atau alternatif yang bisa mereka terima.") },
      { title: t("Flexible about the tool", "Fleksibel soal alatnya"),
        why: t("A dashboard could be built in Tableau or as a website. I suggest what fits, and follow what IT and the business user decide.", "Dashboard bisa dibuat di Tableau atau sebagai website. Saya menyarankan yang cocok, dan mengikuti keputusan IT dan pengguna bisnis.") }
    ],
    challenges: [
      t("Changes while it's being built. A business user would sometimes want to remove or add a feature while IT was already working. If the work was more than 80% done, I asked the user to let it finish as planned and prepared a new BRD for the changes. I also asked IT to finish about three days early: two days for them, one day for me to test.",
        "Perubahan di tengah pengerjaan. Pengguna bisnis kadang ingin menghapus atau menambah fitur saat IT sudah mengerjakan. Jika pekerjaan sudah lebih dari 80%, saya meminta pengguna menyelesaikannya sesuai rencana awal dan menyiapkan BRD baru untuk perubahannya. Saya juga meminta IT selesai sekitar tiga hari lebih cepat: dua hari untuk mereka, satu hari untuk saya menguji."),
      t("Saying what can't be done. When a request couldn't be built the way it was asked, I explained it honestly in non-technical language, with a solution or suggestion the business user could accept.",
        "Menyampaikan apa yang tidak bisa dikerjakan. Saat sebuah permintaan tidak bisa dibuat seperti yang diminta, saya menjelaskannya dengan jujur dalam bahasa non-teknis, disertai solusi atau saran yang bisa diterima pengguna bisnis.")
    ],
    usecases: [
      t("Dashboards and reporting projects", "Proyek dashboard dan pelaporan"), t("Internal tools", "Alat internal"),
      t("Data migrations", "Migrasi data"), t("Teams where business and IT need a translator", "Tim yang membutuhkan penerjemah antara bisnis dan IT")
    ],
    tech: ["Balsamiq Wireframe", "Tableau", "Hadoop", "Oracle Database"],
    domain: ["Telecommunications", "Business Analysis"],
    gallery: [
      { src: "assets/img/project/business-solution-analysis-data-strategy/bsa-1-executive.png", caption: t("Wireframe: an executive summary dashboard with a date range filter", "Wireframe: dashboard ringkasan eksekutif dengan filter rentang waktu") },
      { src: "assets/img/project/business-solution-analysis-data-strategy/bsa-2-postpaid.png", caption: t("Wireframe: a postpaid consumer dashboard with filters, monthly targets and revenue target against achievement", "Wireframe: dashboard konsumen pascabayar dengan filter, target bulanan, serta target dan capaian pendapatan") },
      { src: "assets/img/project/business-solution-analysis-data-strategy/bsa-3-service-va.png", caption: t("Wireframe: top intents and sessions of a virtual assistant, by channel", "Wireframe: intent dan sesi teratas sebuah virtual assistant, per kanal") },
      { src: "assets/img/project/business-solution-analysis-data-strategy/bsa-4-repository.png", caption: t("Wireframe: filter the data, then view it or download it as Excel or CSV", "Wireframe: saring data, lalu lihat atau unduh sebagai Excel atau CSV") } 
    ],
    note: t("Internal Telkomsel work, described at process level. No BRD content, metrics or system details are shown.", "Pekerjaan internal Telkomsel, dijelaskan pada tingkat proses. Tidak ada isi BRD, metrik, atau detail sistem yang ditampilkan."),
    links: { study: "https://github.com/brillyarma/project-showcase/tree/main/business-solution-analysis/", demo: "", repo: "", video: "" }
  },
  {
    id: "mbjj",
    type: "code",
    image: "assets/img/mbjj.jpg",
    title: "Merdeka Belajar Jarak Jauh (MBJJ) Data System",
    role: t("Developer", "Developer"),
    period: "2020-2022 · Telkomsel",
    summary: t(
      "Telkomsel's free internet quota program for remote learning during COVID-19. I built the database, the hourly data load and the lookup menu that let customer service check whether a customer is on the list.",
      "Program kuota internet gratis Telkomsel untuk belajar jarak jauh selama pandemi COVID-19. Saya membuat database, pemuatan data tiap jam, dan menu pencarian yang memungkinkan customer service memeriksa apakah seorang pelanggan ada dalam daftar."
    ),
    problem: t(
      "During the pandemic, Telkomsel gave free internet quota to students, teachers, university students and lecturers across Indonesia, to support learning from home. Who qualified depended on lists built from government data. When someone who should have received the quota said they hadn't, customer service needed to know whether that person was on the list, and checking meant opening the database and knowing how to query it.",
      "Selama pandemi, Telkomsel memberikan kuota internet gratis kepada siswa, guru, mahasiswa, dan dosen di seluruh Indonesia untuk mendukung belajar dari rumah. Siapa yang berhak bergantung pada daftar yang disusun dari data pemerintah. Saat seseorang yang seharusnya menerima kuota mengaku belum menerimanya, customer service perlu tahu apakah orang itu ada di daftar, dan untuk memeriksanya mereka harus membuka database dan paham cara melakukan query."
    ),
    solution: t(
      "Kemendikbud and Dukcapil supplied the data, and Telkomsel's IT team filtered it down to eligible Telkomsel customers. From there, I built an Oracle database and a cron job that loads the filtered data automatically every hour. Then I added a new menu to a web application that customer service already used: the agent types a customer's phone number and the result appears. If the number isn't on the list, the agent escalates to IT so the customer can be added. The free quota program has since ended, and as far as I know the tool is no longer used.",
      "Kemendikbud dan Dukcapil menyediakan datanya, dan tim IT Telkomsel menyaringnya menjadi pelanggan Telkomsel yang berhak. Dari situ saya membuat database Oracle dan cron job yang memuat data hasil saringan secara otomatis setiap jam. Lalu saya menambahkan menu baru pada aplikasi web yang sudah biasa dipakai customer service: agen mengetik nomor telepon pelanggan dan hasilnya langsung muncul. Jika nomor tidak ada di daftar, agen mengeskalasi ke tim IT agar pelanggan itu bisa ditambahkan. Program kuota gratis ini sudah berakhir, dan sejauh yang saya tahu alat ini tidak lagi dipakai."
    ),
    results: [
      { value: t("2 sources", "2 sumber"), label: t("of government data (Kemendikbud and Dukcapil), filtered by Telkomsel IT and loaded automatically", "data pemerintah (Kemendikbud dan Dukcapil), disaring tim IT Telkomsel dan dimuat otomatis") },
      { value: t("Hourly", "Tiap jam"), label: t("automatic load into the Oracle database", "pemuatan otomatis ke database Oracle") },
      { value: t("1 number", "1 nomor"), label: t("is all an agent types to check a customer", "itu saja yang diketik agen untuk memeriksa pelanggan") }
    ],
    flow: [
      t("Kemendikbud and Dukcapil send lists of schools, students and teachers.", "Kemendikbud dan Dukcapil mengirim daftar sekolah, siswa, dan guru."),
      t("Telkomsel's IT team keeps only Telkomsel customers and works out who qualifies for the free quota.", "Tim IT Telkomsel hanya menyisakan pelanggan Telkomsel dan menentukan siapa yang berhak atas kuota gratis."),
      t("A cron job I built loads the filtered data into an Oracle database every hour.", "Cron job buatan saya memuat data hasil saringan ke database Oracle setiap jam."),
      t("When a customer says they never got the quota, a customer service agent types the phone number into a new menu in the web application they already use.", "Saat pelanggan mengaku belum menerima kuota, agen customer service mengetik nomor teleponnya di menu baru pada aplikasi web yang sudah biasa mereka pakai."),
      t("The menu shows whether the number is on the list. If it isn't, the agent escalates to IT so the customer can be added.", "Menu menampilkan apakah nomor itu ada di daftar. Jika tidak, agen mengeskalasi ke tim IT agar pelanggan bisa ditambahkan.")
    ],
    features: [
      t("Automatic hourly loading of filtered data into an Oracle database", "Pemuatan otomatis data hasil saringan ke database Oracle setiap jam"),
      t("A lookup menu inside a web application that agents already knew", "Menu pencarian di dalam aplikasi web yang sudah dikenal agen"),
      t("Phone numbers accepted starting with 0 or with 62", "Nomor telepon diterima dengan awalan 0 maupun 62"),
      t("A clear next step when a number is not found", "Langkah lanjutan yang jelas bila nomor tidak ditemukan")
    ],
    decisions: [
      { title: t("A menu in a tool agents already used", "Menu di alat yang sudah dipakai agen"),
        why: t("Agents didn't have to learn or switch to another application.", "Agen tidak perlu mempelajari atau berpindah ke aplikasi lain.") },
      { title: t("Look up by phone number, not by query", "Cari dengan nomor telepon, bukan query"),
        why: t("Anyone on the customer service team can answer a customer in moments, without technical skills.", "Siapa pun di tim customer service bisa menjawab pelanggan dengan cepat, tanpa keahlian teknis.") },
      { title: t("Only filtered data enters the database", "Hanya data hasil saringan yang masuk ke database"),
        why: t("The IT team filters the government data first, so the database only holds the Telkomsel customers who matter for this program.", "Tim IT menyaring data pemerintah lebih dulu, jadi database hanya berisi pelanggan Telkomsel yang relevan untuk program ini.") },
      { title: t("Load every hour", "Pemuatan tiap jam"),
        why: t("The data is large and loading time varied. An hour was a safe window for a load to finish completely.", "Datanya besar dan waktu pemuatan tidak menentu. Satu jam adalah jendela yang aman agar pemuatan selesai tuntas.") },
      { title: t("Not found means escalate", "Tidak ditemukan berarti eskalasi"),
        why: t("If a number isn't on the list, the agent has a clear next step: escalate to IT so the customer can be added.", "Jika nomor tidak ada di daftar, agen punya langkah yang jelas: eskalasi ke tim IT agar pelanggan bisa ditambahkan.") }
    ],
    challenges: [
      t("Making sure the load really finishes, into the right tables. The data was large and loading time was unpredictable. The cron job had to run to the end without errors in its log and fill the correct tables, so I chose an hourly schedule with a safe margin and checked the logs.",
        "Memastikan pemuatan benar-benar selesai, ke tabel yang tepat. Datanya besar dan waktu pemuatan tidak menentu. Cron job harus berjalan sampai akhir tanpa error di lognya dan mengisi tabel yang benar, jadi saya memilih jadwal tiap jam dengan batas aman dan memeriksa lognya."),
      t("Phone numbers typed in different ways. Agents typed the number as 0812... or as 62812..., depending on habit, so I made the lookup give the same answer for both.",
        "Nomor telepon yang diketik dengan cara berbeda. Agen mengetik nomor sebagai 0812... atau 62812... sesuai kebiasaan, jadi saya membuat pencarian memberi jawaban yang sama untuk keduanya.")
    ],
    usecases: [
      t("Customer support eligibility checks", "Pemeriksaan kelayakan di customer support"), t("Membership and loyalty lookups", "Pencarian keanggotaan dan loyalty"),
      t("Subsidy programs", "Program subsidi"), t("Scheduled data imports from partners", "Impor data terjadwal dari mitra")
    ],
    tech: ["PHP", "Oracle Database", "Cron job"],
    domain: ["Telecommunications", "Education"],
    gallery: [],
    note: t("Internal Telkomsel system, described at process level. No data, screenshots or system details are shown.", "Sistem internal Telkomsel, dijelaskan pada tingkat proses. Tidak ada data, screenshot, atau detail sistem yang ditampilkan."),
    links: { study: "https://github.com/brillyarma/project-showcase/tree/main/mbjj/", demo: "", repo: "", video: "" }
  },
  {
    id: "ekskul-widuri",
    type: "code",
    image: "assets/img/ekskul.png",
    title: "Widuri Ekskul: Extracurricular Registration & Information System",
    role: t("Developer", "Developer"),
    period: t("2017-2019 · University project", "2017-2019 · Proyek kuliah"),
    summary: t(
      "A website for a high school's extracurricular activities. Students find the activities, sign up online and see their grades, and teachers run their own pages.",
      "Website untuk kegiatan ekstrakurikuler sebuah SMA. Siswa menemukan kegiatan, mendaftar online, dan melihat nilai, sementara guru mengelola halaman kegiatannya sendiri.",
    ),
    problem: t(
      "Extracurricular activities are compulsory for every student at SMA Widuri, but students had a hard time finding out how to join one and when it met. One new student almost never attended any activity for a whole semester because the information never reached them.",
      "Ekstrakurikuler wajib diikuti seluruh siswa SMA Widuri, tetapi siswa kesulitan mencari tahu cara mendaftar dan jadwalnya. Seorang siswa baru bahkan hampir tidak pernah mengikuti ekskul selama satu semester karena informasinya tidak sampai kepadanya.",
    ),
    solution: t(
      "Widuri Ekskul is a public website. Anyone can browse the activities, their teachers, schedules, photos and news without logging in. Students log in to sign up and see their grades, and teachers log in to give grades and post news. Student affairs staff create the accounts, keep the activity pages up to date and help when someone forgets a password.",
      "Widuri Ekskul adalah website publik. Siapa pun bisa melihat kegiatan, pengajar, jadwal, foto, dan berita tanpa login. Siswa login untuk mendaftar dan melihat nilai, sedangkan guru login untuk memberi nilai dan memposting berita. Pembina kesiswaan membuatkan akun, memperbarui halaman kegiatan, dan membantu bila ada yang lupa password.",
    ),
    results: [
      { value: "~270", label: t("students at the school", "siswa di sekolah") },
      {
        value: "~9",
        label: t(
          "activities, each with its own teacher",
          "kegiatan ekskul, masing-masing dengan pengajarnya",
        ),
      },
      {
        value: "2018-2019",
        label: t(
          "in real use by the school, until the server and domain lapsed",
          "dipakai nyata oleh sekolah, sampai server dan domain tidak diperpanjang",
        ),
      },
    ],
    flow: [
      t(
        "Student affairs staff create accounts for new students and for each activity's teacher.",
        "Pembina kesiswaan membuat akun untuk siswa baru dan untuk guru tiap kegiatan.",
      ),
      t(
        "Anyone can browse the activities: description, photos, schedule, number of members, duration and teacher.",
        "Siapa pun bisa melihat kegiatan: deskripsi, foto, jadwal, jumlah anggota, lama kegiatan, dan pengajar.",
      ),
      t(
        "Students log in, sign up for an activity and later see their grades.",
        "Siswa login, mendaftar ke sebuah kegiatan, lalu melihat nilainya.",
      ),
      t(
        "Teachers log in to give a score and written feedback, and to post news.",
        "Guru login untuk memberi nilai dan catatan perbaikan, serta memposting berita.",
      ),
      t(
        "Staff help whenever someone forgets a password.",
        "Pembina membantu setiap kali ada yang lupa password.",
      ),
    ],
    features: [
      t(
        "Public pages for activities, teachers, schedules and news",
        "Halaman publik untuk kegiatan, pengajar, jadwal, dan berita",
      ),
      t(
        "Online sign-up for an activity",
        "Pendaftaran online ke sebuah kegiatan",
      ),
      t(
        "Grades with a score and written feedback",
        "Penilaian berupa angka dan catatan perbaikan",
      ),
      t(
        "Teachers give grades and post news with photos and videos",
        "Guru memberi nilai dan memposting berita dengan foto dan video",
      ),
      t(
        "Accounts created by student affairs staff",
        "Akun dibuat oleh pembina kesiswaan",
      ),
      t(
        "Works on a computer and on a smartphone",
        "Bisa dipakai di komputer maupun smartphone",
      ),
    ],
    decisions: [
      {
        title: t(
          "Information is public, login is only for actions",
          "Informasi terbuka, login hanya untuk aksi",
        ),
        why: t(
          "The problem was that students couldn't find information. Anyone can read about the activities, and a login is only needed to sign up, give grades or post news.",
          "Masalahnya, siswa sulit menemukan informasi. Siapa pun bisa membaca soal kegiatan, dan login hanya diperlukan untuk mendaftar, memberi nilai, atau memposting berita.",
        ),
      },
      {
        title: t(
          "Student affairs staff create the accounts",
          "Pembina kesiswaan yang membuat akun",
        ),
        why: t(
          "Extracurriculars are compulsory for every student, so staff create the accounts for all new students and each teacher. Every account belongs to a real student or teacher.",
          "Ekskul wajib diikuti semua siswa, jadi pembina membuatkan akun untuk seluruh siswa baru dan tiap guru. Setiap akun milik siswa atau guru yang nyata.",
        ),
      },
      {
        title: t(
          "Teachers post their own news",
          "Guru memposting beritanya sendiri",
        ),
        why: t(
          "Each teacher publishes news about their own activity, so announcements stay current without waiting for someone else.",
          "Tiap guru menerbitkan berita tentang kegiatannya sendiri, sehingga pengumuman tetap terbaru tanpa menunggu orang lain.",
        ),
      },
      {
        title: t(
          "A score plus written feedback",
          "Angka disertai catatan perbaikan",
        ),
        why: t(
          "Teachers give a number and also explain what to improve, so students learn more than just the result.",
          "Guru memberi angka sekaligus menjelaskan apa yang perlu diperbaiki, jadi siswa tahu lebih dari sekadar hasil.",
        ),
      },
      {
        title: t(
          "Teachers only see what they need",
          "Guru hanya melihat yang mereka perlukan",
        ),
        why: t(
          "Activity teachers can only open the news and grades menus. The list of users and the access settings belong to a superuser account, which I handed over to the head and deputy of student affairs.",
          "Guru pengajar ekskul hanya bisa membuka menu berita dan nilai. Daftar pengguna dan pengaturan hak akses ada pada akun superuser, yang saya serahkan kepada ketua dan wakil kesiswaan.",
        ),
      },
    ],
    challenges: [
      t(
        "A public application has to be careful. Logins work with sessions, text input is filtered for special characters that could be used to run commands, and uploads have a size limit, because teachers add photos and videos with their descriptions and news.",
        "Aplikasi publik harus berhati-hati. Login memakai sesi, input teks disaring dari karakter khusus yang bisa dipakai untuk menjalankan perintah, dan unggahan dibatasi ukurannya, karena guru menambahkan foto dan video bersama deskripsi dan berita.",
      ),
      t(
        "Planning for after I left. The site stopped when I started working and no one at the school could look after it, including renewing the server and the domain. It taught me to talk about hosting costs and handover with the client from the start.",
        "Merencanakan masa setelah saya pergi. Situs berhenti saat saya mulai bekerja dan tidak ada orang di sekolah yang bisa merawatnya, termasuk memperpanjang server dan domain. Dari situ saya belajar membahas biaya hosting dan serah terima dengan klien sejak awal.",
      ),
    ],
    usecases: [
      t("Schools", "Sekolah"),
      t(
        "Universities and student organizations",
        "Universitas dan organisasi mahasiswa",
      ),
      t("Sports clubs", "Klub olahraga"),
      t("Training centers", "Pusat pelatihan"),
      t("Community groups", "Komunitas"),
    ],
    tech: ["CodeIgniter", "MySQL Database", "PHP"],
    domain: ["Education", "EdTech"],
    gallery: [
      {
        src: "assets/img/project/ekskul-widuri/ekskul-1-home.png",
        caption: t(
          "The public home page",
          "Beranda publik",
        ),
      },
      {
        src: "assets/img/project/ekskul-widuri/ekskul-2-home-login.png",
        caption: t(
          "The login home page",
          "Beranda login",
        ),
      },
      {
        src: "assets/img/project/ekskul-widuri/ekskul-3-student-score.png",
        caption: t(
          "A student's score summary",
          "Ringkasan nilai ekskul siswa",
        ),
      },
      {
        src: "assets/img/project/ekskul-widuri/ekskul-4-fill-score.png",
        caption: t(
          "The scoring page in the admin panel (personal details hidden)",
          "Halaman penilaian di panel admin (data pribadi disamarkan)",
        ),
      },
      {
        src: "assets/img/project/ekskul-widuri/ekskul-5-news.png",
        caption: t(
          "The public news page",
          "Halaman berita sekolah akses publik",
        ),
      },
      {
        src: "assets/img/project/ekskul-widuri/ekskul-6-managing-news.png",
        caption: t(
          "Managing activity news in the admin panel",
          "Panel admin untuk mengatur aktivitas berita",
        ),
      },
    ],
    links: {
      study:
        "https://github.com/BrillyArMa/project-showcase/tree/7493f935c95d82636f3368ec75e5a7e41b838b3b/ekskul-widuri",
      demo: "",
      repo: "",
      video: "",
    },
  },
];
