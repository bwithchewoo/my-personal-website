const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

var husbandoArray = new Array("https://www.pockettactics.com/wp-content/uploads/2022/03/genshin-impact-ayato.jpg", "https://cdn.oneesports.gg/cdn-data/2022/01/GenshinImpact_Zhongli_drinking_tea.webp", "https://cdn.mos.cms.futurecdn.net/JCmb5Spk5iTnpqiDbMUsXN.jpg")

const button = document.getElementById("Randombutton");
button.addEventListener('click', function() {
    var randomNum = Math.floor(Math.random() * husbandoArray.length);
    document.getElementById("newHusbando").src = husbandoArray[randomNum];
});