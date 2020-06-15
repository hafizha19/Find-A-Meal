// key untuk mengakses dan menyimpan data pada localStorage.
const CACHE_KEY = "hafalan_history";
      
function checkForStorage() {
    return typeof(Storage) !== "undefined";
}
 
function putHistory(data) {
   if (checkForStorage()) {
       let historyData = null;
       if (localStorage.getItem(CACHE_KEY) === null) {
           historyData = [];
       } else {
           // mengubah nilai objek dalam bentuk string kembali pada bentuk objek JavaScript
           historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
       }
 
       // menambahkan nilai baru pada array yang ditempatkan pada akhir index
       historyData.unshift(data);

       // mengubah objek JavaScript ke dalam bentuk String
       localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
   }
}

function showHistory() {
    if (checkForStorage) {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        return [];
    }
}

function renderHistory() {
    const historyData = showHistory();
    const progressList = document.querySelector("#progressList");
    progressList.innerHTML = "";
    let res = [];
    let numPage;
    for (let history of historyData) {

        numPage = parseInt(history.page);
        res.push(numPage);
        const sum = res.reduce(function(a,b){
            return a+b;
        },0);console.log(sum);
        if (sum>=20){
            document.querySelector(".result").innerHTML = 
            Math.floor(sum/20)+" Juz "+sum%20+" Halaman";
        } else {
            document.querySelector(".result").innerHTML = sum+" Halaman";
        }

        const row = document.createElement('tr');
        row.innerHTML = "<td>" + history.date + "</td>";
        row.innerHTML += "<td>" + history.juz + "</td>";
        row.innerHTML += "<td>" + history.page + "</td>";
  
        progressList.appendChild(row);

    } console.log(res);
 }
  
renderHistory();

function setor(){
    const juz = document.getElementById("juz").value;
    const page = document.getElementById("page").value;

    const bulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    let date = new Date().getDate() +"-"+ bulan[new Date().getMonth()]+"-"+new Date().getFullYear();
    if (juz < 1 || page < 1){
        alert("Masukkan juz dan halamannya.");
        return;
    } 
 
    const history = {
        date: date,
        juz: juz,
        page: page
    }

    putHistory(history);
    renderHistory();
}