let trenutnaProjekcija = 0;

function provjeriPodatke(podaci) {
    if (!podaci.projekcije || podaci.projekcije.length === 0) {
        return false;
    }

    const dozvoljeniStatusi = ["slobodno", "zauzeto", "rezervisano"];

    for (let i = 0; i < podaci.projekcije.length; i++) {
        const projekcija = podaci.projekcije[i];

        if (!projekcija.film || !projekcija.vrijeme || !projekcija.sala || !projekcija.sjedista) {
            return false;
        }

        for (let j = 0; j < projekcija.sjedista.length; j++) {
            const sjediste = projekcija.sjedista[j];

            if (!dozvoljeniStatusi.includes(sjediste.status)) {
                return false;
            }
        }
    }

    return true;
}

function statusKlasa(status) {
    if (status === "slobodno") {
        return "free";
    }

    if (status === "zauzeto") {
        return "occupied";
    }

    if (status === "rezervisano") {
        return "reserved";
    }

    return "";
}

function prikaziSalu(podaci, indeksProjekcije) {
    const salaDiv = document.getElementById("sala");

    if (!salaDiv) {
        return;
    }

    salaDiv.innerHTML = "";

    if (!provjeriPodatke(podaci)) {
        salaDiv.innerHTML = "<p class='error-message'>Podaci nisu validni!</p>";
        return;
    }

    const projekcija = podaci.projekcije[indeksProjekcije];

    const infoSection = document.createElement("div");
    infoSection.className = "cinema-info dynamic-info";

    const naslov = document.createElement("h2");
    naslov.textContent = "INFORMACIJE O PROJEKCIJI";

    const infoGrid = document.createElement("div");
    infoGrid.className = "info-grid";

    const filmBox = document.createElement("div");
    filmBox.className = "info-box";

    const filmLabel = document.createElement("span");
    filmLabel.className = "info-label";
    filmLabel.textContent = "Naziv filma";

    const filmSelect = document.createElement("select");
    filmSelect.className = "film-select";

    podaci.projekcije.forEach(function (projekcija, index) {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = projekcija.film;

        if (index === indeksProjekcije) {
            option.selected = true;
        }

        filmSelect.appendChild(option);
    });

    filmSelect.addEventListener("change", function () {
        trenutnaProjekcija = Number(this.value);
        prikaziSalu(podaci, trenutnaProjekcija);
    });

    filmBox.appendChild(filmLabel);
    filmBox.appendChild(filmSelect);

    const vrijemeBox = document.createElement("div");
    vrijemeBox.className = "info-box";

    const vrijemeLabel = document.createElement("span");
    vrijemeLabel.className = "info-label";
    vrijemeLabel.textContent = "Vrijeme projekcije";

    const vrijemeText = document.createElement("p");
    vrijemeText.textContent = projekcija.vrijeme;

    vrijemeBox.appendChild(vrijemeLabel);
    vrijemeBox.appendChild(vrijemeText);

    const salaBox = document.createElement("div");
    salaBox.className = "info-box";

    const salaLabel = document.createElement("span");
    salaLabel.className = "info-label";
    salaLabel.textContent = "Broj sale";

    const salaText = document.createElement("p");
    salaText.textContent = projekcija.sala;

    salaBox.appendChild(salaLabel);
    salaBox.appendChild(salaText);

    infoGrid.appendChild(filmBox);
    infoGrid.appendChild(vrijemeBox);
    infoGrid.appendChild(salaBox);

    infoSection.appendChild(naslov);
    infoSection.appendChild(infoGrid);

    const screen = document.createElement("div");
    screen.className = "screen";
    screen.textContent = "PLATNO";

    const hallLayout = document.createElement("div");
    hallLayout.className = "hall-layout";

    const redovi = ["A", "B", "C", "D", "E", "F", "G", "H"];

    redovi.forEach(function (red) {
        const seatRow = document.createElement("div");
        seatRow.className = "seat-row";

        const rowLabel = document.createElement("div");
        rowLabel.className = "row-label";
        rowLabel.textContent = red;

        const seatsDiv = document.createElement("div");
        seatsDiv.className = "seats";

        const sjedistaURedu = projekcija.sjedista.filter(function (sjediste) {
            return sjediste.red === red;
        });

        sjedistaURedu.forEach(function (sjediste) {
            const seat = document.createElement("span");
            seat.className = "seat " + statusKlasa(sjediste.status);
            seat.title = red + sjediste.broj + " - " + sjediste.status;

            seat.addEventListener("click", function () {
                if (sjediste.status === "slobodno") {
                    sjediste.status = "rezervisano";
                    prikaziSalu(podaci, trenutnaProjekcija);
                }
            });

            seatsDiv.appendChild(seat);
        });

        seatRow.appendChild(rowLabel);
        seatRow.appendChild(seatsDiv);
        hallLayout.appendChild(seatRow);
    });

    const legend = document.createElement("div");
    legend.className = "legend";

    legend.innerHTML = `
        <div class="legend-item">
            <span class="legend-color free"></span>
            <span>Slobodno</span>
        </div>

        <div class="legend-item">
            <span class="legend-color occupied"></span>
            <span>Zauzeto</span>
        </div>

        <div class="legend-item">
            <span class="legend-color reserved"></span>
            <span>Rezervisano</span>
        </div>
    `;

    const navigation = document.createElement("div");
    navigation.className = "projection-buttons";

    const previousButton = document.createElement("button");
    previousButton.textContent = "Prethodna projekcija";

    const nextButton = document.createElement("button");
    nextButton.textContent = "Sljedeća projekcija";

    previousButton.addEventListener("click", function () {
        if (trenutnaProjekcija > 0) {
            trenutnaProjekcija--;
            prikaziSalu(podaci, trenutnaProjekcija);
        }
    });

    nextButton.addEventListener("click", function () {
        if (trenutnaProjekcija < podaci.projekcije.length - 1) {
            trenutnaProjekcija++;
            prikaziSalu(podaci, trenutnaProjekcija);
        }
    });

    navigation.appendChild(previousButton);
    navigation.appendChild(nextButton);

    salaDiv.appendChild(infoSection);
    salaDiv.appendChild(screen);
    salaDiv.appendChild(hallLayout);
    salaDiv.appendChild(legend);
    salaDiv.appendChild(navigation);
}