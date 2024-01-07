let words = [
    "BMW",
    "Basketbolist",
    "Barcelona",
    "Galatasaray",
    "Pizza",
    "Çay",
    "Yangın Söndürən",
    "Kondisioner",
    "Marker",
    "Polis",
    "Təyyarə",
    "Fil",
    "Asfalt",
    "Şkaf",
    "Telefon",
    "Soğan",
    "Çörək",
    "Fanta",
    "Yumurta",
    "Coca-Cola",
    "Kərtof",
    "Limon",
    "Spirt",
    "Apple(şirkət)",
    "Adam",
    "Ərik",
    "Marker",
    "Stəkan",
    "Ev",
    "Qumar",
    "iPhone",
    "Rüşvət",
    "Amerika",
    "Dərman",
    "İşıq",
    "Lovhə",
    "Kurtka",
    "Saat",
    "Qələm",
    "KFC",
    "Şokolad",
    "Yemiş",
    "Qaraj",
    "Dondurma",
    "Qarpiz",
    "Banan",
    "Televizor",
    "Bıçaq",
    "Google",
    "Soyuducu",
    "YouTube",
    "Mango",
    "Alma",
    "Armud",
    "Kloun",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "Lampa",
    "Kələm",
    "Silah",
    "Bomba"
]

const randomElement = words[Math.floor(Math.random() * words.length)];

var spyList = ["Spy"]

function bashla() {
    let count = document.getElementById("players").value;
    
    for(i=0; i<count-1;i++) {
        spyList.push(randomElement)
    }
    document.getElementById("btn2").style.display = "inline"
    
}

function oyna() {
    const spy = spyList[Math.floor(Math.random() * spyList.length)];
    const index = spyList.indexOf(spy);
if (index > -1) { 
  spyList.splice(index, 1); 
}
    console.log(spyList);
    if(spy=="Spy") {
        document.getElementById("words").innerHTML = ""
        setTimeout(() => {
            document.getElementById("words").innerHTML = `
        <div class="card-spy">
            <p>You are:</p>
            <h1>Spy</h1>
        </div>
        `
    document.getElementById("clear").style.display = "inline"

        }, 1000);
        
    }
    else {
        document.getElementById("words").innerHTML = ""
        setTimeout(() => {
            document.getElementById("words").innerHTML = `
        <div class="card">
            <p>Word is:</p>
            <h1>${spy}</h1>
        </div>
        `
    document.getElementById("clear").style.display = "inline"

        }, 1000);
        
    }
}

function clearr() {
    // console.log("dsds");
    document.getElementById("words").innerHTML = ""
}
