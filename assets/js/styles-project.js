$(function () {
        // ---------- Teks statics (label) ----------
        const UI = {
          en: {
            nHome: "Home",
            nAbout: "About Me",
            nProject: "Project",
            nExp: "Experience",
            nSkills: "Skills",
            nCerts: "Certifications",
            nContact: "Contact",
            crumbHome: "Home",
            crumbProjects: "Projects",
            foot: "Copyright \u00A9 2026, Brilly Arfendo Gautama. All rights reserved.",
            study: "Read the full case study on GitHub \u2197\uFE0E",
            back: "All projects",
            problem: "The problem",
            solution: "The solution",
            results: "Results",
            features: "Key features",
            gallery: "Screenshots",
            challenges: "Challenges & lessons",
            stack: "Tech stack",
            domain: "Industry",
            links: "Links",
            demo: "Live demo",
            repo: "Source code",
            video: "Watch demo video",
            cta: "Need something similar?",
            ctaText:
              "Let's talk about your project. Available for remote freelance work (GMT+7).",
            ctaBtn: "Contact me",
            prev: "Previous",
            next: "Next",
            notFound: "Project not found",
            notFoundText: "Check the link or go back to the project list.",
            type: {
              code: "Software development",
              automation: "AI & Automation",
            },
          },
          id: {
            nHome: "Beranda",
            nAbout: "Tentang Saya",
            nProject: "Proyek",
            nExp: "Pengalaman",
            nSkills: "Keahlian",
            nCerts: "Sertifikasi",
            nContact: "Kontak",
            crumbHome: "Beranda",
            crumbProjects: "Proyek",
            foot: "Hak Cipta \u00A9 2026, Brilly Arfendo Gautama. Seluruh hak dilindungi.",
            study: "Baca studi kasus lengkap di GitHub \u2197\uFE0E",
            back: "Semua project",
            problem: "Masalah",
            solution: "Solusi",
            results: "Hasil",
            features: "Fitur utama",
            gallery: "Screenshot",
            challenges: "Tantangan & pembelajaran",
            stack: "Teknologi",
            domain: "Bidang",
            links: "Tautan",
            demo: "Live demo",
            repo: "Source code",
            video: "Tonton video demo",
            cta: "Butuh yang serupa?",
            ctaText:
              "Mari bahas project Anda. Tersedia untuk freelance remote (GMT+7).",
            ctaBtn: "Hubungi saya",
            prev: "Sebelumnya",
            next: "Berikutnya",
            notFound: "Project tidak ditemukan",
            notFoundText: "Periksa tautan atau kembali ke daftar project.",
            type: {
              code: "Pengembangan software",
              automation: "AI & Otomatisasi",
            },
          },
        };

        // ---------- Language: ?lang=id > saved choice > browser language ----------
        const params = new URLSearchParams(location.search);
        let lang = params.get("lang");
        try {
          lang = lang || localStorage.getItem("lang");
        } catch (e) {}
        lang = lang === "id" || lang === "en" ? lang : "en";

        // ---------- Helper ----------
        const tr = (v) =>
          v && typeof v === "object" ? v[lang] || v.en || "" : v || "";
        const esc = (s) =>
          String(s).replace(
            /[&<>"]/g,
            (c) =>
              ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
          );
        const has = (a) => $.isArray(a) && a.length > 0;
        const each = (arr, fn) => $.map(arr, fn).join(""); // $.map + join: ubah array jadi string HTML
        const section = (title, body) =>
          `<section class="mb-10"><h2 class="text-2xl font-bold mb-3">${title}</h2>${body}</section>`;
        const tag = (txt, cls) =>
          `<span class="px-3 py-1 ${cls} rounded-full text-sm">${esc(txt)}</span>`;
        const colors = [
          "bg-red-100 text-red-800",
          "bg-green-100 text-green-800",
          "bg-purple-100 text-purple-800",
          "bg-blue-100 text-blue-800",
          "bg-yellow-100 text-yellow-800",
          "bg-gray-100 text-gray-800",
        ];

        function render() {
          const L = UI[lang];
          $("html").attr("lang", lang);
          $("[data-i18n]").each(function () {
            $(this).text(L[$(this).data("i18n")]);
          });
          $(".lang-btn").each(function () {
            const active = $(this).data("lang") === lang;
            $(this)
              .toggleClass("bg-white text-black font-semibold", active)
              .toggleClass("text-white", !active)
              .attr("aria-pressed", active);
          });

          const list = window.PROJECTS || [];
          const i = $.map(list, (p, k) =>
            p.id === params.get("id") ? k : null,
          )[0];
          const $app = $("#app");
          if (i === undefined) {
            $app.html(
              `<div class="container mx-auto px-6 py-24 text-center"><h1 class="text-3xl font-bold mb-2">${L.notFound}</h1><p class="mb-6">${L.notFoundText}</p><a class="text-blue-600 hover:underline" href="index.html#projects">${L.back}</a></div>`,
            );
            return;
          }
          const p = list[i];
          $("title").text(`${p.title} | Brilly Arfendo Gautama`);

          // ----- Hero -----
          let html = `
        <header class="container mx-auto px-6 max-w-5xl">
          <nav aria-label="Breadcrumb" class="text-sm text-gray-500 mb-4"><a class="hover:underline" href="index.html">${L.crumbHome}</a> &rsaquo; <a class="hover:underline" href="index.html#projects">${L.crumbProjects}</a> &rsaquo; <span class="text-gray-800">${esc(p.title)}</span></nav>
          <img src="${esc(p.image)}" alt="${esc(p.title)}" class="w-full h-56 md:h-80 object-cover rounded-lg shadow-lg mb-8" />
          <div class="flex flex-wrap gap-2 mb-3">${tag(L.type[p.type] || "", "bg-indigo-100 text-indigo-800")}${tag(tr(p.role), "bg-gray-200 text-gray-800")}${tag(tr(p.period), "bg-gray-200 text-gray-800")}</div>
          <h1 class="text-3xl md:text-4xl font-bold mb-3">${esc(p.title)}</h1>
          <p class="text-lg text-gray-600 max-w-3xl">${esc(tr(p.summary))}</p>
        ${(p.links || {}).study ? `<a href="${esc(p.links.study)}" target="_blank" rel="noopener noreferrer" class="inline-block mt-5 px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700">${L.study}</a>` : ""}
        ${tr(p.note) ? `<p class="mt-4 max-w-3xl text-sm bg-amber-50 border border-amber-200 text-amber-900 rounded px-3 py-2">\u{1F512} ${esc(tr(p.note))}</p>` : ""}
        </header>`;

          // ----- Result (only data show) -----
          if (has(p.results)) {
            html +=
              `<div class="container mx-auto px-6 max-w-5xl mt-8"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">` +
              each(
                p.results,
                (r) =>
                  `<div class="bg-white rounded-lg shadow p-5"><p class="text-3xl font-bold text-indigo-600">${esc(tr(r.value))}</p><p class="text-gray-600">${esc(tr(r.label))}</p></div>`,
              ) +
              `</div></div>`;
          }

          // ----- Main column -----
          let main = "";
          if (tr(p.problem))
            main += section(
              L.problem,
              `<p class="md:text-justify">${esc(tr(p.problem))}</p>`,
            );
          if (tr(p.solution))
            main += section(
              L.solution,
              `<p class="md:text-justify">${esc(tr(p.solution))}</p>`,
            );
          if (has(p.features))
            main += section(
              L.features,
              `<ul class="list-disc pl-5 space-y-1 md:text-justify">${each(p.features, (f) => `<li>${esc(tr(f))}</li>`)}</ul>`,
            );
          if (has(p.gallery))
            main += section(
              L.gallery,
              `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">${each(p.gallery, (g) => `<figure><a href="${esc(g.src)}" target="_blank" rel="noopener"><img loading="lazy" src="${esc(g.src)}" alt="${esc(tr(g.caption))}" class="rounded-lg shadow w-full" /></a><figcaption class="text-sm text-gray-500 mt-1">${esc(tr(g.caption))}</figcaption></figure>`)}</div>`,
            );
          if (has(p.challenges))
            main += section(
              L.challenges,
              `<ul class="list-disc pl-5 space-y-2 md:text-justify">${each(p.challenges, (c) => `<li>${esc(tr(c))}</li>`)}</ul>`,
            );

          // ----- Sidebar -----
          const lk = p.links || {};
          const btn = (href, label, primary) =>
            href
              ? `<a href="${esc(href)}" target="_blank" rel="noopener" class="block text-center px-4 py-2 rounded ${primary ? "bg-indigo-600 text-white hover:bg-indigo-700" : "border border-gray-300 hover:bg-gray-100"}">${label}</a>`
              : "";
          let side = "";
          if (has(p.tech))
            side += `<div class="mb-6"><h3 class="font-bold mb-2">${L.stack}</h3><div class="flex flex-wrap gap-2">${each(p.tech, (x, k) => tag(x, colors[k % colors.length]))}</div></div>`;
          if (has(p.domain))
            side += `<div class="mb-6"><h3 class="font-bold mb-2">${L.domain}</h3><div class="flex flex-wrap gap-2">${each(p.domain, (x) => tag(x, "bg-gray-100 text-gray-800"))}</div></div>`;
          const links =
            btn(lk.demo, L.demo, true) +
            btn(lk.repo, L.repo) +
            btn(lk.video, L.video);
          if (links)
            side += `<div class="mb-6"><h3 class="font-bold mb-2">${L.links}</h3><div class="space-y-2">${links}</div></div>`;

          html += `<div class="container mx-auto px-6 max-w-5xl mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div class="lg:col-span-2">${main}</div>
          <aside><div class="bg-white rounded-lg shadow p-5 lg:sticky lg:top-24">${side}
            <div class="border-t pt-5"><h3 class="font-bold mb-1">${L.cta}</h3><p class="text-sm text-gray-600 mb-3">${L.ctaText}</p>
            <a href="index.html#contact" class="block text-center px-4 py-2 rounded bg-black text-white hover:bg-gray-800">${L.ctaBtn}</a></div></div></aside>
        </div>`;

          // ----- Prev / Next -----
          const pv = list[(i - 1 + list.length) % list.length],
            nx = list[(i + 1) % list.length];
          html += `<div class="container mx-auto px-6 max-w-5xl mt-12 flex justify-between gap-4 text-blue-600">
          <a class="hover:underline" href="project.html?id=${esc(pv.id)}">&larr; ${L.prev}: ${esc(pv.title)}</a>
          <a class="hover:underline text-right" href="project.html?id=${esc(nx.id)}">${L.next}: ${esc(nx.title)} &rarr;</a></div>`;

          $app.html(html);
        }

        // ---------- Language button ----------
        $(".lang-btn").on("click", function () {
          lang = $(this).data("lang");
          try {
            localStorage.setItem("lang", lang);
          } catch (e) {}
          render();
        });

        render();
      });
