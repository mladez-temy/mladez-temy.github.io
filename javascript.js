let actualindex = 1;
let max = 28;
function posun(kam) {	// primarne dostava cisla -1, +1
    actualindex += kam;

    if (actualindex < 1) 
        actualindex = max; 
    else if (actualindex > max)
        actualindex = 1;
        document.getElementById('velky').src = 'fotky/obr' + actualindex + '.jpg';
    }
    

function vymen(subor) {
        document.getElementById("velky").src = subor;
}

document.addEventListener("DOMContentLoaded", function() {
    const selectMenu = document.querySelector("#filter-clankov");
    const clanky = document.querySelectorAll("article.celok");

    function filtrujClanky() {
        const vybranaHodnota = selectMenu.value;

        clanky.forEach(clanok => {
            // Ak je vybraté "vsetko" ALEBO sa ID zhoduje s výberom
            if (vybranaHodnota === "vsetko" || clanok.id === vybranaHodnota) {
                clanok.style.display = "block";
            } else {
                clanok.style.display = "none";
            }
        });
    }

    selectMenu.addEventListener("change", filtrujClanky);

    // Spustíme hneď, aby sa aplikoval počiatočný stav (napr. zobrazenie všetkého)
    filtrujClanky();
});

console.log("JavaScript načítaný a pripravený na použitie.");