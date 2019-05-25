
var c = 0; // Austria TEST n1
var d = 100; // Horse power
var b = 30; // Age

calculateInsurance(b, c, d);

function calculateInsurance(b, c, d){

    if (c == 0) {

        var insurance = Math.round(Number(d) * 100 / Number(b)  + 50);

    }else if(c == 1){

        var insurance = Math.round(Number(d)  * 120 / Number(b)  + 100);
    
    }else{
        
        let bplus = Number(b) + 3;
        var insurance = Math.round(Number(d) * 150 / bplus + 50);
      
    }

    return insurance;
}



var h = 1 //hungery TEST 2
var t = 80; // Horse power
var r = 45; // Age

function calculateInsuranceHungary(r, h, t){

    if (h == 0) {

        var insurance = Math.round(Number(t) * 100 / Number(r)  + 50);

    }else if(h == 1){

        var insurance = Math.round(Number(t)  * 120 / Number(r)  + 100);
    
    }else{
        
        let bplus = Number(r) + 3;
        var insurance = Math.round(Number(t) * 150 / bplus + 50);
      
    }

    return insurance;
}



var m = 2 //hungery TEST 2
var n = 110; // Horse power
var o = 18; // Age

function calculateInsuranceGreece(o, m, n){

    if (m == 0) {

        var insurance = Math.round(Number(n) * 100 / Number(o)  + 50);

    }else if(m == 1){

        var insurance = Math.round(Number(n)  * 120 / Number(o)  + 100);
    
    }else{
        
        let bplus = Number(o) + 3;
        var insurance = Math.round(Number(n) * 150 / bplus + 50);
      
    }

    return insurance;
}
