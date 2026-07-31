import re

members = [
    {"name": "Mohammad Affandi", "major": "Akuntansi", "role": "Kormades", "img": "assets/images/foto anggota/Mohammad Affandi - Akuntansi - Kormades.png", "bg": "bg-primary"},
    {"name": "Amrina Rasyada", "major": "Pendidikan Agama Islam", "role": "Sekretaris", "img": "assets/images/foto anggota/Amrina Rasyada - Pendidikan Agama Islam - Sekretaris.png", "bg": "bg-secondary"},
    {"name": "Khayatun Nisa'", "major": "Manajemen", "role": "Sekretaris", "img": "assets/images/foto anggota/Khayatun Nisa' -Manajemen - Sekretaris.png", "bg": "bg-secondary"},
    {"name": "Ikfina Akmalia", "major": "PGSD", "role": "Bendahara", "img": "assets/images/foto anggota/Ikfina Akmalia - PGSD - Bendahara.png", "bg": "bg-yellow-500"},
    {"name": "Rihadhatul Aisah P.", "major": "Perbankan Syariah", "role": "Bendahara", "img": "https://ui-avatars.com/api/?name=Rihadhatul+Aisah&background=eab308&color=fff&size=256", "bg": "bg-yellow-500"},
    {"name": "Ulia Muzaroh", "major": "Manajemen", "role": "Humas", "img": "assets/images/foto anggota/Ulia Muzaroh - Manajemen - Humas.png", "bg": "bg-slate-700"},
    {"name": "Muhammad Sofyan P.", "major": "Teknik Elektro", "role": "Humas", "img": "https://ui-avatars.com/api/?name=Muhammad+Sofyan&background=334155&color=fff&size=256", "bg": "bg-slate-700"},
    {"name": "Elsa Rahma Silviyanti", "major": "PGSD", "role": "Acara", "img": "assets/images/foto anggota/Elsa Rahma Silviyanti - PGSD - Acara.png", "bg": "bg-orange-500"},
    {"name": "Selfi Vina Shofiana", "major": "Manajemen", "role": "Acara", "img": "assets/images/foto anggota/Selfi Vina Shofiana - Manajemen - Acara.png", "bg": "bg-orange-500"},
    {"name": "Soraya Azizah D.", "major": "Manajemen", "role": "Acara", "img": "assets/images/foto anggota/Soraya Azizah Dharmawan - Manajemen - Acara.png", "bg": "bg-orange-500"},
    {"name": "Ahmad Novian Dzulfanni", "major": "Teknik Informatika", "role": "PDD", "img": "assets/images/foto anggota/Ahmad Novian Dzulfanni - Teknik Informatika - PDD.png", "bg": "bg-pink-500"},
    {"name": "Novita Nailil Muna", "major": "Pend. Agama Islam", "role": "PDD", "img": "assets/images/foto anggota/Novita Nailil Muna - Pendidikan Agama Islam - PDD.png", "bg": "bg-pink-500"},
    {"name": "Aurenanda Altareza", "major": "Akuntansi", "role": "Konsumsi", "img": "assets/images/foto anggota/Aurenanda Altareza - Akuntansi - Konsumsi.png", "bg": "bg-green-500"},
    {"name": "Ravaell Amanda R. P.", "major": "PGSD", "role": "Konsumsi", "img": "assets/images/foto anggota/Ravaell Amanda R. Princessa - PGSD -Konsumsi.png", "bg": "bg-green-500"},
    {"name": "Mahendra Yoga P.", "major": "DKV", "role": "Perkap", "img": "assets/images/foto anggota/Mahendra Yoga Pratama - Desain Komunikasi Visual - Perkap.png", "bg": "bg-indigo-500"},
    {"name": "Mona Jasmine", "major": "Sistem Informasi", "role": "Perkap", "img": "assets/images/foto anggota/Mona Jasmine - Sistem Informasi - Perkap.png", "bg": "bg-indigo-500"},
]

template = """                <div class="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 text-center group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] flex flex-col">
                    <div class="relative w-36 h-36 mx-auto mb-6 flex-shrink-0">
                        <div class="absolute inset-0 bg-primary/20 rounded-full blur-lg transform group-hover:scale-125 transition-transform duration-500"></div>
                        <img src="{img}" alt="Foto {role}" class="relative w-full h-full object-cover rounded-full border-4 border-white shadow-md z-10" />
                        <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 {bg} text-white text-xs font-bold px-4 py-1.5 rounded-full border-2 border-white z-20 shadow-sm whitespace-nowrap">{role}</div>
                    </div>
                    <div class="flex-grow flex flex-col justify-center">
                        <h3 class="font-bold font-heading text-[1.1rem] leading-tight text-secondary mb-1">{name}</h3>
                        <p class="text-sm font-medium text-slate-500 mb-5">{major}</p>
                    </div>
                    <div class="flex justify-center gap-3 mt-auto">
                        <a href="#" class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 transition-all shadow-sm"><i class="ph-fill ph-instagram-logo text-lg"></i></a>
                    </div>
                </div>"""

html_blocks = []
for m in members:
    html_blocks.append(template.format(**m))

replacement_html = '\n'.join(html_blocks)

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the start and end of the grid
start_str = '            <!-- Grid Profil -->\n            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">\n'
end_str = '            </div>\n            \n            <!-- Note -->'

start_idx = content.find(start_str)
if start_idx == -1:
    print("Could not find start string")
    exit(1)

start_idx += len(start_str)
end_idx = content.find(end_str, start_idx)

if end_idx == -1:
    print("Could not find end string")
    exit(1)

new_content = content[:start_idx] + replacement_html + '\n' + content[end_idx:]

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully updated index.html")
