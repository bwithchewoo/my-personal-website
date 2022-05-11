
var husbandoArray = new Array("https://www.pockettactics.com/wp-content/uploads/2022/03/genshin-impact-ayato.jpg", "https://cdn.oneesports.gg/cdn-data/2022/01/GenshinImpact_Zhongli_drinking_tea.webp", "https://cdn.mos.cms.futurecdn.net/JCmb5Spk5iTnpqiDbMUsXN.jpg")

const button = document.getElementById("Randombutton");
button.addEventListener('click', function() {
    var randomNum = Math.floor(Math.random() * husbandoArray.length);
    document.getElementById("newHusbando").src = husbandoArray[randomNum];
});

let buttoncounttext = document.getElementById("Counter");

let count = 0;
button.onclick = function() {
  count += 1;
  buttoncounttext.innerHTML = "You pressed the heart " + count + " times.";
};

