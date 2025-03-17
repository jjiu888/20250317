function setup() { //初始設定函數，只會執行一次
  //createCanvas(400, 400);
  //產生一個寬高為視窗的畫布
  createCanvas(windowWidth, windowHeight);
  // 設定畫布背景顏色為透明
  background(0, 0, 0, 0);
}

let colors = [];
let offsets = [];

function draw() {
  // 設定畫布背景顏色為透明
  clear();
  
  // 初始化顏色和偏移量陣列
  if (colors.length === 0) {
    for (let j = 0; j < 100; j++) {
      colors.push(color(random(255), random(255), random(255), 255)); // 提高透明度
      offsets.push(random(TWO_PI)); // 隨機偏移量
    }
  }
  
  // 繪製多條海草
  for (let j = 0; j < 100; j++) {
    // 設定線條顏色和粗細
    stroke(colors[j]); // 每條線條顏色不同但固定
    strokeWeight(10); // 將線條加粗
    
    let baseX = windowWidth / 2 + j * 20 - 1000;
    let baseY = windowHeight;
    let segmentLength = 5;
    let numSegments = 10; // 恢復線條長度
    
    for (let i = 0; i < numSegments; i++) {
      let x = baseX + sin(frameCount * 0.02 + i * 0.3 + offsets[j]) * 10; // 調慢擺動速度
      let y = baseY - i * segmentLength;
      line(baseX, baseY, x, y); // 繪製整條線條
      baseX = x;
      baseY = y;
    }
  }
}
