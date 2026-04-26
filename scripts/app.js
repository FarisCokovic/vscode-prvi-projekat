function napraviSjedista(uzorciRedova) {
    const sjedista = [];

    for (const red in uzorciRedova) {
        const statusi = uzorciRedova[red];

        for (let i = 0; i < statusi.length; i++) {
            sjedista.push({
                red: red,
                broj: i + 1,
                status: statusi[i]
            });
        }
    }

    return sjedista;
}

const podaciKina = {
    projekcije: [
        {
            film: "Noćni Lovac",
            vrijeme: "18:00",
            sala: "Sala 1",
            sjedista: napraviSjedista({
                A: ["slobodno", "slobodno", "slobodno", "slobodno", "slobodno", "zauzeto", "zauzeto", "rezervisano", "slobodno", "slobodno"],
                B: ["slobodno", "slobodno", "slobodno", "zauzeto", "slobodno", "zauzeto", "rezervisano", "rezervisano", "slobodno", "slobodno"],
                C: ["slobodno", "zauzeto", "slobodno", "zauzeto", "slobodno", "zauzeto", "slobodno", "zauzeto", "slobodno", "zauzeto"],
                D: ["slobodno", "slobodno", "rezervisano", "rezervisano", "rezervisano", "rezervisano", "zauzeto", "slobodno", "zauzeto", "slobodno"],
                E: ["zauzeto", "slobodno", "rezervisano", "rezervisano", "rezervisano", "zauzeto", "rezervisano", "slobodno", "slobodno", "zauzeto"],
                F: ["slobodno", "zauzeto", "rezervisano", "rezervisano", "rezervisano", "rezervisano", "slobodno", "zauzeto", "slobodno", "slobodno"],
                G: ["slobodno", "rezervisano", "zauzeto", "slobodno", "zauzeto", "rezervisano", "slobodno", "zauzeto", "rezervisano", "slobodno"],
                H: ["slobodno", "slobodno", "zauzeto", "slobodno", "slobodno", "zauzeto", "slobodno", "slobodno", "zauzeto", "slobodno"]
            })
        },
        {
            film: "Posljednja Misija",
            vrijeme: "19:30",
            sala: "Sala 2",
            sjedista: napraviSjedista({
                A: ["slobodno", "slobodno", "slobodno", "slobodno", "zauzeto", "zauzeto", "slobodno", "slobodno", "rezervisano", "rezervisano"],
                B: ["slobodno", "slobodno", "zauzeto", "slobodno", "zauzeto", "zauzeto", "slobodno", "rezervisano", "slobodno", "slobodno"],
                C: ["zauzeto", "slobodno", "zauzeto", "slobodno", "zauzeto", "slobodno", "zauzeto", "slobodno", "zauzeto", "slobodno"],
                D: ["slobodno", "slobodno", "rezervisano", "rezervisano", "zauzeto", "rezervisano", "rezervisano", "slobodno", "zauzeto", "slobodno"],
                E: ["slobodno", "zauzeto", "rezervisano", "rezervisano", "rezervisano", "rezervisano", "slobodno", "zauzeto", "slobodno", "slobodno"],
                F: ["zauzeto", "slobodno", "rezervisano", "rezervisano", "zauzeto", "rezervisano", "rezervisano", "slobodno", "slobodno", "zauzeto"],
                G: ["slobodno", "zauzeto", "slobodno", "rezervisano", "zauzeto", "slobodno", "rezervisano", "zauzeto", "slobodno", "rezervisano"],
                H: ["slobodno", "slobodno", "slobodno", "zauzeto", "slobodno", "slobodno", "zauzeto", "slobodno", "slobodno", "zauzeto"]
            })
        },
        {
            film: "Gradski Heroj",
            vrijeme: "20:15",
            sala: "Sala 3",
            sjedista: napraviSjedista({
                A: ["slobodno", "slobodno", "slobodno", "zauzeto", "zauzeto", "slobodno", "slobodno", "rezervisano", "rezervisano", "slobodno"],
                B: ["slobodno", "zauzeto", "slobodno", "slobodno", "zauzeto", "slobodno", "rezervisano", "slobodno", "zauzeto", "slobodno"],
                C: ["slobodno", "zauzeto", "slobodno", "zauzeto", "slobodno", "zauzeto", "slobodno", "zauzeto", "slobodno", "zauzeto"],
                D: ["slobodno", "slobodno", "rezervisano", "rezervisano", "rezervisano", "zauzeto", "rezervisano", "slobodno", "zauzeto", "slobodno"],
                E: ["zauzeto", "slobodno", "rezervisano", "rezervisano", "rezervisano", "rezervisano", "zauzeto", "slobodno", "slobodno", "zauzeto"],
                F: ["slobodno", "zauzeto", "rezervisano", "rezervisano", "slobodno", "rezervisano", "rezervisano", "zauzeto", "slobodno", "slobodno"],
                G: ["rezervisano", "slobodno", "zauzeto", "slobodno", "rezervisano", "zauzeto", "slobodno", "rezervisano", "zauzeto", "slobodno"],
                H: ["slobodno", "slobodno", "zauzeto", "slobodno", "slobodno", "zauzeto", "slobodno", "slobodno", "zauzeto", "slobodno"]
            })
        },
        {
            film: "Tišina Duše",
            vrijeme: "17:45",
            sala: "Sala 4",
            sjedista: napraviSjedista({
                A: ["slobodno", "slobodno", "slobodno", "slobodno", "rezervisano", "rezervisano", "slobodno", "slobodno", "zauzeto", "slobodno"],
                B: ["slobodno", "zauzeto", "slobodno", "slobodno", "rezervisano", "rezervisano", "slobodno", "zauzeto", "slobodno", "slobodno"],
                C: ["slobodno", "zauzeto", "slobodno", "zauzeto", "slobodno", "zauzeto", "slobodno", "zauzeto", "slobodno", "zauzeto"],
                D: ["slobodno", "slobodno", "rezervisano", "rezervisano", "rezervisano", "zauzeto", "rezervisano", "slobodno", "zauzeto", "slobodno"],
                E: ["slobodno", "zauzeto", "rezervisano", "rezervisano", "slobodno", "rezervisano", "rezervisano", "slobodno", "zauzeto", "slobodno"],
                F: ["zauzeto", "slobodno", "rezervisano", "slobodno", "rezervisano", "rezervisano", "rezervisano", "zauzeto", "slobodno", "slobodno"],
                G: ["slobodno", "rezervisano", "slobodno", "zauzeto", "rezervisano", "slobodno", "zauzeto", "rezervisano", "slobodno", "zauzeto"],
                H: ["slobodno", "slobodno", "zauzeto", "slobodno", "slobodno", "zauzeto", "slobodno", "slobodno", "zauzeto", "slobodno"]
            })
        },
        {
            film: "Ludilo u Gradu",
            vrijeme: "20:45",
            sala: "Sala 1",
            sjedista: napraviSjedista({
                A: ["slobodno", "slobodno", "zauzeto", "slobodno", "slobodno", "zauzeto", "slobodno", "rezervisano", "slobodno", "slobodno"],
                B: ["slobodno", "slobodno", "slobodno", "zauzeto", "zauzeto", "slobodno", "rezervisano", "slobodno", "slobodno", "zauzeto"],
                C: ["slobodno", "zauzeto", "slobodno", "zauzeto", "slobodno", "zauzeto", "slobodno", "zauzeto", "slobodno", "zauzeto"],
                D: ["zauzeto", "slobodno", "rezervisano", "rezervisano", "slobodno", "rezervisano", "rezervisano", "zauzeto", "slobodno", "slobodno"],
                E: ["slobodno", "zauzeto", "rezervisano", "rezervisano", "rezervisano", "zauzeto", "rezervisano", "slobodno", "slobodno", "zauzeto"],
                F: ["slobodno", "slobodno", "rezervisano", "zauzeto", "rezervisano", "rezervisano", "rezervisano", "slobodno", "zauzeto", "slobodno"],
                G: ["slobodno", "rezervisano", "zauzeto", "slobodno", "zauzeto", "rezervisano", "slobodno", "zauzeto", "rezervisano", "slobodno"],
                H: ["slobodno", "slobodno", "zauzeto", "slobodno", "slobodno", "zauzeto", "slobodno", "slobodno", "zauzeto", "slobodno"]
            })
        },
        {
            film: "Čarobna Avantura",
            vrijeme: "16:30",
            sala: "Sala 2",
            sjedista: napraviSjedista({
                A: ["slobodno", "slobodno", "slobodno", "slobodno", "slobodno", "rezervisano", "slobodno", "slobodno", "zauzeto", "slobodno"],
                B: ["slobodno", "slobodno", "slobodno", "zauzeto", "slobodno", "slobodno", "rezervisano", "slobodno", "slobodno", "slobodno"],
                C: ["slobodno", "zauzeto", "slobodno", "zauzeto", "slobodno", "zauzeto", "slobodno", "zauzeto", "slobodno", "zauzeto"],
                D: ["slobodno", "slobodno", "rezervisano", "rezervisano", "rezervisano", "slobodno", "rezervisano", "zauzeto", "slobodno", "slobodno"],
                E: ["slobodno", "zauzeto", "rezervisano", "slobodno", "rezervisano", "rezervisano", "rezervisano", "slobodno", "zauzeto", "slobodno"],
                F: ["zauzeto", "slobodno", "rezervisano", "rezervisano", "slobodno", "rezervisano", "rezervisano", "slobodno", "slobodno", "zauzeto"],
                G: ["slobodno", "rezervisano", "zauzeto", "slobodno", "zauzeto", "rezervisano", "slobodno", "zauzeto", "rezervisano", "slobodno"],
                H: ["slobodno", "slobodno", "zauzeto", "slobodno", "slobodno", "zauzeto", "slobodno", "slobodno", "zauzeto", "slobodno"]
            })
        },
        {
            film: "Tajna Srebrne Šume",
            vrijeme: "15:00",
            sala: "Sala 3",
            sjedista: napraviSjedista({
                A: ["slobodno", "slobodno", "slobodno", "slobodno", "slobodno", "slobodno", "zauzeto", "rezervisano", "slobodno", "slobodno"],
                B: ["slobodno", "slobodno", "zauzeto", "slobodno", "slobodno", "slobodno", "rezervisano", "slobodno", "zauzeto", "slobodno"],
                C: ["slobodno", "zauzeto", "slobodno", "zauzeto", "slobodno", "zauzeto", "slobodno", "zauzeto", "slobodno", "zauzeto"],
                D: ["slobodno", "slobodno", "rezervisano", "rezervisano", "rezervisano", "rezervisano", "zauzeto", "slobodno", "zauzeto", "slobodno"],
                E: ["zauzeto", "slobodno", "rezervisano", "rezervisano", "slobodno", "rezervisano", "rezervisano", "slobodno", "slobodno", "zauzeto"],
                F: ["slobodno", "zauzeto", "rezervisano", "rezervisano", "rezervisano", "slobodno", "rezervisano", "zauzeto", "slobodno", "slobodno"],
                G: ["slobodno", "rezervisano", "zauzeto", "slobodno", "rezervisano", "zauzeto", "slobodno", "zauzeto", "rezervisano", "slobodno"],
                H: ["slobodno", "slobodno", "zauzeto", "slobodno", "slobodno", "zauzeto", "slobodno", "slobodno", "zauzeto", "slobodno"]
            })
        }
    ]
};

prikaziSalu(podaciKina, trenutnaProjekcija);