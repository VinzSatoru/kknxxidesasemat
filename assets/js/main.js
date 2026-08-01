document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const icon = btn.querySelector('i');

    // Toggle menu
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        if (menu.classList.contains('hidden')) {
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
        } else {
            icon.classList.remove('ph-list');
            icon.classList.add('ph-x');
        }
    });

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
        });
    });

    // Navbar Scroll Effect (Glassmorphism shadow)
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-md');
            navbar.classList.replace('bg-white/70', 'bg-white/95');
        } else {
            navbar.classList.remove('shadow-md');
            navbar.classList.replace('bg-white/95', 'bg-white/70');
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});

// =====================================================
// DATA BERITA - Tambahkan berita baru di sini!
// =====================================================
// Cara menambah berita:
// 1. Copy salah satu objek di bawah
// 2. Ubah id-nya (misal: 'berita-4')
// 3. Isi data tanggal, judul, kategori, deskripsi, dan gambar
// 4. Untuk gallery, tambahkan path foto ke dalam array
// 5. Di index.html, tambahkan tombol: onclick="openModal('berita-4')"
// =====================================================
const newsData = {
    'berita-1': {
        title: 'Program Rumah Belajar Semat Cerdas',
        date: '29 Juli 2026',
        category: 'Program Kerja',
        heroImg: 'assets/images/day 3 Program rumah belajar semat cerdas.png',
        description: `
            <p class="mb-4">Program <strong>Rumah Belajar Semat Cerdas</strong> merupakan salah satu program kerja unggulan Tim KKN UNISNU Desa Semat Angkatan XXI yang bertujuan untuk meningkatkan kualitas pendidikan anak-anak di lingkungan desa pesisir.</p>
            <p class="mb-4">Kegiatan ini berupa kelas belajar tambahan yang diadakan secara rutin, dengan materi yang dikemas secara interaktif dan menyenangkan. Mata pelajaran yang diajarkan meliputi Bahasa Inggris dasar, Matematika, serta pengenalan literasi digital untuk anak-anak usia sekolah dasar.</p>
            <p>Antusiasme anak-anak desa sangat tinggi, ditunjukkan dengan partisipasi yang semakin meningkat setiap harinya. Program ini diharapkan mampu menumbuhkan semangat belajar dan membuka wawasan baru bagi generasi muda Desa Semat.</p>
        `,
        gallery: [
            // Tambahkan path foto tambahan di sini, contoh:
            // 'assets/images/kegiatan/rumah-belajar-1.jpg',
            // 'assets/images/kegiatan/rumah-belajar-2.jpg',
        ]
    },
    'berita-2': {
        title: 'Pembukaan KKN di Desa',
        date: '28 Juli 2026',
        category: 'Penerjunan',
        heroImg: 'assets/images/day 2 pembukaan kkn di desa.png',
        description: `
            <p class="mb-4">Acara pembukaan dan penerimaan mahasiswa KKN UNISNU Angkatan XXI secara resmi oleh Bapak Petinggi (Kepala Desa) Semat beserta seluruh jajaran perangkat desa di Balai Desa Semat.</p>
            <p class="mb-4">Dalam sambutannya, Bapak Petinggi menyampaikan harapan besar agar kehadiran mahasiswa KKN dapat memberikan kontribusi positif bagi kemajuan desa, khususnya di bidang pendidikan, pemberdayaan UMKM, dan kebersihan lingkungan pesisir.</p>
            <p>Acara berlangsung hangat dan penuh keakraban, dilanjutkan dengan sesi perkenalan antar anggota KKN dan warga desa. Momen ini menandai dimulainya masa pengabdian selama kurang lebih 40 hari ke depan.</p>
        `,
        gallery: [
            // Tambahkan path foto tambahan di sini
        ]
    },
    'berita-3': {
        title: 'Penerjunan KKN di Kampus',
        date: '27 Juli 2026',
        category: 'Penerjunan',
        heroImg: 'assets/images/day 1 penerjuan kkn di kampus.png',
        description: `
            <p class="mb-4">Upacara pelepasan dan penerjunan mahasiswa KKN UNISNU Angkatan XXI diselenggarakan secara serentak di lingkungan kampus Universitas Islam Nahdlatul Ulama (UNISNU) Jepara.</p>
            <p class="mb-4">Acara ini dihadiri oleh Rektor UNISNU, para Dekan Fakultas, serta Dosen Pembimbing Lapangan (DPL) dari masing-masing kelompok. Dalam arahannya, Rektor berpesan agar mahasiswa dapat menjaga nama baik almamater dan memberikan manfaat yang nyata bagi masyarakat di lokasi KKN.</p>
            <p>Setelah upacara resmi, seluruh kelompok bersiap untuk berangkat menuju lokasi masing-masing. Tim KKN Desa Semat yang terdiri dari 16 mahasiswa lintas program studi siap memulai perjalanan pengabdian mereka.</p>
        `,
        gallery: [
            // Tambahkan path foto tambahan di sini
        ]
    },
    'berita-day1b': {
        title: 'Selametan di Posko KKN',
        date: '27 Juli 2026',
        category: 'Tradisi',
        heroImg: 'assets/images/day 1 selametan di posko pada malam hari setelah penerjunan - dihadiri oleh petinggi.png',
        description: `
            <p class="mb-4">Pada malam hari setelah penerjunan, seluruh anggota Tim KKN Desa Semat mengadakan acara <strong>selametan</strong> di posko sebagai bentuk rasa syukur dan permohonan doa keselamatan selama menjalankan tugas pengabdian.</p>
            <p class="mb-4">Acara ini dihadiri langsung oleh Bapak Petinggi (Kepala Desa) Semat yang turut memberikan doa restu dan nasihat kepada seluruh mahasiswa agar dapat beradaptasi dengan baik bersama masyarakat desa.</p>
            <p>Suasana yang hangat dan penuh kebersamaan ini menjadi awal yang baik bagi perjalanan KKN kami. Tradisi selametan ini juga menjadi simbol penghormatan terhadap budaya lokal masyarakat Desa Semat.</p>
        `,
        gallery: []
    },
    'berita-day2b': {
        title: 'Pemasangan Penunjuk Arah Posko',
        date: '28 Juli 2026',
        category: 'Persiapan',
        heroImg: 'assets/images/day 2 pemasangan penunjuk arah posko pada malam hari setelah pembukaan.png',
        description: `
            <p class="mb-4">Setelah acara pembukaan resmi di siang hari, pada malam harinya tim KKN langsung berinisiatif untuk memasang <strong>papan penunjuk arah</strong> menuju posko KKN di beberapa titik strategis di area desa.</p>
            <p class="mb-4">Pemasangan ini bertujuan agar warga desa, tamu, maupun Dosen Pembimbing Lapangan (DPL) dapat dengan mudah menemukan lokasi posko. Papan penunjuk didesain dengan sederhana namun jelas dan informatif.</p>
            <p>Kegiatan ini dilakukan secara gotong royong oleh seluruh anggota tim dan menjadi salah satu langkah awal membangun kehadiran KKN di tengah masyarakat Desa Semat.</p>
        `,
        gallery: []
    },
    'berita-day4': {
        title: 'Kunjungan & Observasi di SDN 01 Semat',
        date: '30 Juli 2026',
        category: 'Observasi',
        heroImg: 'assets/images/Day 4 kunjungan dan observasi di SDN 01 Semat - 30 juli .png',
        description: `
            <p class="mb-4">Tim KKN UNISNU melakukan kunjungan resmi dan observasi ke <strong>SDN 01 Semat</strong> untuk mengenal lebih dekat kondisi lingkungan sekolah, fasilitas belajar, serta kebutuhan siswa dan guru.</p>
            <p class="mb-4">Hasil observasi ini menjadi dasar perencanaan program-program edukasi yang akan dilaksanakan selama masa KKN, seperti Rumah Belajar Semat Cerdas, senam bersama, dan kegiatan literasi lainnya.</p>
            <p>Pihak sekolah menyambut baik kedatangan tim KKN dan menyatakan kesiapan untuk berkolaborasi demi kemajuan pendidikan anak-anak Desa Semat.</p>
        `,
        gallery: []
    },
    'berita-day5': {
        title: 'Senam Bersama di SDN 01 Semat',
        date: '31 Juli 2026',
        category: 'Program Kerja',
        heroImg: 'assets/images/day 5 senam bersama di sdn 01 semat.png',
        description: `
            <p class="mb-4">Sebagai tindak lanjut dari hasil observasi, Tim KKN mengadakan kegiatan <strong>senam pagi bersama</strong> dengan siswa-siswi SDN 01 Semat. Kegiatan ini bertujuan untuk mempererat keakraban sekaligus membangun kebiasaan hidup sehat sejak dini.</p>
            <p class="mb-4">Antusiasme para siswa sangat tinggi. Mereka mengikuti gerakan senam dengan penuh semangat dan ceria. Kegiatan ini juga menjadi ice-breaking yang efektif sebelum memulai sesi belajar di kelas.</p>
            <p>Senam bersama ini direncanakan menjadi kegiatan rutin setiap pagi selama masa KKN berlangsung, sebagai bagian dari program pembinaan kesehatan jasmani untuk anak-anak desa.</p>
        `,
        gallery: []
    },
};

// =====================================================
// FUNGSI MODAL - Tidak perlu diubah
// =====================================================
function openModal(id) {
    const data = newsData[id];
    if (!data) return;

    const modal = document.getElementById('news-modal');
    const heroImg = document.getElementById('modal-hero-img');
    const title = document.getElementById('modal-title');
    const badges = document.getElementById('modal-badges');
    const description = document.getElementById('modal-description');
    const gallerySection = document.getElementById('modal-gallery-section');
    const gallery = document.getElementById('modal-gallery');

    // Fill content
    heroImg.src = data.heroImg;
    heroImg.alt = data.title;
    title.textContent = data.title;

    badges.innerHTML = `
        <span class="text-xs font-bold px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white rounded-md">${data.date}</span>
        <span class="text-xs font-bold px-2.5 py-1 bg-primary/80 text-white rounded-md">${data.category}</span>
    `;

    description.innerHTML = data.description;

    // Gallery
    if (data.gallery && data.gallery.length > 0) {
        gallerySection.classList.remove('hidden');
        gallery.innerHTML = data.gallery.map(img => `
            <div class="rounded-2xl overflow-hidden modal-gallery-img">
                <img src="${img}" alt="Foto kegiatan" class="w-full h-40 object-cover" />
            </div>
        `).join('');
    } else {
        gallerySection.classList.add('hidden');
        gallery.innerHTML = '';
    }

    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

function closeModal() {
    const modal = document.getElementById('news-modal');
    modal.classList.add('closing');

    setTimeout(() => {
        modal.classList.remove('active', 'closing');
        modal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }, 200);
}
