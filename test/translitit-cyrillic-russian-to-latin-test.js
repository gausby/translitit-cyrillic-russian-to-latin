/* global assert require */
/*jslint maxlen:140*/
'use strict';

var transliteration = require('../lib/translitit-cyrillic-russian-to-latin'),
    buster = require('buster'),
    assert = buster.referee.assert,
    refute = buster.referee.refute
;

buster.testCase('A cyrillic russian transliteration', {
    'should work with Аa': function(){
        assert.equals(transliteration('Алушта'), 'Alushta');
        assert.equals(transliteration('Андрій'), 'Andrii');
    },

    'should work with Бб': function(){
        assert.equals(transliteration('Борщагівка'), 'Borshchagivka');
        assert.equals(transliteration('Борисенко'), 'Borysenko');
    },

    'should work with Вв': function(){
        assert.equals(transliteration('Вінниця'), 'Vinnytsia');
        assert.equals(transliteration('Володимир'), 'Volodymyr');
    },

    'should work with Гг': function(){
        assert.equals(transliteration('Гадяч'), 'Gadiach');
        assert.equals(transliteration('Богдан'), 'Bogdan');
        assert.equals(transliteration('Згурський'), 'Zghurskyi');
    },

    'should work with Ґґ': function(){
        assert.equals(transliteration('Ґалаґан'), 'Galagan');
        assert.equals(transliteration('Ґорґани'), 'Gorgany');
    },

    'should work with Дд': function(){
        assert.equals(transliteration('Донецьк'), 'Donetsk');
        assert.equals(transliteration('Дмитро'), 'Dmytro');
    },

    'should work with Ее': function(){
        assert.equals(transliteration('Рівне'), 'Rivne');
        assert.equals(transliteration('Олег'), 'Oleg');
        assert.equals(transliteration('Есмань'), 'Esman');
    },

    'should work with Ёё': function(){
        assert.equals(transliteration('Ёж'), 'Ezh');
        assert.equals(transliteration('Течёт'), 'Techet');
    },

    'should work with Єє': function(){
        assert.equals(transliteration('Єнакієве'), 'Yenakiieve');
        assert.equals(transliteration('Гаєвич'), 'Gaievych');
        assert.equals(transliteration('Короп\'є'), 'Koropie');
    },

    'should work with Жж': function(){
        assert.equals(transliteration('Житомир'), 'Zhytomyr');
        assert.equals(transliteration('Жанна'), 'Zhanna');
        assert.equals(transliteration('Жежелів'), 'Zhezheliv');
    },

    'should work with Зз': function(){
        assert.equals(transliteration('Закарпаття'), 'Zakarpattia');
        assert.equals(transliteration('Казимирчук'), 'Kazymyrchuk');
    },

    'should work with Ии': function(){
        assert.equals(transliteration('Медвин'), 'Medvyn');
        assert.equals(transliteration('Михайленко'), 'Mykhailenko');
    },

    'should work with Іі': function(){
        assert.equals(transliteration('Іванків'), 'Ivankiv');
        assert.equals(transliteration('Іващенко'), 'Ivashchenko');
    },

    'should work with Її': function(){
        assert.equals(transliteration('Їжакевич'), 'Yizhakevych');
        assert.equals(transliteration('Кадиївка'), 'Kadyivka');
        assert.equals(transliteration('Мар\'їне'), 'Marine');
    },

    'should work with Йй': function(){
        assert.equals(transliteration('Йосипівка'), 'Yosypivka');
        assert.equals(transliteration('Стрий'), 'Stryi');
        assert.equals(transliteration('Олексій'), 'Oleksii');
    },

    'should work with Кк': function(){
        assert.equals(transliteration('Київ'), 'Kyiv');
        assert.equals(transliteration('Коваленко'), 'Kovalenko');
    },

    'should work with Лл': function(){
        assert.equals(transliteration('Лебедин'), 'Lebedyn');
        assert.equals(transliteration('Леонід'), 'Leonid');
    },

    'should work with Мм': function(){
        assert.equals(transliteration('Миколаїв'), 'Mykolaiv');
        assert.equals(transliteration('Маринич'), 'Marynych');
    },

    'should work with Нн': function(){
        assert.equals(transliteration('Ніжин'), 'Nizhyn');
        assert.equals(transliteration('Наталія'), 'Nataliia');
    },

    'should work with Оо': function(){
        assert.equals(transliteration('Одеса'), 'Odesa');
        assert.equals(transliteration('Онищенко'), 'Onyshchenko');
    },

    'should work with Пп': function(){
        assert.equals(transliteration('Полтава'), 'Poltava');
        assert.equals(transliteration('Петро'), 'Petro');
    },

    'should work with Рр': function(){
        assert.equals(transliteration('Решетилівка'), 'Reshetylivka');
        assert.equals(transliteration('Рибчинський'), 'Rybchynskyi');
    },

    'should work with Сс': function(){
        assert.equals(transliteration('Суми'), 'Sumy');
        assert.equals(transliteration('Соломія'), 'Solomiia');
    },

    'should work with Тт': function(){
        assert.equals(transliteration('Тернопіль'), 'Ternopil');
        assert.equals(transliteration('Троць'), 'Trots');
    },

    'should work with Уу': function(){
        assert.equals(transliteration('Ужгород'), 'Uzhgorod');
        assert.equals(transliteration('Уляна'), 'Uliana');
    },

    'should work with Фф': function(){
        assert.equals(transliteration('Фастів'), 'Fastiv');
        assert.equals(transliteration('Філіпчук'), 'Filipchuk');
    },

    'should work with Хх': function(){
        assert.equals(transliteration('Харків'), 'Kharkiv');
        assert.equals(transliteration('Христина'), 'Khrystyna');
    },

    'should work with Цц': function(){
        assert.equals(transliteration('Біла Церква'), 'Bila Tserkva');
        assert.equals(transliteration('Стеценко'), 'Stetsenko');
    },

    'should work with Чч': function(){
        assert.equals(transliteration('Чернівці'), 'Chernivtsi');
        assert.equals(transliteration('Шевченко'), 'Shevchenko');
    },

    'should work with Шш': function(){
        assert.equals(transliteration('Шостка'), 'Shostka');
        assert.equals(transliteration('Кишеньки'), 'Kyshenky');
    },

    'should work with Щщ': function(){
        assert.equals(transliteration('Щербухи'), 'Shcherbukhy');
        assert.equals(transliteration('Гоща'), 'Goshcha');
        assert.equals(transliteration('Гаращенко'), 'Garashchenko');
    },

    'should work with Ыы': function(){
        assert.equals(transliteration('Ынха'), 'Ynkha');
        assert.equals(transliteration('Рыба'), 'Ryba');
    },

    'should work with Ээ': function(){
        assert.equals(transliteration('Эмульсия'), 'Emulsyia');
        assert.equals(transliteration('это'), 'eto');
    },

    'should work with Юю': function(){
        assert.equals(transliteration('Юрій'), 'Yurii');
        assert.equals(transliteration('Корюківка'), 'Koriukivka');
    },

    'should work with Яя': function(){
        assert.equals(transliteration('Яготин'), 'Yagotyn');
        assert.equals(transliteration('Ярошенко'), 'Yaroshenko');
        assert.equals(transliteration('Костянтин'), 'Kostiantyn');
        assert.equals(transliteration('Знам\'янка'), 'Znamianka');
        assert.equals(transliteration('Феодосія'), 'Feodosiia');
    },

    'should work with multiple zg': function() {
        assert.equals(transliteration('згaзг'), 'zghazgh');
    },

    'should work with dashes': function(){
        assert.equals(transliteration('Володимир-Волинський'), 'Volodymyr-Volynskyi');
    },

    'should work with underscores': function(){
        assert.equals(transliteration('Володимир_Волинський'), 'Volodymyr_Volynskyi');
    },

    'test empty and null string': function(){
        assert.equals(transliteration(''), '');
        assert.equals(transliteration(), '');
    }
});
