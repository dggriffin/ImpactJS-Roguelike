ig.module('game.constants.level-assets')
    .requires(
        'game.classes.room'
)
    .defines(function () {



        LevelAssets = ig.Class.extend({
            roomArray: [],
            yCorridors: [],
            xCorridors: [],
            init: function () {
                var room1 = new Room([
    [622, 617, 687, 664, 672, 672, 678],
    [675, 664, 664, 664, 664, 665, 675],
    [675, 664, 664, 664, 664, 665, 675],
    [664, 664, 665, 666, 664, 664, 664],
    [675, 664, 665, 665, 664, 664, 675],
    [675, 665, 664, 664, 664, 665, 686],
    [679, 672, 617, 664, 687, 617, 625]
   ]);

                room1.northExit = {
                    x: 3,
                    y: 0
                };
                room1.westExit = {
                    x: 0,
                    y: 3
                };
                room1.southExit = {
                    x: 3,
                    y: 6
                };
                room1.eastExit = {
                    x: 6,
                    y: 3
                };
                room1.groundTiles = [665, 664, 666];

                room1.height = 7;
                room1.width = 7;

                this.roomArray.push(room1);


                var room1 = new Room([
    [622, 617, 687, 672, 672, 672, 678],
    [675, 664, 664, 664, 664, 665, 675],
    [675, 664, 664, 664, 664, 665, 675],
    [675, 664, 665, 666, 664, 664, 675],
    [675, 664, 665, 665, 664, 664, 675],
    [675, 665, 664, 664, 664, 665, 686],
    [679, 672, 617, 664, 687, 617, 625]
   ]);

                room1.southExit = {
                    x: 3,
                    y: 6
                };
      
                room1.groundTiles = [665, 664, 666];

                room1.height = 7;
                room1.width = 7;

                this.roomArray.push(room1);

                var room1 = new Room([
    [622, 617, 687, 672, 672, 672, 678],
    [675, 664, 664, 664, 664, 665, 675],
    [675, 664, 664, 664, 664, 665, 675],
    [675, 664, 665, 666, 664, 664, 664],
    [675, 664, 665, 665, 664, 664, 675],
    [675, 665, 664, 664, 664, 665, 686],
    [679, 672, 617, 617, 687, 617, 625]
   ]);
            
                room1.eastExit = {
                    x: 6,
                    y: 3
                };
                room1.groundTiles = [665, 664, 666];

                room1.height = 7;
                room1.width = 7;

                this.roomArray.push(room1);


                var room1 = new Room([
    [622, 617, 687, 664, 672, 672, 678],
    [675, 664, 664, 664, 664, 665, 675],
    [675, 664, 664, 664, 664, 665, 675],
    [675, 664, 665, 666, 664, 664, 675],
    [675, 664, 665, 665, 664, 664, 675],
    [675, 665, 664, 664, 664, 665, 686],
    [679, 672, 617, 617, 687, 617, 625]
   ]);

                room1.northExit = {
                    x: 3,
                    y: 0
                };
      
                room1.groundTiles = [665, 664, 666];

                room1.height = 7;
                room1.width = 7;

                this.roomArray.push(room1);


                var room1 = new Room([
    [622, 617, 687, 672, 672, 672, 678],
    [675, 664, 664, 664, 664, 665, 675],
    [675, 664, 664, 664, 664, 665, 675],
    [664, 664, 665, 666, 664, 664, 675],
    [675, 664, 665, 665, 664, 664, 675],
    [675, 665, 664, 664, 664, 665, 686],
    [679, 672, 617, 617, 687, 617, 625]
   ]);

             
                room1.westExit = {
                    x: 0,
                    y: 3
                };      
                room1.groundTiles = [665, 664, 666];

                room1.height = 7;
                room1.width = 7;

                this.roomArray.push(room1);


                var corridor1 = new Room([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
                [662, 672, 617, 617, 632, 617, 608],
    [664, 665, 664, 664, 664, 664, 665],
    [608, 672, 672, 632, 617, 617, 606],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
   ]);

                corridor1.westExit = {
                    x: 0,
                    y: 3
                };

                corridor1.eastExit = {
                    x: 6,
                    y: 3
                };

                corridor1.groundTiles = [665, 664, 666];
                corridor1.height = 7;
                corridor1.width = 7;
                this.roomArray.push(corridor1);



                var corridor2 = new Room([
    [0, 0, 662, 664, 607, 0, 0],
    [0, 0, 686, 665, 620, 0, 0],
    [0, 0, 620, 664, 684, 0, 0],
    [0, 0, 620, 664, 686, 0, 0],
    [0, 0, 675, 665, 620, 0, 0],
    [0, 0, 620, 664, 675, 0, 0],
    [0, 0, 661, 664, 606, 0, 0]
   ]);

                corridor2.northExit = {
                    x: 3,
                    y: 0
                };

                corridor2.southExit = {
                    x: 3,
                    y: 6
                };


                corridor2.groundTiles = [665, 664, 666];
                corridor2.height = 7;
                corridor2.width = 7;
                this.roomArray.push(corridor2);



            },
            getRandomRoom: function () {
                var randomRoom = Math.round((Math.random() * (this.roomArray.length - 1)));
                return this.roomArray[randomRoom];
            },
            getRandomXCorridor: function () {
                var randomCorridor = Math.round((Math.random() * (this.roomArray.length - 1)));
                return this.xCorridors[randomCorridor];
            },
            getRandomYCorridor: function () {
                var randomCorridor = Math.round((Math.random() * (this.roomArray.length - 1)));
                return this.yCorridors[randomCorridor];
            }

        });






    });