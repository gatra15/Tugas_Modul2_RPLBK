
  const searchResult = document.getElementById('search-result')
  const searchNotFoundMessage = document.getElementById('search-not-found')

  const input = document.getElementById('input')
 
  function dataFilter() {
      fetch('data.json')
          .then((response) => response.json())
          .then((json) => {
              searchResult.innerHTML = ''

              const filterData = json.data.filter(data => {
                  const regex = new RegExp(input.value.toLowerCase(), 'i')

                  
                  return regex.test(data.nama_lengkap.toLowerCase()) || data.nim == input.value.toLowerCase() || regex.test(data.nama_panggilan.toLowerCase());
              })

              if (filterData.length > 0) {
                  searchNotFoundMessage.style.display = "none"

                  filterData.forEach(data => {
                      searchResult.innerHTML += `
                      <h2>${data.nama_lengkap}</h2>
                      <table style="text-align: left; margin-bottom: 20px;">
                          <tr>
                              <th>Nama Lengkap</th>
                              <td>:</td>
                              <td>${data.nama_lengkap}</t>
                          </tr>
                          <tr>
                              <th>Nama Panggilan</th>
                              <td>:</td>
                              <td>${data.nama_panggilan}</t>
                          </tr>
                          <tr>
                              <th>NIM</th>
                              <td>:</td>
                              <td>${data.nim}</t>
                          </tr>
                          <tr>
                              <th>Nomor Telepon</th>
                              <td>:</td>
                              <td>${data.nomor_telepon}</t>
                          </tr>
                          <tr>
                              <th>Id Line</th>
                              <td>:</td>
                              <td>${data.id_line}</t>
                          </tr>
                          <tr>
                              <th>Email</th>
                              <td>:</td>
                              <td>${data.email}</t>
                          </tr>
                          <tr>
                              <th>Hobi</th>
                              <td>:</td>
                              <td>${data.hobi}</t>
                          </tr>
                          <tr>
                              <th>Tanggal Lahir</th>
                              <td>:</td>
                              <td>${data.tanggal_lahir}</t>
                          </tr>
                      </table>
                      `
                  })

              } else {
                  searchNotFoundMessage.style.display = "block"
              }
          })
          .catch((err) => {
              searchResult.innerHTML = ''
              searchNotFoundMessage.style.display = "block"
          })
  }