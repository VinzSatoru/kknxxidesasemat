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
