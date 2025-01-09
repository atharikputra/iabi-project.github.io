function changeContent(page) {
    const contentBox = document.getElementById('content-box');
    contentBox.classList.add("fade-out");
    setTimeout(() => {

    if (page === 1) {
        contentBox.innerHTML = `
        <h3>Let's talk about <span class="highlight">IABI</span></h3>
        <p>
            Indonesia merupakan salah satu negara dengan pertumbuhan lalu lintas udara yang sangat cepat di dunia. 
            Sebagai negara kepulauan terbesar, Indonesia dituntut memiliki kualitas transportasi udara yang handal. 
            Tantangan konektivitas domestik antar 17.380 pulau dan internasional mendorong jaringan elite menciptakan 
            solusi berkelanjutan, memajukan keselamatan, efisiensi, dan transformasi bandara di seluruh negeri.
        </p>
        <p>
            IABI adalah organisasi mandiri dan nirlaba yang menghimpun para ahli di sektor bandar udara. Unsur Regulator, 
            Operator Bandara Udara, Akademisi dan praktisi lainnya di industri penerbangan berkolaborasi, berinovasi, 
            dan mendorong industri aviasi Indonesia menuju standar global.
        </p>
        <div class="timeline mt-4">
            <div class="timeline-item d-flex align-items-center mb-3">
                <div class="timeline-date">17 Feb 2010</div>
                <p>Pencatatan Akta Notaris No 04</p>
            </div>
            <div class="timeline-item d-flex align-items-center mb-3">
                <div class="timeline-date">27 Jul 2010</div>
                <p>Deklarasi oleh Ir Bambang Susantono (Wakil Menteri Perhubungan RI)</p>
            </div>
            <div class="timeline-item d-flex align-items-center mb-3">
                <div class="timeline-date">30 Des 2010</div>
                <p>Pendirian IABI</p>
            </div>
        </div>
        <p>
            IABI telah dikukuhkan sebagai satu-satunya wadah asosiasi profesi ahli bandara udara di dalam naungan 
            Lembaga Sertifikasi Aviasi Profesi Aviasi Indonesia yang telah terakreditasi oleh Badan Nasional Sertifikasi Profesi.
        </p>
    `;
    } else if (page === 2) {
        contentBox.innerHTML = `
        <h3>Vision & <span class="highlight">Mission</span></h3>
        <p>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>
        <div class="row g-4">
            <div class="col-md-6 d-flex align-items-stretch">
                <div class="card bg-light shadow-sm border-0 p-4 w-100">
                    <h4 class="text-warning">Visi</h4>
                    <ol>
                        <li>Menyadari sepenuhnya akan pentingnya peranan tenaga ahli bandar udara dalam menyediakan jasa keahlian 
                            bagi pengguna dan penyelenggara bandar udara untuk menunjang pembangunan nasional.</li>
                        <li>Melindungi kepentingan nasional dalam bidang keahlian bandar udara dalam persaingan di era globalisasi.</li>
                    </ol>
                </div>
            </div>
            <div class="col-md-6 d-flex align-items-stretch">
                <div class="card bg-light shadow-sm border-0 p-4 w-100">
                    <h4 class="text-warning">Misi</h4>
                    <ol>
                        <li>Meningkatkan kualitas serta menjaga/membela harkat dan martabat profesi ahli bandar udara.</li>
                        <li>Menyelenggarakan segala usaha untuk meningkatkan kemampuan dan kinerja para anggota ahli bandar udara 
                            dan menjadi mitra dalam memaknai kebijakan pemerintah di bidang bandar udara untuk tersedianya para ahli 
                            bandar udara yang mampu bersaing dalam forum nasional dan internasional.</li>
                    </ol>
                </div>
            </div>
        </div>
    `;
    } else if (page === 3) {
        contentBox.innerHTML = `
        <h3>Organisational <span class="highlight">Structure</span></h3>
        <p>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>
        <div class="photo-box-container d-flex justify-content-center align-items-center mt-4">
            <div class="photo-box">
                <img src="../foto/fotologoiabi/struktur.png" alt="Organisational Structure" class="img-fluid">
            </div>
        </div>
    `;
    }
    contentBox.classList.remove("fade-out");
    }, 500); // 
}