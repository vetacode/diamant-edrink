import { createFileRoute } from "@tanstack/react-router";
import { Zap, Search, Play, MapPin, Quote, Check, Phone, Mail, MapPinned } from "lucide-react";
import heroCan from "@/assets/hero-can.png";
import aboutCans from "@/assets/about-cans.jpg";
import flavorsTrio from "@/assets/flavors-trio.jpg";
import athlete from "@/assets/athlete.jpg";
import flavorGreen from "@/assets/flavor-green.jpg";
import flavorBerry from "@/assets/flavor-berry.jpg";
import flavorCitrus from "@/assets/flavor-citrus.jpg";
import discountCans from "@/assets/discount-cans.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "6281384072641";
const wa = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 cursor-pointer">
      <Zap className="h-8 w-8 fill-primary text-primary" strokeWidth={1.5} />
      <span className="font-display text-2xl tracking-widest">ENERGYZ</span>
    </a>
  );
}

function Nav() {
  const links: [string, string][] = [
    ["Beranda", "home"],
    ["Tentang", "about"],
    ["Produk", "product"],
    ["Varian", "flavors"],
    ["Cerita", "blog"],
    ["Kontak", "contact"],
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/85 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden gap-8 md:flex">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="font-display text-sm tracking-widest text-foreground/85 transition hover:text-primary cursor-pointer"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Search className="hidden h-5 w-5 cursor-pointer text-foreground/80 hover:text-primary md:block" />
          <a
            href={wa("Halo EnergyZ! Saya mau pesan, boleh dibantu info produknya?")}
            className="btn-energy cursor-pointer"
          >
            PESAN SEKARANG
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent 0 80px, oklch(1 0 0 / 0.025) 80px 81px)",
        }}
      />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-4 md:pt-12">
          <span className="chip-tag border border-primary/60 bg-transparent text-primary">
            MINUMAN ENERGI ENERGYZ
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[0.95] md:text-6xl lg:text-7xl">
            ENERGI BARU
            <br />
            <span className="text-foreground/95">SETIAP HARI</span>
          </h1>
          <p className="mt-6 max-w-md text-sm text-muted-foreground">
            Kafein bersih, vitamin B kompleks, dan elektrolit alami — diracik lembut untuk menemani
            harimu tanpa rasa berdebar atau drop tiba-tiba.
          </p>
          <a
            href={wa("Halo EnergyZ, saya tertarik mau tahu lebih lanjut tentang produknya.")}
            className="btn-energy mt-8 cursor-pointer"
          >
            HUBUNGI KAMI
          </a>
        </div>

        <div className="relative flex items-center justify-center md:col-span-5">
          <div
            aria-hidden
            className="absolute h-72 w-72 rounded-full opacity-70 blur-2xl md:h-96 md:w-96"
            style={{
              background: "radial-gradient(circle, oklch(0.78 0.18 55 / 0.45), transparent 70%)",
            }}
          />
          <img
            src={heroCan}
            alt="Kaleng EnergyZ"
            className="relative z-10 w-72 animate-float drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)] md:w-[420px]"
          />
        </div>

        <div className="md:col-span-3 md:pt-12">
          <span className="chip-tag">VARIAN CITRUS BLAST</span>
          <p className="mt-5 font-display text-4xl md:text-5xl">Rp 65.000</p>
          <div className="relative mt-5 overflow-hidden rounded-xl border border-primary/40 cursor-pointer">
            <img
              src={athlete}
              alt="Atlet menikmati EnergyZ"
              loading="lazy"
              className="h-44 w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="rounded-full border-2 border-white/80 bg-black/30 p-3">
                <Play className="h-6 w-6 fill-white text-white" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Lihat bagaimana para atlet di berbagai kota memulai harinya bersama EnergyZ.
          </p>
        </div>
      </div>

      <div className="container-x pb-10">
        <div className="grid grid-cols-3 rounded-2xl border border-border bg-surface/60 px-6 py-8">
          {[
            ["TOKO DI SELURUH DUNIA", "20+"],
            ["PELANGGAN PUAS", "100+"],
            ["NEGARA MITRA", "20+"],
          ].map(([label, v]) => (
            <div key={label} className="border-l border-border/60 px-4 first:border-l-0">
              <p className="font-display text-xs tracking-widest text-primary">{label}</p>
              <p className="mt-2 font-display text-4xl md:text-5xl">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="container-x grid items-center gap-10 py-20 md:grid-cols-2">
      <div className="relative">
        <div
          aria-hidden
          className="absolute -inset-4 rounded-3xl opacity-50 blur-2xl"
          style={{
            background: "radial-gradient(circle, oklch(0.78 0.18 55 / 0.4), transparent 70%)",
          }}
        />
        <img
          src={aboutCans}
          alt="Dua kaleng EnergyZ"
          loading="lazy"
          className="relative rounded-2xl border border-primary/30"
        />
      </div>
      <div>
        <span className="chip-tag">TENTANG KAMI</span>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">
          MENEMANI HARIMU,
          <br />
          MENGHIDUPKAN SEMANGATMU
        </h2>
        <p className="mt-5 text-muted-foreground">
          EnergyZ lahir dari semangat untuk hidup lebih aktif. Dibuat dengan kafein bersih,
          elektrolit, dan ekstrak alami — pas untuk kamu yang aktif berolahraga, kerja kreatif, atau
          menikmati malam panjang bersama teman.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            ["SEGAR SEPANJANG HARI", "Pilihan tanpa gula, tanpa rasa drop."],
            ["FOKUS LEBIH TAJAM", "Konsentrasi halus dari pagi sampai larut."],
          ].map(([t, d]) => (
            <div key={t} className="card-bordered">
              <Zap className="mb-3 h-6 w-6 fill-primary text-primary" />
              <p className="font-display text-lg tracking-wide">{t}</p>
              <p className="mt-1 text-xs text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MoreFlavor() {
  return (
    <section className="relative bg-primary py-12 text-primary-foreground">
      <div className="container-x flex flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <p className="font-display text-xs tracking-widest opacity-80">VARIAN</p>
          <h3 className="font-display text-3xl md:text-4xl">
            LEBIH BANYAK RASA, LEBIH BANYAK PILIHAN
          </h3>
        </div>
        <div className="flex gap-4">
          {["GREEN APPLE RUSH", "MIXED BERRY BLAST"].map((f) => (
            <div
              key={f}
              className="rounded-xl border-2 border-black/40 bg-background px-6 py-4 font-display tracking-widest text-foreground cursor-pointer"
            >
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Nutrition() {
  return (
    <section id="product" className="container-x grid items-center gap-10 py-20 md:grid-cols-2">
      <img
        src={flavorsTrio}
        alt="Tiga varian rasa"
        loading="lazy"
        className="rounded-2xl border border-primary/30"
      />
      <div>
        <span className="chip-tag">KOMPOSISI</span>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">VARIAN CITRUS BLAST</h2>
        <p className="mt-4 text-muted-foreground">
          Sensasi jeruk segar berpadu dengan kafein bersih dan vitamin B kompleks. Diracik dengan
          ekstrak alami dan elektrolit untuk energi yang terasa halus, tanpa kejutan di tengah hari.
        </p>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            ["230", "KKAL"],
            ["250", "MG KAFEIN"],
            ["40", "G KARBOHIDRAT"],
          ].map(([v, l]) => (
            <div key={l} className="card-bordered text-center">
              <p className="font-display text-3xl text-primary">{v}</p>
              <p className="mt-1 text-[10px] tracking-widest text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
        <a
          href={wa("Halo, saya ingin info lebih lanjut tentang varian Citrus Blast.")}
          className="btn-energy mt-7 cursor-pointer"
        >
          PELAJARI LEBIH LANJUT
        </a>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="bg-surface py-20">
      <div className="container-x text-center">
        <span className="chip-tag">MITRA KAMI</span>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">
          DIPERCAYA OLEH MITRA DI BERBAGAI NEGARA
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
          Hadir di 20+ negara — mulai dari minimarket di Tokyo, gym di Berlin, hingga stadion di São
          Paulo.
        </p>
        <div className="relative mx-auto mt-10 aspect-[2/1] max-w-3xl rounded-2xl border border-border bg-background/60 p-8">
          <svg viewBox="0 0 800 400" className="h-full w-full opacity-40">
            <path
              fill="oklch(0.45 0.01 60)"
              d="M150,180 Q200,150 250,170 L320,180 L380,210 L420,200 L480,180 L540,200 L600,190 L640,170 Q680,160 700,180 L700,260 L150,260 Z"
            />
          </svg>
          {[
            ["20%", "30%"],
            ["50%", "40%"],
            ["70%", "55%"],
            ["35%", "60%"],
            ["80%", "35%"],
          ].map(([l, t]) => (
            <MapPin
              key={l}
              className="absolute h-7 w-7 fill-primary text-primary drop-shadow-lg"
              style={{ left: l, top: t }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="container-x py-20">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <span className="chip-tag">TESTIMONI</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">CERITA DARI MEREKA</h2>
          <p className="mt-4 text-muted-foreground">
            Cerita nyata dari para atlet, gamer, dan kreator yang menjadikan EnergyZ teman energi
            sehari-hari.
          </p>
          <a
            href={wa("Halo, saya juga punya cerita seru bareng EnergyZ!")}
            className="btn-energy mt-6 cursor-pointer"
          >
            LIHAT SEMUA
          </a>
        </div>
        <div className="grid gap-5">
          {[
            [
              "Maya Putri",
              "Atlet Crossfit",
              "EnergyZ jadi pendamping latihan pagi saya. Rasanya pas, energinya stabil dari awal sampai akhir sesi.",
            ],
            [
              "Daniel Chen",
              "Pemain Esports",
              "Citrus Blast bikin fokus tetap terjaga saat turnamen panjang. Rasanya juga enak banget, jadi favorit baru.",
            ],
          ].map(([n, r, q]) => (
            <div key={n} className="card-bordered">
              <Quote className="mb-3 h-6 w-6 text-primary" />
              <p className="text-sm text-muted-foreground">{q}</p>
              <div className="mt-4 border-t border-border pt-3">
                <p className="font-display tracking-wide">{n}</p>
                <p className="text-xs text-muted-foreground">{r}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Discount() {
  return (
    <section className="bg-primary py-10 text-primary-foreground">
      <div className="container-x grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-xl border-2 border-black/40 bg-background p-4 text-foreground">
          <p className="font-display text-xl tracking-wide">GREEN APPLE RUSH</p>
          <p className="text-xs text-muted-foreground">Segar, sedikit asam, bikin melek.</p>
        </div>
        <img
          src={discountCans}
          alt="Promo kaleng EnergyZ"
          loading="lazy"
          className="h-32 w-32 rounded-xl object-cover"
        />
        <div className="text-right">
          <p className="font-display text-xs tracking-widest opacity-80">PROMO</p>
          <h3 className="font-display text-3xl md:text-4xl">DISKON 10% BULAN INI</h3>
          <a
            href={wa("Halo, saya mau ikutan promo diskon 10% bulan ini ya.")}
            className="mt-3 inline-block rounded-lg bg-background px-5 py-2 font-display tracking-widest text-foreground cursor-pointer"
          >
            PESAN SEKARANG
          </a>
        </div>
      </div>
    </section>
  );
}

function Flavors() {
  const items = [
    { name: "Citrus Blast", price: "65.000", img: flavorCitrus },
    { name: "Green Apple Rush", price: "67.000", img: flavorGreen },
    { name: "Mixed Berry Blast", price: "69.000", img: flavorBerry },
  ];
  return (
    <section id="flavors" className="container-x py-20 text-center">
      <span className="chip-tag">PRODUK</span>
      <h2 className="mt-4 font-display text-4xl md:text-5xl">VARIAN MANA FAVORITMU?</h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((f) => (
          <div key={f.name} className="card-bordered text-left">
            <p className="font-display tracking-widest text-primary">
              SERI {f.name.split(" ")[0].toUpperCase()}
            </p>
            <p className="mt-1 font-display text-3xl">Rp {f.price}</p>
            <img
              src={f.img}
              alt={f.name}
              loading="lazy"
              className="mx-auto my-6 h-56 w-auto rounded-xl object-cover"
            />
            <p className="font-display text-xl">{f.name}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Rasa berani, energi nyata, tanpa kompromi.
            </p>
            <a
              href={wa(`Halo, saya mau pesan varian ${f.name}.`)}
              className="btn-energy mt-5 cursor-pointer"
            >
              PESAN
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Blog() {
  const posts = [
    ["CERITA POSITIF DARI PELANGGAN KAMI", "Kenapa komunitas EnergyZ terus tumbuh."],
    ["FORMULA BARU YANG SEGAR & SEIMBANG", "Intip dapur racikan di balik setiap kaleng EnergyZ."],
    [
      "MENGENAL MINUMAN ENERGI LEBIH DEKAT",
      "Kafein, taurin, dan cerita di balik energi yang bersih.",
    ],
  ];
  return (
    <section id="blog" className="container-x py-20">
      <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <span className="chip-tag">CERITA</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">KABAR TERBARU KAMI</h2>
        </div>
        <a href="#contact" className="btn-energy w-fit cursor-pointer">
          BACA SEMUA
        </a>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map(([t, d]) => (
          <article key={t} className="card-bordered cursor-pointer">
            <div className="mb-4 h-32 rounded-lg bg-gradient-to-br from-primary/40 to-surface-2" />
            <p className="font-display text-lg leading-tight">{t}</p>
            <p className="mt-2 text-xs text-muted-foreground">{d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-surface py-20">
      <div className="container-x grid gap-10 md:grid-cols-2">
        <div>
          <span className="chip-tag">KONTAK</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">YUK, NGOBROL BARENG KAMI</h2>
          <p className="mt-4 text-muted-foreground">
            Mau jadi reseller, kerja sama, atau sekadar tanya-tanya? Klik tombol di bawah untuk
            ngobrol langsung lewat WhatsApp — kami dengan senang hati membantu.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary" /> +62 813 8407 2641
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary" /> hello@ediamant.com
            </p>
            <p className="flex items-center gap-3">
              <MapPinned className="h-4 w-4 text-primary" /> Jakarta, Indonesia
            </p>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const msg = `Halo Diamant EnergyZ!%0A%0ANama: ${f.get("name")}%0AEmail: ${f.get("email")}%0A%0A${f.get("message")}`;
            window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
          }}
          className="card-bordered space-y-4"
        >
          <p className="font-display text-xl tracking-wide">TINGGALKAN PESAN</p>
          <input
            name="name"
            required
            placeholder="Nama lengkap"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Alamat email"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Ceritakan kebutuhanmu di sini..."
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
          />
          <button type="submit" className="btn-energy cursor-pointer">
            <Check className="h-4 w-4" /> KIRIM VIA WHATSAPP
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container-x grid gap-8 md:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3 text-xs text-muted-foreground">
            Energi baru, semangat baru, setiap hari.
          </p>
        </div>
        <div>
          <p className="font-display tracking-widest text-primary">TAUTAN CEPAT</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="cursor-pointer hover:text-primary">Tentang</li>
            <li className="cursor-pointer hover:text-primary">Produk</li>
            <li className="cursor-pointer hover:text-primary">Cerita</li>
          </ul>
        </div>
        <div>
          <p className="font-display tracking-widest text-primary">MITRA KAMI</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Atlet</li>
            <li>Gamer</li>
            <li>Toko & Reseller</li>
          </ul>
        </div>
        <div>
          <p className="font-display tracking-widest text-primary">KONTAK</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>+62 813 8407 2641</li>
            <li>hello@energyz.co</li>
          </ul>
        </div>
      </div>
      <p className="container-x mt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Diamant EnergyZ. Hak cipta dilindungi.
      </p>
    </footer>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <About />
      <MoreFlavor />
      <Nutrition />
      <Clients />
      <Testimonials />
      <Discount />
      <Flavors />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
