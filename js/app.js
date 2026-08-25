const HEROES = [
{n:1,name:"Nowa",place:"Starting character",req:"Playable from the very beginning.",m:0,missWhy:null},
{n:2,name:"Garr",place:"Arenside",req:"Joins automatically.",m:0,missWhy:null},
{n:3,name:"Mio",place:"Arenside",req:"Joins automatically.",m:0,missWhy:null},
{n:4,name:"Lian",place:"Arenside",req:"Joins automatically.",m:0,missWhy:null},
{n:5,name:"Iugo",place:"Eltisweiss Tavern (east side of town)",req:"Talk to him.",m:0,missWhy:null},
{n:6,name:"Mellore",place:"Eltisweiss, then Redthroat Ridge",req:"Talk to her in Eltisweiss, then defeat the boss at the end of Redthroat Ridge.",m:0,missWhy:null},
{n:7,name:"Kuroto",place:"Altverden Village",req:"Talk to him, defeat 3 Wild Boars at Redthroat Ridge, then return.",m:0,missWhy:null},
{n:8,name:"Francesca",place:"Altverden Village (northwest of entrance)",req:"Talk to her.",m:0,missWhy:null},
{n:9,name:"Yusuke",place:"Fort Xialuke",req:"Pick the right dialogue choices during the story sequence.",m:0,missWhy:null},
{n:10,name:"Huang",place:"Arenside, then Hishahn",req:"Talk to him post-timeskip, catch a Wheel-Eye Bream by fishing, then return to him in Hishahn.",m:0,missWhy:null},
{n:11,name:"Sabine",place:"Eltisweiss",req:"Joins automatically after returning from Kyshiri Village.",m:0,missWhy:null},
{n:12,name:"Gigina",place:"Arenside",req:"Joins automatically after the Abandoned Mine.",m:0,missWhy:null},
{n:13,name:"Ymir",place:"Castle Ruins",req:"Joins automatically after the Eltisweiss invasion.",m:0,missWhy:null},
{n:14,name:"Sumire",place:"Castle Ruins",req:"Joins automatically after the Eltisweiss invasion.",m:0,missWhy:null},
{n:15,name:"Cassandra",place:"Castle Ruins",req:"Joins automatically after the Eltisweiss invasion.",m:0,missWhy:null},
{n:16,name:"Kogen",place:"Castle Ruins",req:"Joins automatically after the Eltisweiss invasion.",m:0,missWhy:null},
{n:17,name:"Yuthus",place:"Castle Ruins",req:"Joins automatically after the Eltisweiss invasion.",m:0,missWhy:null},
{n:18,name:"Zabi",place:"Castle Ruins",req:"Joins automatically after the Eltisweiss invasion.",m:0,missWhy:null},
{n:19,name:"Gocteau",place:"Great Hall",req:"Joins automatically.",m:0,missWhy:null},
{n:20,name:"Iris",place:"Great Hall",req:"Joins automatically.",m:0,missWhy:null},
{n:21,name:"Caine",place:"Great Hall",req:"Joins automatically.",m:0,missWhy:null},
{n:22,name:"Martha",place:"Your Town, east of the Inn",req:"Talk to her.",m:0,missWhy:null},
{n:23,name:"Wyler",place:"Bounty Hill",req:"Help rescue his sister, then pick the right dialogue choice.",m:0,missWhy:null},
{n:24,name:"Marin",place:"Bounty Hill",req:"Joins automatically with Wyler.",m:0,missWhy:null},
{n:25,name:"Kerrin",place:"Dappled Forest",req:"Bring her 20 Lumber.",m:0,missWhy:null},
{n:26,name:"Gieran",place:"The Greatwood-East",req:"Find the Rune of Conservation, dropped by the Ancient Seed boss, then return to him.",m:0,missWhy:null},
{n:27,name:"Kallathor",place:"Proving Grounds",req:"Joins automatically after clearing the dungeon.",m:0,missWhy:null},
{n:28,name:"Chron",place:"Your Town, southern exit",req:"Talk to him.",m:0,missWhy:null},
{n:29,name:"Squash",place:"Treefolk Village Trading Post",req:"Bring a Sparklestone, dropped by Phantombirds.",m:0,missWhy:null},
{n:30,name:"Mariette",place:"Twinhorne East, then The Greatwood",req:"Recover her lost charm from a Rabbit Archwitch encounter.",m:0,missWhy:null},
{n:31,name:"Pastole",place:"Twinhorne East, by the Tool Shop",req:"Talk to him.",m:0,missWhy:null},
{n:32,name:"Lam",place:"Daphan Village",req:"Bring Riufan into your party, then talk to her.",m:0,missWhy:null},
{n:33,name:"Hakugin",place:"Daphan Village, east side",req:"Talk to her with Mio in the party.",m:0,missWhy:null},
{n:34,name:"Code L",place:"Daphan Village Rune Shop",req:"Bring the Rune of Currents, dropped in Hishahn Old Town.",m:0,missWhy:null},
{n:35,name:"Riufan",place:"Hishahn pier",req:"Defeat him in a 1-vs-1 duel.",m:0,missWhy:null},
{n:36,name:"Nell",place:"Northwest of Hishahn",req:"Talk to the bag-carrying NPC.",m:0,missWhy:null},
{n:37,name:"Perrielle Grum",place:"Hishahn Inn",req:"Joins automatically.",m:0,missWhy:null},
{n:38,name:"Janquis",place:"Hishahn Inn",req:"Joins automatically.",m:0,missWhy:null},
{n:39,name:"Carrie",place:"Hishahn, near the bridges",req:"Track her down across three separate encounters.",m:0,missWhy:null},
{n:40,name:"Kurtz",place:"Hishahn",req:"Bring the Grilled Tutuva Recipe, obtained in Treefolk Village.",m:0,missWhy:null},
{n:41,name:"Glen",place:"Arenside",req:"Beat him in a Card Game match.",m:0,missWhy:null},
{n:42,name:"Shixeen",place:"Your Town",req:"Collect roughly 120 unique cards, then beat her in a Card Game match.",m:0,missWhy:null},
{n:43,name:"Dr. Corque",place:"Eltisweiss",req:"Win beigoma matches against Taq, Fender, and Celera in their villages, then return.",m:0,missWhy:null},
{n:44,name:"Reid",place:"Your Town",req:"After Dr. Corque joins, win a chain of beigoma duels ending with Crash in Ardinale Lowtown.",m:0,missWhy:null},
{n:45,name:"Falward",place:"Altverden Village",req:"Bring him 15 Healing Herbs.",m:0,missWhy:null},
{n:46,name:"Yume",place:"Redthroat Ridge, near the entrance",req:"Accept the quest from her mother in Werne Village, then find her.",m:0,missWhy:null},
{n:47,name:"Frieda",place:"Werne Village",req:"Talk to her.",m:0,missWhy:null},
{n:48,name:"Pieter",place:"Werne Village, northwest",req:"Talk to him and pick the matching dialogue choice.",m:0,missWhy:null},
{n:49,name:"Maureus",place:"Mountain Path, northwest corner",req:"Bring an ally with at least 300 MP.",m:0,missWhy:null},
{n:50,name:"Galdorf",place:"Abandoned Mine",req:"Bring him a Palenight Mail.",m:0,missWhy:null},
{n:51,name:"Hiro",place:"Abandoned Mine",req:"Talk to him.",m:0,missWhy:null},
{n:52,name:"Ormond",place:"Abandoned Mine",req:"Bring him 3 Iron Ore.",m:0,missWhy:null},
{n:53,name:"Melridge",place:"Great Hall, Your Town",req:"Joins automatically after the Euchrisse story events.",m:0,missWhy:null},
{n:54,name:"Barnard Sawad",place:"Great Hall, Your Town",req:"Joins automatically after the Euchrisse story events.",m:0,missWhy:null},
{n:55,name:"Seign Kesling",place:"Great Hall, Your Town",req:"Joins automatically after the Euchrisse story events.",m:0,missWhy:null},
{n:56,name:"Pohl",place:"Great Hall, Your Town",req:"Joins automatically after the Euchrisse story events.",m:0,missWhy:null},
{n:57,name:"Valentin",place:"Great Hall, Your Town",req:"Joins automatically after the Euchrisse story events.",m:0,missWhy:null},
{n:58,name:"Hildi",place:"Great Hall, Your Town",req:"Joins automatically after the Euchrisse story events.",m:0,missWhy:null},
{n:59,name:"Faye",place:"Your Town",req:"Complete a short fetch chain involving B'baba, Yusuke, Francesca, and Yume.",m:0,missWhy:null},
{n:60,name:"B'baba",place:"Daphan Village, northwest house",req:"Talk to her.",m:0,missWhy:null},
{n:61,name:"Enoe",place:"Daphan Village, west of entrance",req:"Talk to him once the Mission Guild node is unlocked.",m:0,missWhy:null},
{n:62,name:"Fume",place:"Dappled Forest",req:"Joins automatically once Enoe has joined and the Mission Guild is unlocked.",m:0,missWhy:null},
{n:63,name:"Larla",place:"Eltisweiss Inn",req:"Score an Epic Success on a Guild mission dispatch, then return to her.",m:0,missWhy:null},
{n:64,name:"Douglas",place:"Eltisweiss Smithy",req:"Bring him 10 Iron Ore.",m:0,missWhy:null},
{n:65,name:"Milana",place:"Your Town Rune Shop",req:"Talk to her once Runeshard sales are unlocked.",m:0,missWhy:null},
{n:66,name:"Paquia",place:"Near Arenside",req:"Bring her 5 Regular Eggs, dropped by Eggfoots.",m:0,missWhy:null},
{n:67,name:"Mandie",place:"Arenside",req:"Joins automatically right after Paquia.",m:0,missWhy:null},
{n:68,name:"Aire",place:"Hishahn, southwest exit",req:"Beat her in a footrace around town.",m:0,missWhy:null},
{n:69,name:"Leon",place:"Your Town, west exit",req:"Joins automatically.",m:0,missWhy:null},
{n:70,name:"Isha",place:"Eltisweiss",req:"Find her lost cat and a Cockatrice Egg, then make a delivery to the Arenside General Store.",m:0,missWhy:null},
{n:71,name:"Celia",place:"Your Town Inn",req:"Win 15 Cooking Contests through Kurtz's storyline.",m:0,missWhy:null},
{n:72,name:"Reyna",place:"Dabavin harbor",req:"Defeat her in a timed battle, dealing heavy damage before the 3rd turn ends.",m:0,missWhy:null},
{n:73,name:"Rody",place:"Dabavin General Store",req:"Find and appraise the Pearl Pocket-Watch, then bring it to him.",m:0,missWhy:null},
{n:74,name:"Prunella",place:"Dabavin Inn",req:"Hand over 100,000 baqua.",m:0,missWhy:null},
{n:75,name:"Quinn",place:"Impershi'arc, then The Den of the Dunes",req:"Follow her through several encounters, then defeat the Oyamatsumi boss.",m:0,missWhy:null},
{n:76,name:"Stadler",place:"Impershi'arc",req:"Beat him in a War match.",m:0,missWhy:null},
{n:77,name:"Cabana",place:"Right of the Impershi'arc Inn",req:"Talk to her.",m:0,missWhy:null},
{n:78,name:"Skyd",place:"Impershi'arc",req:"Joins automatically after the Impershi'arc Race.",m:0,missWhy:null},
{n:79,name:"Yuferius",place:"Impershi'arc",req:"Joins automatically after the Impershi'arc Race.",m:0,missWhy:null},
{n:80,name:"Scarlet",place:"Impershi'arc Harbor",req:"Beat her in an Impershi'arc Race rematch.",m:0,missWhy:null},
{n:81,name:"Syd",place:"Hishahn Smithy (Town Lv.3)",req:"Bring 1 Iron Ore, 1 Mystic Lumber, and 1 Dire Beastbone.",m:0,missWhy:null},
{n:82,name:"Jorhan Gavulet",place:"Hishahn Trading Post",req:"With Perrielle in the party, track down a rare antique, appraise it into the Yellow Rose Censer, and deliver it.",m:0,missWhy:null},
{n:83,name:"Clarke",place:"Ardinale City",req:"Buy the Star-Crossed Lovers Script and bring it to him.",m:0,missWhy:null},
{n:84,name:"Yaelu",place:"Rune Tank diversion, Seign's route",req:"Joins automatically.",m:0,missWhy:null},
{n:85,name:"Ivy",place:"Rune Tank diversion, Seign's route",req:"Joins automatically.",m:0,missWhy:null},
{n:86,name:"Mihlu",place:"Your Town",req:"Joins automatically when Seign's party returns.",m:0,missWhy:null},
{n:87,name:"Chandra",place:"Eldroad",req:"Bring Code L along, then defeat Chandra in battle.",m:0,missWhy:null},
{n:88,name:"Dalton",place:"Twinhorne East",req:"Talk to him with Sabine in the party and the Mission Guild upgraded.",m:0,missWhy:null},
{n:89,name:"Marisa",place:"Gathering Hall",req:"Joins automatically.",m:0,missWhy:null},
{n:90,name:"Garoo",place:"Gathering Hall",req:"Joins automatically.",m:0,missWhy:null},
{n:91,name:"Aleior",place:"Abandoned Mine, by the bridge shortcut",req:"Bring Marisa to the spot before the Castle Harganthia events — window closes after.",m:1,missWhy:"If you don't bring Marisa here before advancing to the Castle Harganthia story events, he can no longer be recruited."},
{n:92,name:"CJ",place:"Runebarrows, near Arenside",req:"Clear the dungeon with Garoo and Isha in the party, fleeing the first Prometheus fight.",m:0,missWhy:null},
{n:93,name:"Durlan",place:"Abandoned Mine Depths, west side",req:"Talk to him once the quarry is upgraded.",m:0,missWhy:null},
{n:94,name:"Goldsmid",place:"Yarnaan 2F",req:"Bring an ally strong enough to impress him (roughly 300+ Power).",m:0,missWhy:null},
{n:95,name:"Alwe Arkathies Fawud",place:"Yarnaan",req:"Joins automatically when meeting the Grandwarden.",m:0,missWhy:null},
{n:96,name:"Nil",place:"Yarnaan",req:"Joins automatically when meeting the Grandwarden.",m:0,missWhy:null},
{n:97,name:"Hogan",place:"Twinhorne West pier",req:"Earn 50,000 baqua profit through the Trading Post.",m:0,missWhy:null},
{n:98,name:"Rohan",place:"Twinhorne West Inn (Town Lv.3)",req:"Talk to him.",m:0,missWhy:null},
{n:99,name:"Selbineth",place:"Hero's Proving Ground, Castle Underground",req:"Unlock the Mysterious Room, then attempt Floor 1 (win or lose).",m:0,missWhy:null},
{n:100,name:"Rudy",place:"Ice Cave",req:"Joins automatically after the dungeon.",m:0,missWhy:null},
{n:101,name:"Lilwn Rowad Fawud",place:"Yarnaan",req:"Joins automatically while defending it on a return visit.",m:0,missWhy:null},
{n:102,name:"Galladur",place:"Proving Grounds, near a door",req:"Talk to him right after the Yarnaan invasion — don't delay, the window can close.",m:1,missWhy:"He only appears for a limited window right after the Yarnaan invasion; leaving the area without talking to him can lock him out for good."},
{n:103,name:"Euma Siarith",place:"Athrabalt Castle",req:"Joins automatically on your return after the Yarnaan invasion.",m:0,missWhy:null},
{n:104,name:"Kassius",place:"Athrabalt Castle",req:"Joins automatically on your return after the Yarnaan invasion.",m:0,missWhy:null},
{n:105,name:"Aoi",place:"Twinhorne East",req:"Defeat her in a 1-vs-1 duel with Iugo.",m:0,missWhy:null},
{n:106,name:"Foxiel",place:"East side of Athrabalt",req:"Bring her Vegetable Milk Soup, obtained from Kurtz.",m:0,missWhy:null},
{n:107,name:"Momo",place:"Seaside Cavern",req:"Defeat the Kraken boss at the back of the cave.",m:0,missWhy:null},
{n:108,name:"Wayve",place:"Snowpeak Pass",req:"Joins automatically starting Marisa's route.",m:0,missWhy:null},
{n:109,name:"Yulin",place:"Twinhorne West",req:"Joins automatically after the boss fight during the Empire invasion.",m:0,missWhy:null},
{n:110,name:"Allaby",place:"Your Town Inn",req:"Talk to her once the castle event scenes are finished.",m:0,missWhy:null},
{n:111,name:"El Alicanto",place:"Snowpeak Pass",req:"Defeat him in a 1-vs-1 duel with Nowa.",m:0,missWhy:null},
{n:112,name:"Dijkstra",place:"The Chelonian Goliath, Vilashnu, near Twinhorne East",req:"Defeat the boss.",m:0,missWhy:null},
{n:113,name:"Markus",place:"Castle Harganthia",req:"Joins automatically departing with Marisa's party.",m:0,missWhy:null},
{n:114,name:"Lakian Arkathies Fawud",place:"Great Hall",req:"Joins automatically after the Castle Harganthia boss.",m:0,missWhy:null},
{n:115,name:"Goldwyn",place:"Imperial Army Headquarters",req:"Joins automatically after the boss.",m:0,missWhy:null},
{n:116,name:"Elektra",place:"Imperial Army Headquarters",req:"Joins automatically after the boss.",m:0,missWhy:null},
{n:117,name:"Maxim",place:"Imperial Army Headquarters",req:"Joins automatically after the boss.",m:0,missWhy:null},
{n:118,name:"Vorridice",place:"Imperial Army Headquarters",req:"Joins automatically after the boss.",m:0,missWhy:null},
{n:119,name:"Viesskin",place:"Imperial Army Headquarters",req:"Joins automatically after the boss.",m:0,missWhy:null},
{n:120,name:"Leene",place:"Your Town",req:"Joins automatically once all other 119 heroes are recruited.",m:0,missWhy:null}
];

const STORAGE_KEY = "eiyuden_recruited_v1";
let recruited = {};
try{ recruited = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); }catch(e){ recruited = {}; }

let filter = "all";
let query = "";

const listEl = document.getElementById("list");
const fillEl = document.getElementById("fill");
const countEl = document.getElementById("count");

function save(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recruited));
}

function toggle(n){
  recruited[n] = !recruited[n];
  save();
  render();
}

function render(){
  const q = query.trim().toLowerCase();
  const gotCount = HEROES.filter(h => recruited[h.n]).length;
  countEl.textContent = gotCount + " / 120";
  fillEl.style.width = (gotCount/120*100) + "%";

  let items = HEROES.filter(h => {
    if(q && !h.name.toLowerCase().includes(q)) return false;
    if(filter === "got") return !!recruited[h.n];
    if(filter === "missing") return !recruited[h.n];
    if(filter === "missable") return h.m === 1;
    return true;
  });

  if(items.length === 0){
    listEl.innerHTML = `<div class="table-wrap"><div class="empty">No heroes match that search.</div></div>`;
    return;
  }

  const rows = items.map(h => `
    <tr class="${recruited[h.n] ? 'got' : ''}" data-n="${h.n}">
      <td class="chk"><div class="checkbox">${recruited[h.n] ? '✓' : ''}</div></td>
      <td class="num">${h.n}</td>
      <td class="hero-name">
        <div class="name-row">
          <span class="name">${h.name}</span>
          ${h.m ? '<span class="badge">Missable</span>' : ''}
        </div>
      </td>
      <td class="place">${h.place}</td>
      <td class="req">${h.req}</td>
      <td class="miss">${h.m ? '<span class="miss-yes">Yes</span>' + h.missWhy : '<span class="miss-no">—</span>'}</td>
    </tr>
  `).join("");

  listEl.innerHTML = `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th class="center"></th>
            <th class="center">#</th>
            <th>Hero</th>
            <th>Place</th>
            <th>Requirement</th>
            <th>Missable</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;

  listEl.querySelectorAll("tbody tr").forEach(row => {
    row.addEventListener("click", () => toggle(parseInt(row.dataset.n)));
  });
}

document.getElementById("search").addEventListener("input", e => {
  query = e.target.value;
  render();
});

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    filter = chip.dataset.filter;
    render();
  });
});

document.getElementById("reset").addEventListener("click", () => {
  if(confirm("Reset all recruitment progress?")){
    recruited = {};
    save();
    render();
  }
});

render();
