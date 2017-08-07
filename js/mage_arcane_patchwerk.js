Highcharts.chart('mage_arcane_patchwerk', 
{
    chart: {
        type: "bar"
    },
    legend: {
        align: "right",
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: "#CCC",
        borderWidth: 1,
        floating: false,
        reversed: true,
        shadow: false,
        verticalAlign: "bottom",
        x: 0,
        y: 0
    },
    plotOptions: {
        bar: {
            dataLabels: {
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            stacking: "normal"
        },
        series: {
            borderColor: "#151515",
            events: {
                legendItemClick: function() { return false; }
            }
        }
    },
    series: [
        {
            color: "#ffeb3b",
            data: [
                0,
                129095,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                12734,
                0,
                7021,
                6541,
                8153,
                5972,
                6616,
                7631,
                7499,
                5357,
                6574,
                6168,
                5163,
                4301,
                6511,
                6560,
                4169,
                6263,
                5113,
                5977,
                7925,
                4687,
                5119,
                6151,
                7732,
                5173,
                6202,
                5469,
                3829,
                6445,
                5104,
                5314,
                0,
                4862,
                4713,
                1711,
                0,
                4515,
                3405,
                3543,
                4335,
                3440,
                3156,
                538,
                2259
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                11645,
                0,
                7591,
                7451,
                8526,
                3126,
                5910,
                5774,
                4640,
                6764,
                4772,
                6509,
                7125,
                6216,
                7723,
                6425,
                4749,
                6075,
                4762,
                4441,
                6795,
                5152,
                3633,
                5496,
                6254,
                5268,
                5479,
                4311,
                5315,
                3737,
                5845,
                4895,
                0,
                3468,
                3415,
                4822,
                0,
                3561,
                4026,
                2762,
                2279,
                2830,
                2178,
                1888,
                209
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                10621,
                0,
                6879,
                5143,
                6173,
                2367,
                5524,
                4290,
                5434,
                5090,
                7132,
                5725,
                5023,
                6539,
                6297,
                3895,
                7098,
                4769,
                6076,
                5706,
                6079,
                5276,
                5942,
                3589,
                5170,
                3045,
                5192,
                4562,
                4756,
                4087,
                5045,
                4396,
                0,
                4283,
                4025,
                3751,
                0,
                2860,
                2411,
                2363,
                2249,
                4267,
                1782,
                1180,
                190
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                8293,
                0,
                7360,
                6950,
                6685,
                2852,
                5228,
                5391,
                6309,
                4924,
                5433,
                3783,
                3844,
                4226,
                4876,
                6832,
                4743,
                4669,
                4334,
                4251,
                5478,
                3286,
                3214,
                5723,
                3745,
                6247,
                5879,
                4163,
                3196,
                3830,
                6168,
                3130,
                0,
                4277,
                3423,
                3870,
                0,
                4132,
                1969,
                3223,
                3935,
                1725,
                2455,
                824,
                1367
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                10340,
                0,
                5840,
                5132,
                70583,
                5227,
                5619,
                4973,
                4245,
                5392,
                3371,
                5990,
                7414,
                4636,
                6954,
                3946,
                4674,
                4241,
                5522,
                3533,
                3902,
                4200,
                5478,
                1597,
                5426,
                3633,
                5208,
                3753,
                4261,
                3609,
                4163,
                4643,
                5893,
                3103,
                3413,
                1623,
                4431,
                1235,
                2665,
                2104,
                1735,
                2489,
                2115,
                2851,
                1764
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                103805,
                0,
                72019,
                73867,
                0,
                1761,
                3003,
                4499,
                4232,
                4584,
                5577,
                2807,
                2598,
                3992,
                3822,
                3573,
                4420,
                4453,
                5068,
                55947,
                3883,
                4253,
                3799,
                5222,
                4353,
                3314,
                4514,
                2447,
                2815,
                4488,
                4036,
                2794,
                3276,
                2163,
                3143,
                4266,
                2614,
                3319,
                2122,
                2181,
                2553,
                2987,
                2258,
                1016,
                259
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                0,
                0,
                0,
                77990,
                63167,
                62223,
                58617,
                57798,
                55949,
                57716,
                56588,
                55660,
                48862,
                52608,
                53594,
                52213,
                51114,
                0,
                45534,
                51404,
                49409,
                48656,
                43477,
                48111,
                42184,
                49159,
                49547,
                46975,
                41363,
                44454,
                59091,
                45342,
                42717,
                41798,
                54724,
                39432,
                36860,
                35981,
                34953,
                34085,
                30135,
                32375,
                22215
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-08-07 03:49:39"
    },
    title: {
        text: "Mage - Arcane - Patchwerk"
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "Tarnished Sentinel Medallion",
            "Kil'jaeden's Burning Wish",
            "Terror From Below",
            "Charm of the Rising Tide",
            "Tome of Unraveling Sanity",
            "Unstable Arcano Crystal",
            "PVP Badge of Dominance",
            "Whispers in the Dark",
            "Stat Stick (Mastery)",
            "Dreadstone of Endless Shadows",
            "Moonlit Prism",
            "Padawsen's Unlucky Charm",
            "Stat Stick (Crit)",
            "Erratic Metronome",
            "Star Gate",
            "Infernal Writ",
            "Stat Stick (Haste)",
            "Chrono Shard",
            "Stormsinger Fulmination Charge",
            "Spectral Thurible",
            "Deteriorated Construct Core",
            "Naraxas' Spiked Tongue",
            "Horn of Valor",
            "PVP Insignia of Dominance",
            "Twisting Wind",
            "Obelisk of the Void",
            "Bough of Corruption",
            "Oakheart's Gnarled Root",
            "Fury of the Burning Sky",
            "Devilsaur Shock-Baton",
            "Portable Manacracker",
            "Wriggling Sinew",
            "Darkmoon Deck: Hellfire",
            "Icon of Rot",
            "Swarming Plaguehive",
            "Aran's Relaxing Ruby",
            "Infernal Alchemist Stone",
            "Mrrgria's Favor",
            "Caged Horror",
            "Corrupted Starlight",
            "Eye of Skovald",
            "Pharameres Forbidden Grimoire",
            "Elementium Bomb Squirrel Generator",
            "Unstable Horrorslime",
            "Figurehead of the Naglfar"
        ]
    },
    yAxis: {
        labels: {
            enabled: true
        },
        min: 0,
        stackLabels: {
            enabled: false,
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white',
                fontWeight: "bold"
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});