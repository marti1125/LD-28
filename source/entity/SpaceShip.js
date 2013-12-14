/**
 * Created by Willy on 14/12/13.
 */
lychee.define('game.entity.SpaceShip').includes([
        'lychee.game.Sprite'
    ]).exports(function(lychee, game, global, attachments) {

        var _textures = {
            player: attachments['spaceship.png']
        };

        var Class = function(id) {

            var settings = {
                width:     121,
                height:    80,
                collision: lychee.game.Entity.COLLISION.A,
                shape:     lychee.game.Entity.SHAPE.rectangle,

                texture:   _textures[id] || null,
                map:       null
            };

            lychee.game.Sprite.call(this, settings);

            settings = null;

        };

        Class.prototype = {

        };

        return Class;

    });