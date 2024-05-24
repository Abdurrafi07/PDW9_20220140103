function handleSubmission() {
    // Ambil nilai dari form
    var nama = document.getElementById("employeeName").value;
    var umur = document.getElementById("employeeAge").value;
    var email = document.getElementById("employeeEmail").value;
    var gender = document.getElementById("gender").value;
    var program = document.getElementById("department").value;

    // Ambil nilai dari checkbox keahlian
    var skills = [];
    var checkboxes = document.querySelectorAll('input[name="skills"]:checked');
    checkboxes.forEach((checkbox) => {
        skills.push(checkbox.value);
    });

    // Format tanggal dan waktu saat ini
    const options = { 
        weekday: 'long', year: 'numeric', month: 'long', 
        day: 'numeric', hour: '2-digit', minute: '2-digit', 
        second: '2-digit', timeZone: 'Asia/Jakarta', timeZoneName: 'short' 
    };
    const now = new Date().toLocaleDateString('id-ID', options);

    // Membuat HTML untuk ditampilkan di SweetAlert
    var alertHTML = `
        <div class="form-values">
            <div class="form-group">
                <label>Nama :</label>
                <input type="text" value="${nama}" readonly/>
            </div>
            <div class="form-group">
                <label>Umur :</label>
                <input type="text" value="${umur}" readonly/>
            </div>
            <div class="form-group">
                <label>Email :</label>
                <input type="text" value="${email}" readonly/>
            </div>
            <div class="form-group">
                <label>Jenis Kelamin :</label>
                <input type="text" value="${gender}" readonly/>
            </div>
            <div class="form-group">
                <label>Peminatan :</label>
                <input type="text" value="${program}" readonly/>
            </div>
            <div class="form-group">
                <label>Keahlian :</label>
                <input type="text" value="${skills.join(", ")}" readonly/>
            </div>
            <div class="form-group">
                <label>Tanggal & Waktu :</label>
                <input type="text" value="${now}" readonly/>
            </div>
        </div>
    `;

    // Tampilkan SweetAlert untuk konfirmasi
    Swal.fire({
        title: "Konfirmasi Pengisian Form",
        html: alertHTML,
        showCancelButton: true,
        confirmButtonText: "Benar",
        cancelButtonText: "Kembali",
        confirmButtonColor: "#3885d6",
        cancelButtonColor: "#d33",
        customClass: {
            title: "swal-title",
            htmlContainer: "swal-html-container",
            confirmButton: "swal-confirm-button",
            cancelButton: "swal-cancel-button",
            actions: "swal-actions",
            popup: "swal-popup"
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Proses jika tombol Benar ditekan
            var formulir = {
                name: nama,
                umur: umur,
                email: email,
                gender: gender,
                program: program,
                skills: skills,
                dateTime: now
            };
            console.log(formulir);
            Swal.fire({
                title: "Terima Kasih",
                text: "Terima kasih, Jawaban Anda telah direkam",
                icon: "success",
                customClass: {
                    title: "swal-title",
                    closeButton: "swal-close-button",
                    popup: "swal-popup"
                }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Proses jika tombol Kembali ditekan
            Swal.fire({
                title: "Dibatalkan",
                text: "Dibatalkan :(",
                icon: "error",
                customClass: {
                    title: "swal-title",
                    closeButton: "swal-close-button",
                    popup: "swal-popup"
                }
            });
        }
    });
}
