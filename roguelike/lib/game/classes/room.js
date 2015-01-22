ig.module('game.classes.room')
    .defines(function () {

        Room = ig.Class.extend({
            enemyCount: 0,
            objectCount: 0,
            northExit: null,
            westExit: null,
            southExit: null,
            eastExit: null,
            tileArray: null,
            wallTiles : [],
            groundTiles: [],
            height: 0,
            weidth: 0,
            init: function (tileArray) {
                this.tileArray = tileArray;
            },

            getEnemyCount: function () {
                return this.enemyCount;
            },
            getTileArray: function () {
                return this.tileArray;
            },
            getNorthExit: function () {
                return this.northExit;
            },
            getWestExit: function () {
                return this.westExit;
            },
            getSouthExit: function () {
                return this.southExit;
            },
            getEastExit: function () {
                return this.eastExit;
            }


        });
    });