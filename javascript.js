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