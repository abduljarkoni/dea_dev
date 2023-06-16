// function search(){
//     const input =document.getElementById("searchInput")//masukan nama id pada element input
//     console.log('searching', input.value)
// // akan menampilkan value/inputan yang dimasukan user pada form input didalam console
// // inut.value : untuk menangkap hasil inputannya
// }

function search(){
    // ini untuk mengambil inputan dari form input
    let {value} = document.getElementById("searchInput")
    
    // baseurl berisi link pencararian google
    const baseUrl = "https://google.com/search?q="

    if(!value) value="abdul jarkoni"
    // jika tidak ada value/valuenya kosong, maka valuenya isi dengan "abdul jarkoni"
    
    location.replace(baseUrl + value)//mereplace berdasarkan link baseUrl dan ditambahkan value dari inputan user
    // ini akan mereplace halaman web nya dan memindahkannya kelink/halaman web google.com
}

