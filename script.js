document.addEventListener("DOMContentLoaded", function () {
    const numberList = document.getElementById("numberList");

    for (let i = 1; i <= 100; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `${i} - ${translateToCzech(i)} (${translateToVietnamese(i)})`;
        numberList.appendChild(listItem);
    }
});

function translateToCzech(number) {
    const czechNumbers = [
        "jeden", "dva", "tři", "čtyři", "pět", "šest", "sedm", "osm", "devět", "deset",
        "jedenáct", "dvanáct", "třináct", "čtrnáct", "patnáct", "šestnáct", "sedmnáct", "osmnáct", "devatenáct",
        "dvacet", "dvacet jedna", "dvacet dva", "dvacet tři", "dvacet čtyři", "dvacet pět", "dvacet šest",
        "dvacet sedm", "dvacet osm", "dvacet devět", "třicet", "třicet jedna", "třicet dva", "třicet tři",
        "třicet čtyři", "třicet pět", "třicet šest", "třicet sedm", "třicet osm", "třicet devět",
        "čtyřicet", "čtyřicet jedna", "čtyřicet dva", "čtyřicet tři", "čtyřicet čtyři", "čtyřicet pět",
        "čtyřicet šest", "čtyřicet sedm", "čtyřicet osm", "čtyřicet devět", "padesát", "padesát jedna",
        "padesát dva", "padesát tři", "padesát čtyři", "padesát pět", "padesát šest", "padesát sedm",
        "padesát osm", "padesát devět", "šedesát", "šedesát jedna", "šedesát dva", "šedesát tři", "šedesát čtyři",
        "šedesát pět", "šedesát šest", "šedesát sedm", "šedesát osm", "šedesát devět", "sedmdesát", "sedmdesát jedna",
        "sedmdesát dva", "sedmdesát tři", "sedmdesát čtyři", "sedmdesát pět", "sedmdesát šest", "sedmdesát sedm",
        "sedmdesát osm", "sedmdesát devět", "osmdesát", "osmdesát jedna", "osmdesát dva", "osmdesát tři",
        "osmdesát čtyři", "osmdesát pět", "osmdesát šest", "osmdesát sedm", "osmdesát osm", "osmdesát devět", "devadesát",
        "devadesát jedna", "devadesát dva", "devadesát tři", "devadesát čtyři", "devadesát pět", "devadesát šest",
        "devadesát sedm", "devadesát osm", "devadesát devět", "sto"
    ];

    if (number >= 1 && number <= 100) {
        return czechNumbers[number - 1];
    } else {
        return "N/A";
    }
}

function translateToVietnamese(number) {
    const vietnameseNumbers = [
        "jeden", "dva", "tři {r nặng}", " {ch nặng} čtyři", "piet", "šest {s nặng}", "sedum", "osum", "devět ě{iet}", "deset",
        "jede-náct", "dva-náct", "tři-náct", "čtr-náct", "pat-náct", "šest-náct", "sedum-náct", "osum-náct", "devate-náct",
        "dva-cet", "dvacet jedna", "dvacet dva", "dvacet tři", "dvacet čtyři", "dvacet piet", "dvacet šest",
        "dva-cet sedum", "dva-cet osum", "dva-cet devět", "tři-cet", "tři-cet jedna", "tři-cet dva", "tři-cet tři",
        "tři-cet čtyři", "tři-cet piet", "tři-cet šest", "tři-cet sedum", "tři-cet osum", "tři-cet devět",
        "čtyři-cet", "čtyři-cet jedna", "čtyři-cet dva", "čtyři-cet tři", "čtyři-cet čtyři", "čtyři-cet piet",
        "čtyři-cet šest", "čtyři-cet sedum", "čtyři-cet osum", "čtyři-cet devět", "pade-sát", "pade-sát jedna",
        "pade-sát dva", "pade-sát tři", "pade-sát čtyři", "pade-sát piet", "pade-sát šest", "pade-sát sedum",
        "pade-sát osum", "pade-sát devět", "šede-sát", "šede-sát jedna", "šede-sát dva", "šede-sát tři", "šede-sát čtyři",
        "šede-sát piet", "šede-sát šest", "šede-sát sedum", "šede-sát osum", "šede-sát devět", "sedumde-sát", "sedumde-sát jedna",
        "sedumde-sát dva", "sedumde-sát tři", "sedumde-sát čtyři", "sedumde-sát piet", "sedumde-sát šest", "sedumde-sát sedm",
        "sedumde-sát osm", "sedumde-sát devět", "osumde-sát", "osumde-sát jedna", "osumde-sát dva", "osumde-sát tři",
        "osumde-sát čtyři", "osumde-sát piet", "osumde-sát šest", "osumde-sát sedum", "osumde-sát osum", "osumde-sát devět", "devade-sát",
        "devade-sát jedna", "devade-sát dva", "devade-sát tři", "devade-sát čtyři", "devade-sát piet", "devade-sát šest",
        "devade-sát sedum", "devade-sát osum", "devade-sát devět", "sto"  
    ];

    if (number >= 1 && number <= 100) {
        return vietnameseNumbers[number - 1];
    } else {
        return "N/A";
    }
}
