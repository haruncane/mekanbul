const anaSayfa = function (req, res) {
    res.render('anasayfa',
    {
        "baslik":"Anasayfa",
        "sayfaBaslik":{
            "siteAd":"Mekanbul",
            "slogan":"Civardaki Mekanları Keşfet!"
        },
        "mekanlar":[
            {
                "ad":"Starbucks",
                "puan":"4",
                "adres":"Centrum Garden AVM",
                "imkanlar":["Kahve","Çay","Kek"],
                "mesafe":"5km"
            },
            {
                "ad":"Mackbear",
                "puan":"4",
                "adres":"İyaşpark AVM Arkası",
                "imkanlar":["Kahve","Çay","Pasta"],
                "mesafe":"3km"
            },
            {
                "ad":"Sir Winston Ramada",
                "puan":"5",
                "adres":"Ramada Otel Altı",
                "imkanlar":["Kahve","Tost","Kokteyl"],
                "mesafe":"1km"
            }
        ]
    }
    );
}

const mekanBilgisi = function (req, res) {
    res.render('mekanbilgisi',
    {
        "baslik":"Mekan Bilgisi",
        "mekanBaslik":"Starbucks",
        "mekanDetay":{
            "ad":"Starbucks",
            "puan":"4",
            "adres":"Centrum Garden AVM",
            "saatler":[
                {
                    "gunler":"Pazartesi-Cuma",
                    "acilis":"9:00",
                    "kapanis":"23:00",
                    "kapali": false
                },
                {
                    "gunler":"Cumartesi-Pazar",
                    "acilis":"10:00",
                    "kapanis":"22:00",
                    "kapali": false
                }
            ],
            "imkanlar":["Kahve","Çay","Kek"],
            "koordinatlar":
            {
                "enlem":"37.78142",
                "boylam":"30.56515"
            },
            "yorumlar":[
                {
                    "yorumYapan":"Ahmet Karslı",
                    "yorumMetni":"Masalar pis",
                    "tarih":"20 Ekim 2022",
                    "puan":"2"
                },
                {
                    "yorumYapan":"Alper Kaplan",
                    "yorumMetni":"Sakin bir yer",
                    "tarih":"20 Ekim 2022",
                    "puan":"5"
                }
            ]
        }
    }
    );
}

const yorumEkle = function (req, res) {
    res.render('yorumekle',
    { title:'Yorum Sayfası'});
}

module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle   
};
