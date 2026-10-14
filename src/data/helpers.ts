/**
 * 构建图片生成 URL
 */
function img(prompt: string, size: string): string {
  return `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;
}

/** 风景摄影图片 */
export const landscapeImg = {
  mountainGolden: img("professional landscape photography, dramatic mountain peak at golden hour, misty valley below, warm sunlight, high detail DSLR, National Geographic style", "landscape_16_9"),
  lakeReflection: img("professional landscape photography, serene alpine lake with perfect mirror reflection, snow-capped mountains, clear sky, golden hour light", "landscape_4_3"),
  desertDunes: img("professional landscape photography, vast desert sand dunes at sunset, warm orange and red tones, flowing sand curves, minimal composition", "landscape_16_9"),
  forestWaterfall: img("professional landscape photography, lush green forest waterfall, long exposure silky water, misty atmosphere, sunlight through trees", "portrait_4_3"),
  coastalCliffs: img("professional landscape photography, dramatic coastal cliffs at dawn, crashing waves, soft pink sky, rocky shore", "landscape_16_9"),
  autumnForest: img("professional landscape photography, autumn forest path covered in golden leaves, morning fog, warm sunlight filtering through trees", "portrait_4_3"),
};

/** 人像摄影图片 */
export const portraitImg = {
  youngWoman: img("professional portrait photography, young Asian woman with soft natural window light, shallow depth of field, neutral background, cinematic mood", "portrait_4_3"),
  elderlyMan: img("professional portrait photography, elderly man with weathered face, dramatic side lighting, deep wrinkles, black background, character study", "portrait_4_3"),
  childPortrait: img("professional portrait photography, child silhouette by window, soft backlight, warm tones, candid moment, film aesthetic", "portrait_4_3"),
  streetMusician: img("professional portrait photography, street musician playing guitar, urban background bokeh, warm street lights, candid moment", "portrait_4_3"),
  dancerMotion: img("professional portrait photography, female dancer in motion, flowing fabric, studio lighting, dynamic pose, elegant", "portrait_4_3"),
};

/** 街拍摄影图片 */
export const streetImg = {
  tokyoNight: img("professional street photography, Tokyo neon street at night in rain, reflections on wet pavement, colorful neon signs, cyberpunk atmosphere", "landscape_16_9"),
  marketCrowd: img("professional street photography, bustling Asian night market crowd, motion blur, warm lantern lights, lively atmosphere", "landscape_4_3"),
  oldAlley: img("professional street photography, narrow old European cobblestone alley, stone walls, hanging vines, soft daylight", "portrait_4_3"),
  crosswalk: img("professional street photography, busy city crosswalk, pedestrians in motion, urban architecture background, black and white tone", "landscape_16_9"),
  rainWindow: img("professional street photography, view through rain-covered cafe window, blurred street scene outside, cozy interior, bokeh lights", "landscape_4_3"),
};

/** 建筑摄影图片 */
export const architectureImg = {
  skyscraper: img("professional architecture photography, modern glass skyscraper from low angle, blue sky reflection, geometric patterns, minimal composition", "portrait_4_3"),
  ancientTemple: img("professional architecture photography, ancient Asian temple detailed roof, intricate wood carvings, warm afternoon light", "landscape_4_3"),
  staircase: img("professional architecture photography, minimalist concrete spiral staircase, dramatic shadows, geometric composition, brutalist style", "portrait_4_3"),
  cathedralDome: img("professional architecture photography, grand cathedral interior dome, ornate ceiling frescoes, dramatic light from above", "landscape_16_9"),
  bridgeSymmetry: img("professional architecture photography, modern suspension bridge symmetrical composition, steel cables, foggy background, blue hour", "landscape_4_3"),
};

/** 黑白摄影图片 */
export const monochromeImg = {
  mistyMountain: img("fine art black and white photography, misty mountain landscape, layered peaks fading into fog, minimal, high contrast, Ansel Adams style", "landscape_16_9"),
  dramaticPortrait: img("fine art black and white portrait photography, dramatic shadow on face, Rembrandt lighting, intense expression, dark background", "portrait_4_3"),
  urbanGeometry: img("fine art black and white photography, urban architecture geometric shapes, strong shadows, minimal composition, high contrast", "landscape_4_3"),
  treeSilhouette: img("fine art black and white photography, solitary tree silhouette in fog, minimal landscape, ethereal mood, soft gradient sky", "landscape_16_9"),
  waterRipples: img("fine art black and white photography, abstract water ripples and reflections, smooth tones, minimal, zen aesthetic", "square"),
  nudeStudy: img("fine art black and white photography, human form study, dramatic lighting, elegant curves, sculptural quality, dark background", "portrait_4_3"),
};

/** 分类封面 */
export const categoryCovers = {
  landscape: landscapeImg.mountainGolden,
  portrait: portraitImg.youngWoman,
  street: streetImg.tokyoNight,
  architecture: architectureImg.skyscraper,
  monochrome: monochromeImg.mistyMountain,
};

/** 摄影师肖像 */
export const photographerPortrait = img("professional portrait photography, male photographer holding camera, artistic studio lighting, thoughtful expression, dark background, cinematic", "portrait_4_3");
