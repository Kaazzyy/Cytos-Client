const app = new PIXI.Application({ view: document.getElementById('gameCanvas'), width: 800, height: 600 });
document.body.appendChild(app.view);

// Exemplo: adicionar uma skin
const texture = PIXI.Texture.from('url_da_skin.png');
const sprite = new PIXI.Sprite(texture);
sprite.x = 400;
sprite.y = 300;
sprite.anchor.set(0.5);
app.stage.addChild(sprite);
