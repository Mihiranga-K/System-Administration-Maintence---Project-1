function convert() {
    let amount = document.getElementById('amount').value;
    let rate = 300; // දැනට පවතින රුපියල් අගය මෙතැනට දාන්න
    let converted = amount * rate;
    document.getElementById('result').innerText = amount + " USD = " + converted + " LKR";
}