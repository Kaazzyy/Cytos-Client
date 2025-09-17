const app = new PIXI.Application({ 
	view: document.getElementById('gameCanvas'), 
	width: 800, 
	height: 600 
});

// Exemplo: adicionar uma skin
const texture = PIXI.Texture.from('https://i.imgur.com/4AiXzf8.jpeg'); // Use uma URL válida
const sprite = new PIXI.Sprite(texture);
sprite.x = 400;
sprite.y = 300;
sprite.anchor.set(0.5);
app.stage.addChild(sprite);
