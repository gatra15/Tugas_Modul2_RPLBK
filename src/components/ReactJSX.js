import React from 'react';

//menggunakan JSX
const ReactJSX = () => {
    return (
        <div>
            <h1>Tugas JSX</h1>
            <pre>Cari Nama Anggota Aegis Yuk</pre>
            <section id="result">
                <h3 id="search-not-found" style="display: none;">Data Tidak Ditemukan</h3>
                <div id="search-result">
                </div>
            </section>
        </div>
    );
}

export default ReactJSX;