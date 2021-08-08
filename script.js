// global variables (initial forest temperatures)
let a = 22;
let b = 17;
let c = 26;
let d = 18;
let e = 24;
let f = 20;
let g = 16;
let h = 21;
let i = 23;
let j = 19;
let k = 25
let l = 17;
let m = 15;
let n = 21;
let o = 25;
let p = 27;
let q = 18;
let r = 19;
let s = 22;
let t = 24; 

// boolean variables
let mother1; // if true, mother1 is on fire. else, mother1 is not.
let mother2;
let mother3;
let mother4;
let mother5;
let alert1 = false; // so user isn't spammed with alerts
let alert2 = false;
let alert3 = false;
let alert4 = false;
let alert5 = false;

// the chance of a forest fire (will probably be extremely elevated for the demonstration)
function ChanceFire() {
    return Math.floor((Math.random() * 1000) + 1);
} // end of ChanceFire

// there is a fire
function YesFire(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) 
} // end of YesFire

// there is no fire
function NoFire(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) 
} // end of NoFire

// gets temperatures
setInterval(function getTemperatures() {
        if (ChanceFire() > 999) { // chances of a fire (currently 0.01%), which is a bit too high
            chances = Math.floor((Math.random() * 20) + 1); 
            switch(chances){
                case 1:
                    a = YesFire(80, 1200);
                    break; 
                case 2: 
                    b = YesFire(80, 1200);
                    break;
                case 3:
                    c = YesFire(80, 1200);
                    break;
                case 4:
                    d = YesFire(80, 1200);
                    break; 
                case 5: 
                    e = YesFire(80, 1200);
                    break;
                case 6:
                    f = YesFire(80, 1200);
                    break;
                case 7:
                    g = YesFire(80, 1200);
                    break;
                case 8:
                    h = YesFire(80, 1200);
                    break; 
                case 9: 
                    i = YesFire(80, 1200);
                    break;
                case 10:
                    j = YesFire(80, 1200);
                    break;
                case 11:
                    k = YesFire(80, 1200);
                    break;
                case 12: 
                    l = YesFire(80, 1200);
                    break;
                case 13:
                    m = YesFire(80, 1200);
                    break;
                case 14:
                    n = YesFire(80, 1200);
                    break;
                case 15:
                    o = YesFire(80, 1200);
                    break;
                case 16:
                    p = YesFire(80, 1200);
                    break;
                case 17:
                    q = YesFire(80, 1200);
                    break;
                case 18: 
                    r = YesFire(80, 1200);
                    break;
                case 19:
                    s = YesFire(80, 1200);
                    break;
                default: 
                    t = YesFire(80, 1200);
            } // chances
        } else {
            a = NoFire(a - 0.0005, a + 0.0005); // if there's no fire, the temperature remains relatively constant
            b = NoFire(b - 0.0005, b + 0.0005); // this seems to be the most stable (so it doesn't go super hot or super cold)
            c = NoFire(c - 0.0005, c + 0.0005);
            d = NoFire(d - 0.0005, d + 0.0005);
            e = NoFire(e - 0.0005, e + 0.0005);
            f = NoFire(f - 0.0005, f + 0.0005);
            g = NoFire(g - 0.0005, g + 0.0005);
            h = NoFire(h - 0.0005, h + 0.0005);
            i = NoFire(i - 0.0005, i + 0.0005);
            j = NoFire(j - 0.0005, j + 0.0005);
            k = NoFire(k - 0.0005, k + 0.0005);
            l = NoFire(l - 0.0005, l + 0.0005);
            m = NoFire(m - 0.0005, m + 0.0005);
            n = NoFire(n - 0.0005, n + 0.0005);
            o = NoFire(o - 0.0005, o + 0.0005);
            p = NoFire(p - 0.0005, p + 0.0005);
            q = NoFire(q - 0.0005, q + 0.0005);
            r = NoFire(r - 0.0005, r + 0.0005);
            s = NoFire(s - 0.0005, s + 0.0005);
            t = NoFire(t - 0.0005, t + 0.0005);
        } // else
    
    // show temperatures of each node
    document.getElementById("node1").innerHTML = "Node 1: <span class='cold'>" + a + "&deg;" + "C </span>";
    document.getElementById("node2").innerHTML = "Node 2: <span class='cold'>" + b + "&deg;" + "C </span>";
    document.getElementById("node3").innerHTML = "Node 3: <span class='cold'>" + c + "&deg;" + "C </span>";
    document.getElementById("node4").innerHTML = "Node 1: <span class='cold'>" + d + "&deg;" + "C </span>";
    document.getElementById("node5").innerHTML = "Node 2: <span class='cold'>" + e + "&deg;" + "C </span>";
    document.getElementById("node6").innerHTML = "Node 3: <span class='cold'>" + f + "&deg;" + "C </span>";
    document.getElementById("node7").innerHTML = "Node 4: <span class='cold'>" + g + "&deg;" + "C </span>";
    document.getElementById("node8").innerHTML = "Node 5: <span class='cold'>" + h + "&deg;" + "C </span>";
    document.getElementById("node9").innerHTML = "Node 1: <span class='cold'>" + i + "&deg;" + "C </span>";
    document.getElementById("node10").innerHTML = "Node 2: <span class='cold'>" + j + "&deg;" + "C </span>";
    document.getElementById("node11").innerHTML = "Node 3: <span class='cold'>" + k + "&deg;" + "C </span>";
    document.getElementById("node12").innerHTML = "Node 4: <span class='cold'>" + l + "&deg;" + "C </span>";
    document.getElementById("node13").innerHTML = "Node 1: <span class='cold'>" + m + "&deg;" + "C </span>";
    document.getElementById("node14").innerHTML = "Node 2: <span class='cold'>" + n + "&deg;" + "C </span>";
    document.getElementById("node15").innerHTML = "Node 3: <span class='cold'>" + o + "&deg;" + "C </span>";
    document.getElementById("node16").innerHTML = "Node 1: <span class='cold'>" + p + "&deg;" + "C </span>";
    document.getElementById("node17").innerHTML = "Node 2: <span class='cold'>" + q + "&deg;" + "C </span>";
    document.getElementById("node18").innerHTML = "Node 3: <span class='cold'>" + r + "&deg;" + "C </span>";
    document.getElementById("node19").innerHTML = "Node 4: <span class='cold'>" + s + "&deg;" + "C </span>";
    document.getElementById("node20").innerHTML = "Node 5: <span class='cold'>" + t + "&deg;" + "C </span>";

    // check if nodes are on fire
    if (a > 80){
        document.getElementById("node1").innerHTML = "Node 1: <span class='hot'>" + a + "&deg;" + "C </span>";
        mother1 = true;
    } // if

    if (b > 80) {
        document.getElementById("node2").innerHTML = "Node 2: <span class='hot'>" + b + "&deg;" + "C </span>";
        mother1 = true;
    } // if

    if (c > 80){
        document.getElementById("node3").innerHTML = "Node 3: <span class='hot'>" + c + "&deg;" + "C </span>";
        mother1 = true;
    } // if

    if (d > 80){
        document.getElementById("node4").innerHTML = "Node 1: <span class='hot'>" + d + "&deg;" + "C </span>";
        mother2 = true;
    } // if

    if (e > 80) {
        document.getElementById("node5").innerHTML = "Node 2: <span class='hot'>" + e + "&deg;" + "C </span>";
        mother2 = true;
    } // if

    if (f > 80){
        document.getElementById("node6").innerHTML = "Node 3: <span class='hot'>" + f + "&deg;" + "C </span>";
        mother2 = true;
    } // if

    if (g > 80){
        document.getElementById("node7").innerHTML = "Node 4: <span class='hot'>" + g + "&deg;" + "C </span>";
        mother2 = true;
    } // if

    if (h > 80) {
        document.getElementById("node8").innerHTML = "Node 5: <span class='hot'>" + h + "&deg;" + "C </span>";
        mother2 = true;
    } // if

    if (i > 80) {
        document.getElementById("node9").innerHTML = "Node 1: <span class='hot'>" + i + "&deg;" + "C </span>";
        mother3 = true;
    } // if

    if (j > 80){
        document.getElementById("node10").innerHTML = "Node 2: <span class='hot'>" + j + "&deg;" + "C </span>";
        mother3 = true;
    } // if

    if (k > 80){
        document.getElementById("node11").innerHTML = "Node 3: <span class='hot'>" + k + "&deg;" + "C </span>";
        mother3 = true;
    } // if

    if (l > 80) {
        document.getElementById("node12").innerHTML = "Node 4: <span class='hot'>" + l + "&deg;" + "C </span>";
        mother3 = true;
    } // if

    if (m > 80){
        document.getElementById("node13").innerHTML = "Node 1: <span class='hot'>" + m + "&deg;" + "C </span>";
        mother4 = true;
    } // if

    if (n > 80){
        document.getElementById("node14").innerHTML = "Node 2: <span class='hot'>" + n + "&deg;" + "C </span>";
        mother4 = true;
    } // if

    if (o > 80) {
        document.getElementById("node15").innerHTML = "Node 3: <span class='hot'>" + o + "&deg;" + "C </span>";
        mother4 = true;
    } // if

    if (p > 80){
        document.getElementById("node16").innerHTML = "Node 1: <span class='hot'>" + p + "&deg;" + "C </span>";
        mother5 = true;
    } // if

    if (q > 80) {
        document.getElementById("node17").innerHTML = "Node 2: <span class='hot'>" + q + "&deg;" + "C </span>";
        mother5 = true;
    } // if

    if (r > 80){
        document.getElementById("node18").innerHTML = "Node 3: <span class='hot'>" + r + "&deg;" + "C </span>";
        mother5 = true;
    } // if

    if (s > 80){
        document.getElementById("node19").innerHTML = "Node 4: <span class='hot'>" + s + "&deg;" + "C </span>";
        mother5 = true;
    } // if

    if (t > 80) {
        document.getElementById("node20").innerHTML = "Node 5: <span class='hot'>" + t + "&deg;" + "C </span>";
        mother5 = true;
    } // if

    // if nodes are on fire
    if (mother1 == true){
        if (!alert1){
            alert("Alert! Fire-like temperatures have been detected in Region 1. Local authorities have been notified and emergency services are on their way.")
            alert1 = true;
        }
        document.getElementById("status1").style.color = "red";

        // message that changes based on which node(s) is/are on fire
        if (a > 80 && b > 80 && c > 80){ // terribly inefficient. fix it if i have time
            document.getElementById("status1").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in all three Nodes!";
        } 
        else if (a > 80 && b > 80){
            document.getElementById("status1").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Nodes 1 and 2.";
        }
        else if (a > 80 && c > 80){
            document.getElementById("status1").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Nodes 1 and 3.";
        }
        else if (b > 80 && c > 80){
            document.getElementById("status1").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Nodes 2 and 3.";
        }
        else if (a > 80){
            document.getElementById("status1").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Node 1.";
        }
        else if (b > 80){
            document.getElementById("status1").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Node 2.";
        } 
        else if (c > 80){ 
            document.getElementById("status1").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Node 3.";
        }
    } // end of this monstrous if/else
    
    if (mother2 == true){
        if (!alert2){
            alert("Alert! Fire-like temperatures have been detected in Region 2. Local authorities have been notified and emergency services are on their way.")
            alert2 = true;
        }
        document.getElementById("status2").style.color = "red";

        // message that changes based on which node(s) is/are on fire
        if (d > 80 && e > 80 && f > 80 && g > 80 && h > 80){ // terribly inefficient. fix it if i have time
            document.getElementById("status2").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in all five Nodes!";
        } 
        else if ((d > 80 && e > 80) || (d > 80 && f > 80) || (d > 80 && g > 80) || (d > 80 && h > 80) || (e > 80 && f > 80) || (e > 80 && g > 80) || (e > 80 && h > 80) || (f > 80 && g > 80) || (f > 80 && h > 80) || (g > 80 && h > 80)){
            document.getElementById("status2").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in multiple Nodes."; 
        } 
        else if (d > 80){
            document.getElementById("status2").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Node 1.";
        } 
        else if (e > 80) {
            document.getElementById("status2").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Node 2.";
        }
        else if (f > 80) {
            document.getElementById("status2").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Node 3.";
        } 
        else if (g > 80){
            document.getElementById("status2").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Node 4.";
        } 
        else if (h > 80){ 
            document.getElementById("status2").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Node 5.";
        }
    } // if

    if (mother3 == true){
        if (!alert3){
            alert("Alert! Fire-like temperatures have been detected in Region 3. Local authorities have been notified and emergency services are on their way.")
            alert3 = true;
        }
        document.getElementById("status3").style.color = "red";

        // message that changes based on which node(s) is/are on fire
        if (i > 80 && j > 80 && k > 80 && l > 80){ // terribly inefficient. fix it if i have time
            document.getElementById("status3").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in all four Nodes!";
        } 
        else if ((i > 80 && j > 80) || (i > 80 && k > 80) || (i > 80 && l > 80) || (j > 80 &&  k > 80) || (j > 80 && l > 80) || (k > 80 && l > 80)){
            document.getElementById("status3").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in multiple Nodes."; 
        } 
        else if (i > 80){
            document.getElementById("status3").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Node 1.";
        } 
        else if (j > 80) {
            document.getElementById("status3").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Node 2.";
        }
        else if (k > 80) {
            document.getElementById("status3").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Node 3.";
        } 
        else if (l > 80){ 
            document.getElementById("status3").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Node 4.";
        }
    } // if
    
      // if nodes are on fire
      if (mother4 == true){
        if (!alert4){
            alert("Alert! Fire-like temperatures have been detected in Region 4. Local authorities have been notified and emergency services are on their way.")
            alert4 = true;
        }
        document.getElementById("status4").style.color = "red";

        // message that changes based on which node(s) is/are on fire
        if (m > 80 && n > 80 && o > 80){ // terribly inefficient. fix it if i have time
            document.getElementById("status4").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in all three Nodes!";
        } 
        else if (m > 80 && n > 80){
            document.getElementById("status4").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Nodes 1 and 2.";
        }
        else if (m > 80 && o > 80){
            document.getElementById("status4").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Nodes 1 and 3.";
        }
        else if (n > 80 && o > 80){
            document.getElementById("status4").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Nodes 2 and 3.";
        }
        else if (m > 80){
            document.getElementById("status4").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Node 1.";
        }
        else if (n > 80){
            document.getElementById("status4").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Node 2.";
        } 
        else if (o > 80){ 
            document.getElementById("status4").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Node 3.";
        }
    } // if

    if (mother5 == true){
        if (!alert5){
            alert("Alert! Fire-like temperatures have been detected in Region 5. Local authorities have been notified and emergency services are on their way.")
            alert5 = true;
        }
        document.getElementById("status5").style.color = "red";

        // message that changes based on which node(s) is/are on fire
        if (p > 80 && q > 80 && r > 80 && s > 80 && t > 80){ // terribly inefficient. fix it if i have time
            document.getElementById("status5").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in all five Nodes!";
        } 
        else if ((p > 80 && q > 80) || (p > 80 && r > 80) || (p > 80 && s > 80) || (p > 80 && t > 80) || (q > 80 && r > 80) || (q > 80 && s > 80) || (q > 80 && t > 80) || (r > 80 && s > 80) || (r > 80 && t > 80) || (s > 80 && t > 80)){
            document.getElementById("status5").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in multiple Nodes."; 
        } 
        else if (p > 80){
            document.getElementById("status5").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Node 1.";
        } 
        else if (q > 80) {
            document.getElementById("status5").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Node 2.";
        }
        else if (r > 80) {
            document.getElementById("status5").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Node 3.";
        } 
        else if (s > 80){
            document.getElementById("status5").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Node 4.";
        } 
        else if (t > 80){ 
            document.getElementById("status5").innerHTML = "Alert! This region is on fire! Fire-like temperatures have been recorded in Node 5.";
        }
    } // if

}),10000; // end of getTemp
