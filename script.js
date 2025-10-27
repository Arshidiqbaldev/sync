
const randomSeed = Math.random().toString(36).substring(2, 8);
  document.getElementById("avatar").src =
    "https://api.dicebear.com/7.x/notionists/svg?seed=1" + randomSeed + "&size=128"