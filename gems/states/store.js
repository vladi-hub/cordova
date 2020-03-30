var Store = function(game) {};

Store.prototype = {

  menuConfig: {
    className: "inverse",
    startY: 260,
    startX: 30
  },


  init: function () {
    this.titleText = game.make.text(game.world.centerX, 100, "Game Title", {
      font: 'bold 60pt TheMinion',
      fill: '#FDFFB5',
      align: 'center'
    });
    this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    this.titleText.anchor.set(0.5);
    this.optionCount = 1;
  },
  create: function () {
   
    game.add.sprite(0, 0, 'store-bg');
    game.add.existing(this.titleText);
    this.addMenuOption('Purchase 10 Deactivators', function () {
		inAppPurchase.buy('com.yourapp.consumable_prod1').then(function (data) {
			// ...then mark it as consumed:
			return inAppPurchase.consume(data.productType, data.receipt, data.signature);
		}).then(function () {
			console.log('product was successfully consumed!');
			}).catch(function (err) {
				console.log(err);
			});
		});
    this.addMenuOption('Purchase 10 Pause', function () {
		inAppPurchase.buy('com.yourapp.consumable_prod2').then(function (data) {
			// ...then mark it as consumed:
			return inAppPurchase.consume(data.productType, data.receipt, data.signature);
		}).then(function () {
			console.log('product was successfully consumed!');
			}).catch(function (err) {
				console.log(err);
			});
		});
    
	this.addMenuOption('Purchase 1 President', function () {
		inAppPurchase.buy('com.yourapp.consumable_prod3').then(function (data) {
			// ...then mark it as consumed:
			return inAppPurchase.consume(data.productType, data.receipt, data.signature);
		}).then(function () {
			console.log('product was successfully consumed!');
			}).catch(function (err) {
				console.log(err);
			});
		});
    
    this.addMenuOption('<- Back', function () {
      game.state.start("GameMenu");
    });
  }
};

Phaser.Utils.mixinPrototype(Store.prototype, mixins);