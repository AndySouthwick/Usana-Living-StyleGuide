export const heroVideoData = [{
  name: 'Hero',
  html: '\n' +

  '<div class="overlay-bg"></div>\n' +
  '  <video autoplay muted loop id="myVideo">\n' +
  '    <source src="#" type="video/mp4">\n' +
  '    Your browser does not support HTML5 video.\n' +
  '  </video>\n' +
  '<div class="center-hero-text">\n' +
  '  <div class="hero-video-content">\n' +
  '    <div class="hero-text " [innerHTML]="data.text"></div>\n' +
  '    <div class="hero-link" *ngIf="data.linkText">\n' +
  '      <a href="#" target="" class="btn btn-ghost">link</a>\n' +
  '    </div>\n' +
  '    <div class="more-below ">\n' +
  '      <i class="fa fa-angle-down  fa-4x"></i>\n' +
  '    </div>\n' +
  '\n' +
  '  </div>\n' +
  ' </div>\n' +
  '\n',
  css: '\n' +
  '@import \'~sass/variables\';\n' +
  '@import \'~sass/mixins\';\n' +
  '\n' +
  'video {\n' +
  '  background-position: center;\n' +
  '  background-size: cover;\n' +
  '  display: flex;\n' +
  '  min-height: 100%;\n' +
  '  min-width: 100%;\n' +
  '  z-index: -1;\n' +
  '}\n' +
  '.overlay-bg{\n' +
  '  position: absolute;\n' +
  '  background-color: rgba(0, 0, 0, 0.2);\n' +
  '  top: 0;\n' +
  '  left: 0;\n' +
  '  width: 100%;\n' +
  '  height: 100%;\n' +
  '}\n' +
  '.center-hero-text{\n' +
  '  position: absolute;\n' +
  '  top: 0;\n' +
  '  left: 0;\n' +
  '  width: 100%;\n' +
  '  height: 100%;\n' +
  '\n' +
  '}\n' +
  '@include media-breakpoint-up(md) {\n' +
  '  .hero-text {\n' +
  '    margin: 0 3.1em;\n' +
  '    // margin: 20px 2.1em;\n' +
  '  }\n' +
  '\n' +
  '  .hero-video-content {\n' +
  '    display: flex;\n' +
  '    flex: 1 1 auto;\n' +
  '    flex-direction: column;\n' +
  '    justify-content: center;\n' +
  '    align-items: center;\n' +
  '    z-index: 5;\n' +
  '    height: 100%;\n' +
  '  }\n' +
  '\n' +
  '  .hero-text {\n' +
  '    color: $white;\n' +
  '    font-size: 24px;\n' +
  '    font-weight: 300;\n' +
  '    letter-spacing: -.5px;\n' +
  '    line-height: 1.35em;\n' +
  '    text-align: center;\n' +
  '    z-index: 5;\n' +
  '    max-width: 1440px;\n' +
  '  }\n' +
  '\n' +
  '  .hero-link {\n' +
  '    margin-top: 4rem;\n' +
  '    text-align: center;\n' +
  '  }\n' +
  '}\n' +
  '//account for ipad-pro\n' +
  '@media(max-width: 1150px){\n' +
  '.center-hero-text{\n' +
  '  width: 80%;\n' +
  '}\n' +
  '}\n',
  rules: ' <h3>\n' +
  '      Rules For Full Page Background Videos\n' +
  '    </h3>\n' +
  '    <p>\n' +
  '      Size: No bigger than 2MB\n' +
  '    </p>\n' +
  '    <p>\n' +
  '      Length: 10 Seconds Max\n' +
  '    </p>\n' +
  '    <p>\n' +
  '      Optimized For Web\n' +
  '    </p>\n' +
  '    <p>\n' +
  '      If placing hero banner at top please refer and use the same rules as <a routerLink="/angular-modules/hero">hero</a>\n' +
  '    </p>\n' +
  '    <p>\n' +
    '      Each video background must have a coresponding mobile static image. ' +
  '    </p>'
}]


