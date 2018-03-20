export const heroData = [{
    name: 'Hero',
    html: '\n' +
    '  <div class="hero">\n' +
    '    <div class="hero-inner">\n' +
    '      <div class="hero-content container">\n' +
    '        <div class="hero-text" ></div>\n' +
    '        <div class="hero-link" >\n' +
    '          <a href="#" target="" class="btn btn-ghost"></a>\n' +
    '        </div>\n' +
    '        <ng-content></ng-content>\n' +
    '        <div class="more-below">\n' +
    '          <i class="fa fa-angle-down  fa-4x"></i>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n',
    css: '\n' +
    '@import \'~sass/variables\';\n' +
    '@import \'~sass/mixins\';\n' +

    ':host {\n' +
    '  display: block;\n' +
    '}\n' +
    ':host > div {\n' +
    '  position: relative;\n' +
    '}\n' +
    '.hero {\n' +
    '  background-position: center top;\n' +
    '  background-size: cover;\n' +
    '  display: flex;\n' +
    '  flex: 1 1 auto;\n' +
    '  height: 100vh;\n' +
    '  width: 100%;\n' +
    '}\n' +
    '.hero-inner {\n' +
    '  align-items: center;\n' +
    '  background-color: $tintedglass;\n' +
    '  display: flex;\n' +
    '  flex: 1 1 auto;\n' +
    '  margin: 0 auto;\n' +
    '  width: 100%;\n' +
    '}\n' +
    '.hero-content {\n' +
    '  align-items: center;\n' +
    '  display: flex;\n' +
    '  flex: 1 1 auto;\n' +
    '  flex-direction: column;\n' +
    '  margin: auto;\n' +
    '}\n' +
    '.hero-text {\n' +
    '  color: $white;\n' +
    '  margin: 0 5%;\n' +
    '  text-align: center;\n' +
    '  display: flex;\n' +
    '  flex-direction: column;\n' +
    '  align-items: center;\n' +
    '}\n' +
    '.hero-link {\n' +
    '  margin-top: 4rem;\n' +
    '  text-align: center;\n' +
    '}\n' +
    '@include media-breakpoint-up(md) {\n' +
    '  .hero-text {\n' +
    '    margin: 0 3.1em;\n' +
    '  }\n' +
    '}\n' +
    '.chevron::before {\n' +
    '\tborder-style: solid;\n' +
    '\tborder-width: 0.25em 0.25em 0 0;\n' +
    '\tcontent: \'\';\n' +
    '\tdisplay: inline-block;\n' +
    '\theight: 0.45em;\n' +
    '\tleft: 0.15em;\n' +
    '\tposition: relative;\n' +
    '\ttop: 0.15em;\n' +
    '\ttransform: rotate(-45deg);\n' +
    '\tvertical-align: top;\n' +
    '\twidth: 0.45em;\n' +
    '}\n' +
    '.chevron.bottom:before {\n' +
    '\ttop: 0;\n' +
    '\ttransform: rotate(135deg);\n' +
    '}\n',
    rules: '<h3>\n' +
          '  Rules for Static Hero\n' +
          '</h3>\n' +
          '<p>\n' +
          'Keep in mind while designing new campaign images that the text, subtext and CTA will have to line up the same as the image to the left\n' +
          '</p>' +
          '<p>Image Width is 1440px, Height is 1024px</p>\n' +
          '<h4>For Copy Writers and Designers</h4>\n' +
          '<p>\n' +
          'Please adhere to these standards for copy\n' +
          '                                     </p>\n' +
          '                                     <ul>\n' +
          '                                     <li>     Main Title Block: Font - Monteserrat lite font weight on everything but last word Semi Bold last word 50 pt' +
          '</li>\n' +
          '<li>      Sub Heading: Font - Monteserrat Regular 36 pt' +
          '</li>\n' +
          '<li>      Sub Heading Character Count: 22 ' +
          '</li>\n' +
          '</ul>'
    }]


