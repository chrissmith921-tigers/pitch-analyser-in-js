const express = require('express');
const app = express();
const port = 3000;

// Sample pitch data - same data i used in the c# exercise
const pitchList = [
    {
        "PitchType": "CT",
        "HorizontalPoint": -9.65876259589309,
        "VerticalPoint": -7.84717116937003
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 7.67511617929202,
        "VerticalPoint": 4.91456225489808
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 14.1628362169253,
        "VerticalPoint": 11.3371234958121
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -6.3041096553104,
        "VerticalPoint": -4.42402908306966
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 12.8375942290404,
        "VerticalPoint": -12.8067908542727
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 1.81855519229683,
        "VerticalPoint": -4.72280767753567
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -4.59175541819152,
        "VerticalPoint": 0.518125141787099
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 12.8671460009863,
        "VerticalPoint": 15.3444229473386
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -7.08387197453121,
        "VerticalPoint": 8.51501444446901
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 7.91803989250396,
        "VerticalPoint": -4.28011372257811
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 6.71009716553788,
        "VerticalPoint": 8.24878708339159
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 2.85081010281047,
        "VerticalPoint": -12.2666254630478
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 1.63082510778228,
        "VerticalPoint": 7.63898190591204
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 7.18851871885287,
        "VerticalPoint": 3.10827387499069
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -1.14423499471671,
        "VerticalPoint": -12.1046627933041
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 12.5280378402913,
        "VerticalPoint": -2.22456196717621
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -9.50702377931,
        "VerticalPoint": -7.9005388607976
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -8.95107290743789,
        "VerticalPoint": 15.8551181103719
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 14.2982889443057,
        "VerticalPoint": 18.3551192282682
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 3.01348353304633,
        "VerticalPoint": -1.35698024754635
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 3.70468511031167,
        "VerticalPoint": -7.39359860068478
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 8.8350290543805,
        "VerticalPoint": -15.9968986981739
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 5.73698466268073,
        "VerticalPoint": -4.97743623476374
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 6.13270053692816,
        "VerticalPoint": -15.0474488092745
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 2.24964002508699,
        "VerticalPoint": 4.89090642999427
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -3.23714972068768,
        "VerticalPoint": -4.23727686012664
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 9.74957239517696,
        "VerticalPoint": 5.76913616564252
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 6.46043303090971,
        "VerticalPoint": -6.57382368810681
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 0.1412273696113,
        "VerticalPoint": -8.60470530147198
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 3.80615142865256,
        "VerticalPoint": -8.34151651102945
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 9.05185913918171,
        "VerticalPoint": -11.582168919373
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -3.92471910104986,
        "VerticalPoint": -10.5731731657733
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 12.905441939137,
        "VerticalPoint": -2.12105688205981
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 6.63505848849127,
        "VerticalPoint": -14.8377973487321
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -0.247877256022358,
        "VerticalPoint": -14.1255317069891
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 8.5491377082944,
        "VerticalPoint": -7.86084519995397
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 11.0034892633892,
        "VerticalPoint": -2.1273838387169
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -9.72795897158952,
        "VerticalPoint": 6.24498232012656
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -7.18192295283072,
        "VerticalPoint": 5.22497611840979
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 8.13699363856256,
        "VerticalPoint": 6.0868276367281
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 13.3580250281293,
        "VerticalPoint": 18.3994695835601
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -1.4574688881278,
        "VerticalPoint": -12.7542811227358
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -0.399346681360077,
        "VerticalPoint": -1.93193551829413
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 6.96925823970099,
        "VerticalPoint": -4.00709158943359
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 15.1978089722122,
        "VerticalPoint": -1.45710870004355
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 6.06014849131513,
        "VerticalPoint": -6.28693544135509
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -8.22300050451646,
        "VerticalPoint": -13.4315634974886
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 14.0692413726121,
        "VerticalPoint": -0.726435237159777
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -4.12157483503102,
        "VerticalPoint": 17.0109921041995
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 10.2066765449591,
        "VerticalPoint": 1.48616787006704
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -2.34779622562517,
        "VerticalPoint": 6.50918429119151
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 4.95146675467283,
        "VerticalPoint": 7.60335618063304
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 10.8429671787849,
        "VerticalPoint": -3.66943486163771
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 8.26732656018428,
        "VerticalPoint": 5.35468644252654
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -10.3193961370306,
        "VerticalPoint": -4.95955072424418
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 11.7082586128768,
        "VerticalPoint": 14.4289905510505
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 8.86837220519445,
        "VerticalPoint": 17.9008518555406
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 11.6159816124067,
        "VerticalPoint": 12.1877168211272
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 2.30005381088706,
        "VerticalPoint": 1.68473764636546
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 12.1626115505066,
        "VerticalPoint": 3.05211058788027
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -4.13915390009639,
        "VerticalPoint": 9.80909289513789
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 1.77995898941284,
        "VerticalPoint": -12.7440442221822
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 15.3641214183397,
        "VerticalPoint": -4.99938055778219
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -0.297556757102631,
        "VerticalPoint": -13.7114864924866
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -3.67170710822711,
        "VerticalPoint": -3.63185582036393
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -4.37333443164889,
        "VerticalPoint": 17.7317007457282
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 12.3902189570199,
        "VerticalPoint": -11.679059740157
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 14.7953490374445,
        "VerticalPoint": 18.5067013357068
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 8.54434236483114,
        "VerticalPoint": -14.8724417431451
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 8.52757065002837,
        "VerticalPoint": -5.88417747897259
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -10.4004730667163,
        "VerticalPoint": 0.271564890182297
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 7.45440911599854,
        "VerticalPoint": 9.02272247822491
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -1.054080471198,
        "VerticalPoint": -4.9173442679831
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 7.57539574125803,
        "VerticalPoint": 7.63321776565235
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 0.371439285598857,
        "VerticalPoint": -2.36044736416135
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 6.61976331382688,
        "VerticalPoint": -13.619018466516
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 6.52868857249865,
        "VerticalPoint": -11.402199401875
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -9.84118243450479,
        "VerticalPoint": 19.350446829723
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 6.68711696359197,
        "VerticalPoint": -8.47702751967189
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -5.21041728623537,
        "VerticalPoint": 19.720083008146
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 9.69801090807267,
        "VerticalPoint": 13.8924605450896
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 13.7174666487143,
        "VerticalPoint": 13.9367515490974
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 6.9441892006969,
        "VerticalPoint": 13.6035553035244
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 8.58839092752198,
        "VerticalPoint": 8.46360167478893
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -6.0588791325906,
        "VerticalPoint": -3.04897860749822
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 11.6291062524305,
        "VerticalPoint": 14.5622670764635
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 4.8369100461754,
        "VerticalPoint": -15.210289972783
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -8.0980689870324,
        "VerticalPoint": 8.97176201637762
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -1.74978728627849,
        "VerticalPoint": 6.53272356124918
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 7.71055568689286,
        "VerticalPoint": 19.7742084773006
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 3.86563370525606,
        "VerticalPoint": -4.326766451838
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 15.0884116690877,
        "VerticalPoint": -12.7288468802613
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -4.2035907523997,
        "VerticalPoint": 1.25049873883517
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 5.49996753779392,
        "VerticalPoint": -10.7005012811189
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -3.40754516929714,
        "VerticalPoint": -1.04265503799395
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -0.566239785710504,
        "VerticalPoint": 5.61500769710961
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 15.1605810595104,
        "VerticalPoint": 11.2814852184107
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 9.85630077643057,
        "VerticalPoint": 3.68840378520661
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -1.11735081871941,
        "VerticalPoint": 7.66688807715495
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -9.11977816241517,
        "VerticalPoint": -10.4871755013783
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 5.94245430744141,
        "VerticalPoint": 2.26727952222684
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 15.2673162297642,
        "VerticalPoint": -6.87669455979958
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -9.71612332915171,
        "VerticalPoint": -5.6644766129166
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 11.652617921904,
        "VerticalPoint": -6.63684565592213
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 5.45054771987844,
        "VerticalPoint": -14.1281126925593
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -7.60903284516237,
        "VerticalPoint": 0.217625106144851
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -0.988314674669589,
        "VerticalPoint": 5.4353360190622
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 0.431967943272253,
        "VerticalPoint": 18.4455494430485
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 8.52555728488618,
        "VerticalPoint": 2.87634430068496
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 7.54813612114581,
        "VerticalPoint": -11.7149547280026
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 6.09595916024256,
        "VerticalPoint": 6.85059895682165
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 15.4462273682083,
        "VerticalPoint": 0.91881759679352
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -6.17197003581299,
        "VerticalPoint": 19.0722542545188
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -8.43103594445306,
        "VerticalPoint": -12.3250022535102
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -8.92865870756735,
        "VerticalPoint": -0.372379520452892
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 2.88206906990625,
        "VerticalPoint": 6.83201156484761
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 6.07119160930751,
        "VerticalPoint": 12.5447549462113
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 7.50985335255931,
        "VerticalPoint": 19.985077983544
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 4.94746634613242,
        "VerticalPoint": -10.7274581535422
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 10.337259449765,
        "VerticalPoint": -12.2609052005602
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 3.89602361866875,
        "VerticalPoint": -5.55030583786374
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 3.77093098260082,
        "VerticalPoint": 16.4872315313006
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -1.33430233060917,
        "VerticalPoint": 1.61231999476249
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 3.56943127495355,
        "VerticalPoint": 9.62681164540512
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 6.11448121773173,
        "VerticalPoint": 18.6449091188156
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 10.7813869997784,
        "VerticalPoint": 0.696861259191145
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 8.59208332840649,
        "VerticalPoint": 5.49847026759947
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -2.81127273593834,
        "VerticalPoint": -13.5180403832939
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -0.83424703225149,
        "VerticalPoint": 16.3774459440569
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -1.30244542659106,
        "VerticalPoint": 5.20102284591765
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -5.41283557261351,
        "VerticalPoint": 3.80718859185089
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 7.76729192531696,
        "VerticalPoint": -9.02672532897976
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 12.205209405181,
        "VerticalPoint": -13.7017237894686
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 10.5057382309897,
        "VerticalPoint": 6.22006605880159
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 1.54730749487964,
        "VerticalPoint": 1.01926727968413
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 14.9868604622535,
        "VerticalPoint": 9.48559691796344
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 13.0987300857209,
        "VerticalPoint": 1.82216211824629
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -10.1927559328591,
        "VerticalPoint": -3.08408965015385
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -3.46593735725016,
        "VerticalPoint": -15.112789589162
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -0.550245677411858,
        "VerticalPoint": -8.71902829413874
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 4.14556718598851,
        "VerticalPoint": 9.89121308336429
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 13.2747477943917,
        "VerticalPoint": 7.91537914830744
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -2.44263030240682,
        "VerticalPoint": 16.4619052760523
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 1.36134468217151,
        "VerticalPoint": 16.8479498892596
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 12.7997337608387,
        "VerticalPoint": 2.71616534330962
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -0.904177669860996,
        "VerticalPoint": 11.2164212437649
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -2.93116655300646,
        "VerticalPoint": -15.0730309998561
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -5.40243018249908,
        "VerticalPoint": -7.15047460432468
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -2.6241540653679,
        "VerticalPoint": 15.7239082670756
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 12.8202269584113,
        "VerticalPoint": -9.84821951811464
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -5.97068105715202,
        "VerticalPoint": -8.06969704615614
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 0.644799426520748,
        "VerticalPoint": -6.8968899348369
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -9.35374080269136,
        "VerticalPoint": 9.65807023946738
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 5.42210156153897,
        "VerticalPoint": -2.66005662520877
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -7.0443110696197,
        "VerticalPoint": -8.32521079992944
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 14.8533705737525,
        "VerticalPoint": 9.73375459776338
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 3.34512730169018,
        "VerticalPoint": 18.5289659307735
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -3.50413489706516,
        "VerticalPoint": -13.0702680107583
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 10.1600220116669,
        "VerticalPoint": -4.34391172155167
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 4.74312733319262,
        "VerticalPoint": -8.36810611602822
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 13.0992735966547,
        "VerticalPoint": 18.2046626315422
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -4.15863302814515,
        "VerticalPoint": 18.4752193380517
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 13.184662573293,
        "VerticalPoint": 13.3262634245018
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 3.98688526228428,
        "VerticalPoint": -13.7809483768386
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -4.41402098771583,
        "VerticalPoint": 0.0492571716517958
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 14.9570153808346,
        "VerticalPoint": 10.594752084762
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 3.06586237974607,
        "VerticalPoint": -8.96568420853328
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -7.42615324863834,
        "VerticalPoint": 16.6879168894912
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 10.3381550622911,
        "VerticalPoint": 19.0551263493067
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 2.99244612680497,
        "VerticalPoint": -12.8021879198517
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -8.91188781014407,
        "VerticalPoint": 18.6410654192203
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -5.72331421629218,
        "VerticalPoint": 5.60516922867
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 2.49184619026312,
        "VerticalPoint": 13.2595175936861
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -2.90142710569586,
        "VerticalPoint": -14.3726788814327
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 4.75272452630916,
        "VerticalPoint": -12.7687741976255
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 7.55912555356153,
        "VerticalPoint": -10.059006999196
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -6.84345271984778,
        "VerticalPoint": 13.6177342156134
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 13.6191620779098,
        "VerticalPoint": 10.952972340637
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 10.7591384688567,
        "VerticalPoint": -10.0601748808099
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 15.1047489745999,
        "VerticalPoint": -3.0951305164417
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -3.16240768061776,
        "VerticalPoint": 19.4448993568954
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -3.04182605876649,
        "VerticalPoint": 8.31042716009467
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -9.97290472807754,
        "VerticalPoint": 8.57387431230902
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -3.99663149974544,
        "VerticalPoint": -14.0361439382238
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -4.10587974463086,
        "VerticalPoint": -14.3937934005232
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -2.5476049550965,
        "VerticalPoint": 15.1555559419644
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 13.3238068051307,
        "VerticalPoint": 15.5888609529068
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -9.6656988471757,
        "VerticalPoint": 14.0676646743283
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -1.46995851497142,
        "VerticalPoint": 0.125229968186137
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -6.25073917932849,
        "VerticalPoint": -1.65713602529333
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 10.1671707287163,
        "VerticalPoint": 6.81594318609556
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 6.93618122934061,
        "VerticalPoint": -10.8389389311746
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -1.03371814181805,
        "VerticalPoint": -8.07117692055077
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 10.7759782886608,
        "VerticalPoint": 10.5759676640088
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 2.84736725033498,
        "VerticalPoint": 6.26519753433613
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 3.96227288789854,
        "VerticalPoint": -14.888570133453
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 9.27945045417674,
        "VerticalPoint": -5.16341829746263
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -1.94713123090864,
        "VerticalPoint": 7.45219336800445
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 9.76586932889125,
        "VerticalPoint": 11.3016387710139
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -1.17566840141485,
        "VerticalPoint": 9.7413492249545
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -2.18758604588675,
        "VerticalPoint": -15.6569940838093
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -4.74614620510863,
        "VerticalPoint": -10.7915044032369
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 13.5629854745539,
        "VerticalPoint": 13.7452667739047
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 13.5775257192606,
        "VerticalPoint": 7.74589073647092
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -4.42745700688247,
        "VerticalPoint": -3.87906138750708
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -4.65026096443864,
        "VerticalPoint": 1.27529469775504
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 0.535626953120154,
        "VerticalPoint": 2.72212365676265
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 12.0107224904272,
        "VerticalPoint": 6.54586229002534
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 8.36683857020466,
        "VerticalPoint": -3.43329923430068
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -3.03640784839124,
        "VerticalPoint": -11.4948056820128
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 14.0307106737385,
        "VerticalPoint": 16.2858272141201
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 9.45070553802769,
        "VerticalPoint": 14.1747390286173
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 10.7989488431568,
        "VerticalPoint": 18.1821511630991
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 1.15432240280586,
        "VerticalPoint": 0.94183462692806
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 14.730103916723,
        "VerticalPoint": 2.81287661188045
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -1.72854261792879,
        "VerticalPoint": 0.282817983506749
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 10.3520480953127,
        "VerticalPoint": -1.35678261814093
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -9.92160462858894,
        "VerticalPoint": -3.71948349121864
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 2.26255734777928,
        "VerticalPoint": 17.3818897139414
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -4.52613175255257,
        "VerticalPoint": 12.3972042594412
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 10.8482343289035,
        "VerticalPoint": 18.1727922890065
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -3.78531019052274,
        "VerticalPoint": -8.35792733470296
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -7.26408336734493,
        "VerticalPoint": 6.51037629444198
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -7.53258243901792,
        "VerticalPoint": 6.20336959960066
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 11.8803220496769,
        "VerticalPoint": -13.9926410174133
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -0.223550913369969,
        "VerticalPoint": -0.991234933525384
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 3.11639548213168,
        "VerticalPoint": 10.1104548282096
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 1.71356617134863,
        "VerticalPoint": 17.6255439426597
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 5.92748332500596,
        "VerticalPoint": -10.4225048161086
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 9.36921375678292,
        "VerticalPoint": -2.96938723551422
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 2.9610191912361,
        "VerticalPoint": -6.61178888082214
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -8.30785602171405,
        "VerticalPoint": -11.5904648992693
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -8.67968122343448,
        "VerticalPoint": 3.94404735626704
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 1.4943576497507,
        "VerticalPoint": 12.4080234335635
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 14.5193306952615,
        "VerticalPoint": -10.1529244181833
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 1.21076116801832,
        "VerticalPoint": 2.6613245455312
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 2.16332860105516,
        "VerticalPoint": 19.1692849292045
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 4.13915940754743,
        "VerticalPoint": -1.31442712858149
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 5.9837338546141,
        "VerticalPoint": -6.81533297669098
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -8.22319615704429,
        "VerticalPoint": -15.989917543378
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -8.87046346935671,
        "VerticalPoint": -2.44767033217021
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 15.3269089908648,
        "VerticalPoint": -2.83274086387086
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -0.639205567051675,
        "VerticalPoint": -3.85864844146936
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -6.00453281153024,
        "VerticalPoint": -4.234937546664
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 13.1050393303291,
        "VerticalPoint": 13.00948545092
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -2.11328277589232,
        "VerticalPoint": -0.788576947080525
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 13.160372597107,
        "VerticalPoint": 7.49634101447024
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 4.58506331530225,
        "VerticalPoint": 4.04322114787956
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -6.95120509378848,
        "VerticalPoint": -15.4988321827401
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 14.0701183385672,
        "VerticalPoint": 1.17096358760595
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 5.30818851297306,
        "VerticalPoint": 19.7521346659133
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 6.12338305709885,
        "VerticalPoint": 0.0144679316336109
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -0.732324790963084,
        "VerticalPoint": 1.56865895190809
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -9.52169475325466,
        "VerticalPoint": -10.5215208653427
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 4.01198871746442,
        "VerticalPoint": 14.2288688809517
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 13.8835583463719,
        "VerticalPoint": 9.53474334466845
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 12.6023763942353,
        "VerticalPoint": -11.9118221178778
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -1.52356924246258,
        "VerticalPoint": 3.30807971055928
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -3.42667435987569,
        "VerticalPoint": 18.7386105607126
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -7.32468036682431,
        "VerticalPoint": -1.47962013453079
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 1.92503559169648,
        "VerticalPoint": 3.63271548382811
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 12.4149431819364,
        "VerticalPoint": 4.71730430457679
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -4.02190020071287,
        "VerticalPoint": -11.9035359072376
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 7.99285655944655,
        "VerticalPoint": -11.1349281889014
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -5.68398294016925,
        "VerticalPoint": -1.5691441642016
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 13.017662065019,
        "VerticalPoint": -8.17305184276796
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 15.3450983001211,
        "VerticalPoint": -15.939144466968
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 5.82616616529884,
        "VerticalPoint": 7.47595393347353
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 11.2167691375496,
        "VerticalPoint": -12.4650982933005
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -9.3798584541344,
        "VerticalPoint": 13.6454376385461
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -8.10817988065596,
        "VerticalPoint": 1.3939576916151
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 14.8485784902269,
        "VerticalPoint": 6.15828250002496
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 7.59212174325305,
        "VerticalPoint": -1.18662734735706
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -4.92367491934095,
        "VerticalPoint": -3.82478308875105
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -1.46612117084837,
        "VerticalPoint": -3.66626290824142
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 13.2847616098534,
        "VerticalPoint": 2.17909912513667
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -2.08304556067493,
        "VerticalPoint": -3.30849402590814
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 1.80665674252614,
        "VerticalPoint": 5.75713073892673
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 13.2558844177373,
        "VerticalPoint": 10.3803971672639
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 13.8715316943329,
        "VerticalPoint": -1.96686157033095
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -2.59902244699709,
        "VerticalPoint": -4.15353001054721
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -6.55946624144455,
        "VerticalPoint": -1.11340469156903
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -8.36911874973294,
        "VerticalPoint": 9.95421732884182
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 7.63124752030895,
        "VerticalPoint": 2.95705002030741
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 12.5674303361894,
        "VerticalPoint": -15.615089373268
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 12.2664846166481,
        "VerticalPoint": -13.6098748398936
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 2.80928353012847,
        "VerticalPoint": -8.14673588963903
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 7.96084203783646,
        "VerticalPoint": 7.49548562105708
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 12.4264319190725,
        "VerticalPoint": 11.8011180751855
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 4.43809572486169,
        "VerticalPoint": -14.8884008061032
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 4.43585744706796,
        "VerticalPoint": 3.59349178633998
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 15.3284700995511,
        "VerticalPoint": -11.2884725752292
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -7.11007734910259,
        "VerticalPoint": -14.6864430289498
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 7.64698972733265,
        "VerticalPoint": 7.72914502548414
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 8.83070658049285,
        "VerticalPoint": -7.78632534223282
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -6.02058975100307,
        "VerticalPoint": -15.8514187259979
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 2.55416234426726,
        "VerticalPoint": 16.7480948767692
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -9.17302962384234,
        "VerticalPoint": 5.57139098558399
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -2.87049125005515,
        "VerticalPoint": -13.1207164027206
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 7.34685592616379,
        "VerticalPoint": -3.55956328589001
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 13.8713532233816,
        "VerticalPoint": 19.6527013979401
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -0.0341712032085386,
        "VerticalPoint": -7.9642460315573
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -8.36634972906176,
        "VerticalPoint": -2.7307237012298
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -2.23252405687498,
        "VerticalPoint": -8.10207510074056
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 7.27810203885312,
        "VerticalPoint": -6.31651779196952
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 12.3621991007114,
        "VerticalPoint": 14.5026165135372
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -2.84677180476512,
        "VerticalPoint": -14.8572513905662
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -7.47749272495594,
        "VerticalPoint": -10.5525281115941
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -10.1188838214949,
        "VerticalPoint": 12.4901449439977
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 1.73172549166187,
        "VerticalPoint": -14.9572709224062
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 14.1100464932001,
        "VerticalPoint": 16.4891744390669
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -5.64740592993925,
        "VerticalPoint": 8.11591729901068
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 9.89665290356815,
        "VerticalPoint": 9.25831066825819
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 6.85929912946603,
        "VerticalPoint": 11.7965017059722
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 4.61659946758371,
        "VerticalPoint": 0.738850275930066
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 5.76599822297913,
        "VerticalPoint": 15.5328327548871
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 7.31958300052345,
        "VerticalPoint": 10.9763162436889
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 13.1614229797268,
        "VerticalPoint": -12.0998325731843
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 12.5479713826478,
        "VerticalPoint": -5.01649143889573
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 13.4992906771369,
        "VerticalPoint": 9.05205591053835
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -4.87066216184999,
        "VerticalPoint": -1.42687812412321
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -0.319302701226603,
        "VerticalPoint": 9.48916811240688
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 2.74634722958259,
        "VerticalPoint": 0.751916167765103
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 13.0309907162021,
        "VerticalPoint": 18.3811155428894
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 2.45001713940065,
        "VerticalPoint": -11.3899561985043
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -8.5877934018021,
        "VerticalPoint": 17.5767389654527
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 10.8492776346927,
        "VerticalPoint": 7.84360390502016
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 3.66388127072397,
        "VerticalPoint": -7.5372862121388
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -7.06461787861103,
        "VerticalPoint": -11.8503003690065
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -2.89960427327515,
        "VerticalPoint": 15.2820001408661
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 5.09043583431519,
        "VerticalPoint": -9.04257423966703
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -0.313230054913399,
        "VerticalPoint": -7.0304154335791
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -9.59671536799854,
        "VerticalPoint": -9.93592018458155
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -4.51459444977067,
        "VerticalPoint": -3.79186763847893
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -7.04039163869211,
        "VerticalPoint": 5.63399308985972
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 5.76243361409281,
        "VerticalPoint": 4.01574211944672
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 9.838274930537,
        "VerticalPoint": 7.41253773054951
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 5.75950973041184,
        "VerticalPoint": 4.11550914960128
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -10.3221610011639,
        "VerticalPoint": -13.0017734309432
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 1.02391273638526,
        "VerticalPoint": 12.9498120014603
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -6.59478572763453,
        "VerticalPoint": 18.696779746549
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 10.0174541070303,
        "VerticalPoint": -0.505244080650495
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -2.17224274089905,
        "VerticalPoint": -1.61816538150558
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 3.7344383661779,
        "VerticalPoint": 8.31493315855713
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -9.21607750194158,
        "VerticalPoint": -10.7059941741558
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 7.58557095667452,
        "VerticalPoint": 1.93816701164402
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -7.12123219410334,
        "VerticalPoint": -5.92957349745048
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -6.97540498060322,
        "VerticalPoint": 5.84141862099399
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 9.40189747428597,
        "VerticalPoint": 12.8324496941022
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -9.08982264833151,
        "VerticalPoint": 3.41704672154673
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -5.49376260578908,
        "VerticalPoint": 16.0505536170007
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 4.86640734252756,
        "VerticalPoint": 3.22617612698739
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -7.23534385894077,
        "VerticalPoint": -6.50981751653892
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 6.58943204336844,
        "VerticalPoint": 16.0511171369523
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 0.917246397816285,
        "VerticalPoint": -6.04573019054624
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -6.73161468453656,
        "VerticalPoint": 10.4108738844684
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 11.9451125917386,
        "VerticalPoint": -5.52909169114998
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -7.88228685391916,
        "VerticalPoint": 7.40316779652626
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 6.87336595225625,
        "VerticalPoint": -10.5710126349107
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 9.93147387895172,
        "VerticalPoint": 8.57884712181978
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 14.7737687238894,
        "VerticalPoint": 19.4777029609843
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -4.98374995219234,
        "VerticalPoint": 4.78304126014801
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 9.87042418195449,
        "VerticalPoint": 17.2197574341663
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -8.53589473384432,
        "VerticalPoint": 17.5411733239438
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 15.2052332080899,
        "VerticalPoint": 13.3592080429952
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 15.401963244427,
        "VerticalPoint": -3.68701440933168
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 10.8656455110164,
        "VerticalPoint": 13.244984266846
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 10.4885885803016,
        "VerticalPoint": -11.7615118878577
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -3.09241341364475,
        "VerticalPoint": -12.0473853164079
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 7.77061846659111,
        "VerticalPoint": -3.96858194751104
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -0.636005864159547,
        "VerticalPoint": -3.96032645019705
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 4.6517664534648,
        "VerticalPoint": 9.26789511475948
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -8.32036169948668,
        "VerticalPoint": 7.48627198574433
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -2.42802774849245,
        "VerticalPoint": 14.6042133861486
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -6.06688422038809,
        "VerticalPoint": 18.2821551855946
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 5.06140272144315,
        "VerticalPoint": 9.22898633399086
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 7.49129651326939,
        "VerticalPoint": -9.11746058835772
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 4.97185241955833,
        "VerticalPoint": 7.25019434171712
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -3.22087655617967,
        "VerticalPoint": 1.1205441639156
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -2.11249823459521,
        "VerticalPoint": -0.612893595060179
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 13.0275715112973,
        "VerticalPoint": -0.850171749911855
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -3.70974752827914,
        "VerticalPoint": 8.28923241854565
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 4.96505191423232,
        "VerticalPoint": -3.96594854569403
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -8.48495592455414,
        "VerticalPoint": -1.94580130648243
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 1.60837595341177,
        "VerticalPoint": 4.93829803854179
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -9.67403385466572,
        "VerticalPoint": 7.5034074357424
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 12.6862606969538,
        "VerticalPoint": 0.687841721622956
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 15.457026926664,
        "VerticalPoint": -3.73763133768153
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -2.08099118639668,
        "VerticalPoint": -9.80659232061473
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -7.40984309189151,
        "VerticalPoint": 7.71447279413617
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 14.3728247838728,
        "VerticalPoint": -4.61287373397349
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 6.74687184919963,
        "VerticalPoint": 3.61388271795429
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -2.72411534032636,
        "VerticalPoint": 4.12916215897437
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -3.66939736450284,
        "VerticalPoint": 19.5862791470417
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 10.0664856105173,
        "VerticalPoint": -6.34380996570032
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -6.45412926978227,
        "VerticalPoint": 0.468317225487773
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -5.54017971766065,
        "VerticalPoint": -2.60870722344327
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -8.13933757466199,
        "VerticalPoint": -15.7729633950276
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 2.00808418697073,
        "VerticalPoint": -3.00558287346782
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 11.6403378101184,
        "VerticalPoint": -2.43213492535829
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -10.2705793483436,
        "VerticalPoint": -5.86097156336515
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -0.183120747561158,
        "VerticalPoint": -10.0475386321746
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -4.25288315462857,
        "VerticalPoint": -2.27843227577155
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 15.3686039735761,
        "VerticalPoint": 4.88243251151425
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -4.65884258018086,
        "VerticalPoint": 1.30962298848611
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 3.49384568223807,
        "VerticalPoint": 1.48257855044611
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 12.8919468198854,
        "VerticalPoint": -2.52015367826828
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -1.15801241675263,
        "VerticalPoint": -3.62026656283586
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -4.48164746297358,
        "VerticalPoint": 16.8302897412135
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 12.9774029272516,
        "VerticalPoint": -7.66535493335301
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -4.91335528188701,
        "VerticalPoint": -1.77435055969594
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 13.5115170352371,
        "VerticalPoint": 11.5644824310003
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 9.93087165052811,
        "VerticalPoint": 8.67368784318897
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -5.82668478209885,
        "VerticalPoint": 5.94474517567568
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 3.04091153066984,
        "VerticalPoint": 18.4115954348858
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -3.66506169204886,
        "VerticalPoint": -14.9117439360688
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -10.2600661032971,
        "VerticalPoint": 3.90930567583849
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -3.20593621785751,
        "VerticalPoint": 12.8773404231578
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 0.0671036411720589,
        "VerticalPoint": -11.2076348336799
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -6.52473483205688,
        "VerticalPoint": 2.22932043509761
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 12.6526738203412,
        "VerticalPoint": 14.2215599016186
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -1.40758327446311,
        "VerticalPoint": 2.93539695696675
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -8.15402337573128,
        "VerticalPoint": -11.5765302014962
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 12.0197948158517,
        "VerticalPoint": 13.4806265014043
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -6.15133273920976,
        "VerticalPoint": 18.9483504188725
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 7.3788843960488,
        "VerticalPoint": 17.7252324026207
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 0.294113753389684,
        "VerticalPoint": -3.95988159973491
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 7.35395233007005,
        "VerticalPoint": 15.7111016343314
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -6.70713918920904,
        "VerticalPoint": -3.98721790240014
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 14.5194683685134,
        "VerticalPoint": -9.87657898204725
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 0.81597956090266,
        "VerticalPoint": 7.60171183440809
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 4.05377561937487,
        "VerticalPoint": 19.8643092835944
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 13.7430697557904,
        "VerticalPoint": -5.95078859502303
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -8.87351773381768,
        "VerticalPoint": -7.11004408354465
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 8.9487870291474,
        "VerticalPoint": 1.29833912015607
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 3.497411067571,
        "VerticalPoint": 8.99016711621391
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -3.82229761292623,
        "VerticalPoint": -6.77707916970607
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 14.2646082063045,
        "VerticalPoint": 5.36821406163387
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -2.22143470516554,
        "VerticalPoint": -1.36017116477094
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -4.09046615142834,
        "VerticalPoint": 12.3663674904021
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 2.93955934366261,
        "VerticalPoint": 17.9488564038181
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 14.5089118021757,
        "VerticalPoint": -7.22093182756581
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -9.43291689368948,
        "VerticalPoint": -14.6487312363659
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 2.09902266803729,
        "VerticalPoint": -12.9491292434143
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 15.3489754347589,
        "VerticalPoint": 2.26506519042051
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -6.81448635713498,
        "VerticalPoint": 18.4928746858237
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 8.44338591070544,
        "VerticalPoint": 19.971114419964
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 10.416363446125,
        "VerticalPoint": 18.8954204803486
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -8.55033434622487,
        "VerticalPoint": -12.3643846068674
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -5.44799964082038,
        "VerticalPoint": 11.05436223471
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 12.5264460580237,
        "VerticalPoint": 16.2325873949295
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -0.429948825329799,
        "VerticalPoint": -14.2027220462366
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 11.6691799048309,
        "VerticalPoint": 2.11263133193315
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 0.804551965777344,
        "VerticalPoint": -8.7825663298912
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 15.1161915416777,
        "VerticalPoint": 13.408642843441
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 11.8806563069297,
        "VerticalPoint": -6.70052003092068
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -8.2735351515418,
        "VerticalPoint": 13.6473507212061
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -1.4299789710911,
        "VerticalPoint": 9.9408554121671
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -9.07580961893263,
        "VerticalPoint": 5.00254295073626
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 1.04921285157982,
        "VerticalPoint": 7.5415437426674
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -8.28527051659023,
        "VerticalPoint": 4.56737021571374
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 11.5517428812164,
        "VerticalPoint": -1.94180670794562
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 7.80594675072513,
        "VerticalPoint": -10.9438448080371
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 12.0285933147832,
        "VerticalPoint": 13.1983033524356
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 4.01786317240069,
        "VerticalPoint": 11.4221113117364
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 1.07138390404981,
        "VerticalPoint": -0.240423004914781
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -7.14429799154741,
        "VerticalPoint": 8.90619884987391
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 15.2738138165447,
        "VerticalPoint": 7.16966764665976
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -2.59012639977214,
        "VerticalPoint": -6.72375425607021
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -4.56299524808077,
        "VerticalPoint": 16.1960658951295
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -8.10229972609786,
        "VerticalPoint": 16.717566699946
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 12.3537011312143,
        "VerticalPoint": 14.9338284791228
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -9.935029286208,
        "VerticalPoint": 0.694394827521165
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 10.4884126781266,
        "VerticalPoint": 8.18598189761229
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -6.9416826788126,
        "VerticalPoint": -5.32038715905015
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 10.9288305084866,
        "VerticalPoint": -12.9898538412193
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 3.15146020134584,
        "VerticalPoint": 8.70425453246436
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 7.62641502809835,
        "VerticalPoint": -10.7065384972879
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 5.18913987856789,
        "VerticalPoint": 8.05394707155774
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 9.62132401115512,
        "VerticalPoint": 7.90094622096187
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 0.587181326422098,
        "VerticalPoint": 12.1860273784112
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -1.97315067804488,
        "VerticalPoint": 9.79840178886895
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 12.9622404216558,
        "VerticalPoint": 19.9104441407449
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -4.2328578199157,
        "VerticalPoint": 16.4543040824773
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 7.16381810686035,
        "VerticalPoint": 19.35871167826
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -1.17912462321237,
        "VerticalPoint": -14.7156528990935
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -6.25692951061194,
        "VerticalPoint": -4.02752021565474
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 8.05894923935901,
        "VerticalPoint": 13.4294147383931
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -9.44613303365747,
        "VerticalPoint": -0.983644361537543
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -8.38706252430449,
        "VerticalPoint": -2.33382952020011
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -8.03032529132047,
        "VerticalPoint": 6.58387796094734
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 13.2882980794202,
        "VerticalPoint": 6.61503797617894
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 2.79991169160348,
        "VerticalPoint": 12.9703582905279
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -3.52425518700726,
        "VerticalPoint": 5.72128216573652
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -4.61308132004849,
        "VerticalPoint": -8.88342532400805
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 8.60525727239344,
        "VerticalPoint": -7.68606575767174
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -9.0629284734928,
        "VerticalPoint": 5.5165539050281
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -7.79066570496418,
        "VerticalPoint": -0.335674944198985
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -7.07695221321018,
        "VerticalPoint": 3.32086403283541
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 1.14079483611826,
        "VerticalPoint": 7.29204829801742
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -0.953390537515553,
        "VerticalPoint": -0.623755189039649
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -10.1383133496289,
        "VerticalPoint": -11.0106021996167
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 9.0643123865973,
        "VerticalPoint": -8.9389971852758
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 6.87175786054726,
        "VerticalPoint": 2.96075302884298
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 5.93808494598847,
        "VerticalPoint": 10.333802118449
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 1.81819924792138,
        "VerticalPoint": -14.2639204880017
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -0.636621941065517,
        "VerticalPoint": 10.7529242039335
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 3.26592695627561,
        "VerticalPoint": -5.92517263093685
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -6.12735950910898,
        "VerticalPoint": 3.72192401976535
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 12.4374920229978,
        "VerticalPoint": -0.652883713457825
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -6.45862865481607,
        "VerticalPoint": 8.13720023945726
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 14.8770609922363,
        "VerticalPoint": -13.4929457523946
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 10.7343340589421,
        "VerticalPoint": 6.3551638955486
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 0.743490646007267,
        "VerticalPoint": -13.9254046310398
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 0.0897040781190359,
        "VerticalPoint": 11.8711865607104
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 11.835108798302,
        "VerticalPoint": 17.0734912693214
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -2.83401245409407,
        "VerticalPoint": -15.4367274119781
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 10.3874383360121,
        "VerticalPoint": 1.91936814806261
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 6.75480474099531,
        "VerticalPoint": -4.03985202386827
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -0.620267676121294,
        "VerticalPoint": 7.43185381611083
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 7.72743023109655,
        "VerticalPoint": 8.12694515255667
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 6.51252032604738,
        "VerticalPoint": -5.51473648275252
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -2.29418691037165,
        "VerticalPoint": 9.58002611254315
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 3.61094396866577,
        "VerticalPoint": -9.79874731823931
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -9.15271973800246,
        "VerticalPoint": 0.539996515418288
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 13.3881999330385,
        "VerticalPoint": -12.0861794837856
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 13.9729619966564,
        "VerticalPoint": 15.3656289284418
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 4.09402410934614,
        "VerticalPoint": 5.01007061509512
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -0.837160435435869,
        "VerticalPoint": 0.866470932393028
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -4.65186204710523,
        "VerticalPoint": 3.45961035163603
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 4.48717711836818,
        "VerticalPoint": -9.86897775176309
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -7.21619614482978,
        "VerticalPoint": 14.1282919031239
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 3.88544826898079,
        "VerticalPoint": -11.3767731293223
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -0.0521030514739493,
        "VerticalPoint": 2.26085891350143
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 10.4554813406023,
        "VerticalPoint": 11.0626647381128
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -0.457252391994903,
        "VerticalPoint": 9.41727415425112
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 14.4699215623935,
        "VerticalPoint": -13.4581148212602
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 0.47555605959869,
        "VerticalPoint": 4.00607114120981
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -0.43770266046802,
        "VerticalPoint": -5.29061434905508
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 9.07112718350812,
        "VerticalPoint": 7.49577160090836
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -2.70968371626876,
        "VerticalPoint": 5.12541003932991
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -1.56454106398162,
        "VerticalPoint": 4.39743802362066
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 13.8243616467471,
        "VerticalPoint": 10.7873554112058
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 13.4617876245327,
        "VerticalPoint": -12.7844469799505
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -9.67220247498665,
        "VerticalPoint": 0.788861430806783
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 14.2925355747123,
        "VerticalPoint": -5.09732344067607
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 12.1822955113585,
        "VerticalPoint": 4.63803448807987
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -0.969946059702664,
        "VerticalPoint": 6.65412025832905
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 4.43364581463032,
        "VerticalPoint": 12.9908406328064
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -4.27192882556102,
        "VerticalPoint": 14.0967474893273
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 2.87211477684616,
        "VerticalPoint": 11.9369816646114
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -3.85621152697935,
        "VerticalPoint": -12.8475928496098
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -0.201454132827958,
        "VerticalPoint": -15.8468882088606
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -0.905734181737017,
        "VerticalPoint": 15.7358187020431
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -1.67068644143473,
        "VerticalPoint": 3.52527404127211
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 7.34656512591859,
        "VerticalPoint": -13.980006679541
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -3.76375909817828,
        "VerticalPoint": 2.9676063591139
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 2.50241601910061,
        "VerticalPoint": 19.3248393894318
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -6.90711192519526,
        "VerticalPoint": 2.43953157419564
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 10.9296024290805,
        "VerticalPoint": -5.6511794037199
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 7.02782058741167,
        "VerticalPoint": -11.0277845787689
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -2.27902681810088,
        "VerticalPoint": -2.25682356598533
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 0.321924339679134,
        "VerticalPoint": 13.3652210589273
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -9.65498356578991,
        "VerticalPoint": 10.162204085087
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 15.4491867191945,
        "VerticalPoint": -14.9148837754703
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 13.6121018394388,
        "VerticalPoint": -6.23212527082594
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 11.9439775707213,
        "VerticalPoint": -5.28444565855538
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 7.1707345913003,
        "VerticalPoint": 13.4577588929087
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -3.905307060601,
        "VerticalPoint": 11.8094729236621
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 5.41821375372093,
        "VerticalPoint": 5.4047262913075
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 2.86474841491403,
        "VerticalPoint": 7.44896656470502
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 12.7630033918134,
        "VerticalPoint": 8.03167921380331
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 1.04092281780734,
        "VerticalPoint": 17.8690894376599
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -6.36269816007907,
        "VerticalPoint": 4.6316697521649
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -1.035751705228,
        "VerticalPoint": 19.064932946745
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -0.459362209729738,
        "VerticalPoint": -0.0428105387105902
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 6.16074597844147,
        "VerticalPoint": 9.00013341791577
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 4.57214754669744,
        "VerticalPoint": 0.902312881581867
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -7.87659726661052,
        "VerticalPoint": -9.39063144606256
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -0.157583857060132,
        "VerticalPoint": 8.38124887414674
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 12.1014193577223,
        "VerticalPoint": -6.04753056698853
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 15.2571661153404,
        "VerticalPoint": 0.479533936059564
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 10.5637330172258,
        "VerticalPoint": -5.89601382498501
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 12.2945453192291,
        "VerticalPoint": 18.3592782057355
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 14.7817338864951,
        "VerticalPoint": -15.6495933427961
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": -3.76201340433476,
        "VerticalPoint": 15.6225580193698
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -3.00968536573591,
        "VerticalPoint": 8.73762493825123
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 4.54555270155559,
        "VerticalPoint": 2.31266693729072
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": -1.33826759437756,
        "VerticalPoint": 1.93419656811361
    },
    {
        "PitchType": "FB",
        "HorizontalPoint": 2.03938629908964,
        "VerticalPoint": -11.1267103784702
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": -3.18637847371735,
        "VerticalPoint": -0.156656773610415
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -1.746219593652,
        "VerticalPoint": -4.33829617124131
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -1.49585721904214,
        "VerticalPoint": -10.3124464810497
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 10.0423348865261,
        "VerticalPoint": -7.8175831826522
    },
    {
        "PitchType": "SL",
        "HorizontalPoint": 2.25206088089054,
        "VerticalPoint": 13.5460521852711
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": -8.50192393294653,
        "VerticalPoint": 17.0174668547374
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 8.35103947748178,
        "VerticalPoint": -3.61229086604414
    },
    {
        "PitchType": "CB",
        "HorizontalPoint": 4.04858132057118,
        "VerticalPoint": -9.50343965501835
    },
    {
        "PitchType": "CT",
        "HorizontalPoint": 10.1112392023121,
        "VerticalPoint": 19.7138525895709
    }
];


app.get('/api/pitches', (req, res) => {
    res.json(pitchList);
});

app.get('/api/pitch-counts', (req, res) => {
    const counts = countPitchesByType();
    res.json(counts);
});

app.get('/api/strike-counts', (req, res) => {
    const strikes = countStrikesByPitchTypes();
    res.json(strikes);
});

app.get('/api/strike-list-by-pitchtype', (req, res) => {
    const { pitchType } = req.query;
    const strikes = filterStrikesByPitchType(pitchType);
    res.json(strikes);
});

app.get('/api/percentage-strikes-by-pitchtype', (req, res) => {
    const { pitchType } = req.query;
    const strikes = percentageStrikesByPitchtype(pitchType);
    res.json(strikes);
});

// Function to count pitches by pitchType
const countPitchesByType = () => {
    let counts = {};
    pitchList.forEach(pitch => {
        const { pitchType } = pitch;
        counts[pitchType] = (counts[pitchType] || 0) + 1;
    });
    return counts;
};

//Function to count strikes by pitchType
const countStrikesByPitchTypes = () => {
    // Filter pitchList based on provided bounds
    let filteredPitches = pitchList.filter(pitch => {
        return (!-8.5 || pitch.HorizontalPoint > -8.5) &&
            (!8.5 || pitch.HorizontalPoint < 8.5) &&
            (!-12 || pitch.VerticalPoint > -12) &&
            (!12 || pitch.VerticalPoint < 12);
    });

    return filteredPitches;
};

const filterStrikesByPitchType = (_pitchType) => {
    let filteredPitches = pitchList.filter(pitch => {
        return (!-8.5 || pitch.HorizontalPoint > -8.5) &&
            (!8.5 || pitch.HorizontalPoint < 8.5) &&
            (!-12 || pitch.VerticalPoint > -12) &&
            (!12 || pitch.VerticalPoint < 12) &&
            (pitch.PitchType === _pitchType);
    });
    return filteredPitches;
};

const percentageStrikesByPitchtype = (_pitchType) => {

    let filteredPitches = pitchList.filter(pitch => {
        return (pitch.PitchType === _pitchType);
    }).length;

    let filteredStrikes = filterStrikesByPitchType(_pitchType).length;
    const percentage = (filteredPitches > 0) ? (filteredStrikes / filteredPitches) * 100 : 0;

    return "Percentage strikes for type " + _pitchType + " is " + percentage.toFixed(4);
};


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
