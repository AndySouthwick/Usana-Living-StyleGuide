export const formElementData = [{
  name: 'Hero',
  html: '\n' +
  ' <label> Label</label>\n' +
'   <input type="text" placeholder="placeholder">' +
  '\n',
  css: '\n' +
  'input {\n' +
  '  border-color: rgba(237, 237, 237, 1)!important;\n' +
  '  border-width: 1px;\n' +
  '  border-style: solid;\n' +
  '  border-image: initial;\n' +
  '  box-shadow: none;\n' +
  '  border-radius:3px;\n' +
'    height: 40px;\n' +
  '\n' +
  '}\n' +
  'input[placeholder]{\n' +
  '  padding-left: 5px;\n' +
  '  font-size: 14px;\n' +
  '  font-weight: 200;\n' +
  '\n' +
  '}\n' +
  'label{\n' +
  '  display: block;\n' +
  '  color: #333333;\n' +
  '  font-size: 14px;\n' +
  '  font-weight: 300;\n' +
  '\n' +
  '}\n',
  rules: '<h3>\n' +
  '  Rules for Inputs' +
  '</h3>\n' +
  ''
},
  {
  name: 'Hero',
  html: '\n' +
  '  <div class="select-input">\n' +
  '    <select class="form-input-style-border">\n' +
  '      <option selected> Select Box </option>\n' +
  '      <option>Option 1</option>\n' +
  '      <option>Option 2</option>\n' +
  '      <option>Last long option</option>\n' +
  '    </select>\n' +
  '  </div>',
  css: '.select-input{\n' +
  '  width: 50%;\n' +
  '  position: relative;\n' +
  '}\n' +
  '.select-input:after {\n' +
  '  content: \'\\f078\';\n' +
  '  font: 14px FontAwesome;\n' +
  '  color: #333;\n' +
  '  pointer-events: none;\n' +
  '  position: absolute;\n' +
  '  top:18px;\n' +
  '  right: 16px;\n' +
  '\n' +
  '}\n' +
  ' select {\n' +
  '   width: 100%;\n' +
  '  font-weight: 200;\n' +
  '  font-size: 14px;\n' +
  '  -webkit-appearance: none;\n' +
  '   -moz-appearance: none;\n' +
  '  /* Add some styling */\n' +
  '  height: 40px;\n' +
  '  margin: 5px 0;\n' +
  '  padding: 0 24px;\n' +
  '  line-height: 1.75;\n' +
  '  color: #333;\n' +
  '  background-color: #ffffff;\n' +
  '}\n',
  rules: '<h3>\n' +
  '  Rules for Select' +
  '</h3>\n' +
  ''
},
  {
    name: 'Form Example',
    html: '\n' +
    ' <div class="form">\n' +
    '  <div class="form-group">\n' +
    '    <div>\n' +
    '      <label>Email<sup>*</sup></label>\n' +
    '      <input type="text" placeholder="Enter" class="form-input-style-border">\n' +
    '    </div>\n' +
    '    <div>\n' +
    '      <label>Confirm Email<sup>*</sup></label>\n' +
    '      <input type="text" placeholder="Enter" class="form-input-style-border">\n' +
    '    </div>\n' +
    '\n' +
    '  </div>\n' +
    '  <div class="form-group">\n' +
    '    <div>\n' +
    '      <label>Primary Phone<sup>*</sup></label>\n' +
    '      <input type="text" placeholder="Enter" class="form-input-style-border">\n' +
    '    </div>\n' +
    '    <div>\n' +
    '      <label>Secondary Phone<sup>*</sup></label>\n' +
    '      <input type="text" placeholder="Enter" class="form-input-style-border">\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="form-group">\n' +
    '    <div>\n' +
    '      <label>Street Address 1<sup>*</sup></label>\n' +
    '      <input type="text" placeholder="Enter" class="form-input-style-border">\n' +
    '    </div>\n' +
    '    <div>\n' +
    '      <label>Street Address 2<sup>*</sup></label>\n' +
    '      <input type="text" placeholder="Enter" class="form-input-style-border">\n' +
    '    </div>\n' +
    '\n' +
    '  </div>\n' +
    '  <div class="form-group">\n' +
    '    <div> <label>City<sup>*</sup></label>\n' +
    '      <input type="text" placeholder="Enter" class="form-input-style-border">\n' +
    '    </div>\n' +
    '    <div>\n' +
    '      <label>State<sup>*</sup></label>\n' +
    '      <div class="select-input">\n' +
    '        <select class="form-input-style-border">\n' +
    '          <option selected> Select State </option>\n' +
    '          <option>Option 1</option>\n' +
    '          <option>Option 2</option>\n' +
    '          <option>Last long option</option>\n' +
    '        </select>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </div>\n' +
    '  <div class="form-group">\n' +
    '    <div>\n' +
    '      <label>Postal Code<sup>*</sup></label>\n' +
    '      <input type="text" placeholder="Enter" class="form-input-style-border">\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n',
    css: '' +
    '.form-input-style-border{\n' +
    '  border-color: rgba(237, 237, 237, 1)!important;\n' +
    '  border-width: 1px;\n' +
    '  border-style: solid;\n' +
    '  border-image: initial;\n' +
    '  box-shadow: none;\n' +
    '  border-radius:3px;\n' +
    '}\n' +
    '//css for input fields\n' +
    '.section-form-elements{\n' +
    '  display: flex;\n' +
    '}\n' +
    '.formInputs{\n' +
    '  width: 50%;\n' +
    '}\n' +
    'input {\n' +
    '  height: 40px;\n' +
    '  width: 100%;\n' +
    '  margin: 0 0 10px;\n' +
    '}\n' +
    'input[placeholder]{\n' +
    '  padding-left: 5px;\n' +
    '  font-size: 14px;\n' +
    '  font-weight: 200;\n' +
    '}\n' +
    'label{\n' +
    '  display: block;\n' +
    '  color: #333333;\n' +
    '  font-size: 14px;\n' +
    '  font-weight: 300;\n' +
    '}\n' +
    '.select-input{\n' +
    '  width: 50%;\n' +
    '  position: relative;\n' +
    '  margin-left: 0;\n' +
    '}\n' +
    '.select-input:after {\n' +
    '  content: \'\\f078\';\n' +
    '  font: 14px FontAwesome;\n' +
    '  color: #333;\n' +
    '  pointer-events: none;\n' +
    '  position: absolute;\n' +
    '  top:15px;\n' +
    '  right: 16px;\n' +
    '}\n' +
    ' select {\n' +
    '   width: 100%;\n' +
    '  font-weight: 200;\n' +
    '  font-size: 14px;\n' +
    '  -webkit-appearance: none;\n' +
    '   -moz-appearance: none;\n' +
    '  /* Add some styling */\n' +
    '  height: 40px;\n' +
    '   margin: 0 0 17px;\n' +
    '  padding: 0 10px;\n' +
    '  line-height: 1.75;\n' +
    '  color: #333;\n' +
    '  background-color: #ffffff;\n' +
    '}\n' +
    '\n' +
    '.form-group{\n' +
    '  display: flex;\n' +
    '  flex-direction: row;\n' +
    '}\n' +
    '.form-group div{\n' +
    '  width: 400px\n' +
    '}\n' +
    '.form-group div:last-child{\n' +
    '  margin-left: 60px;\n' +
    '}\n' +
    '.form-group:nth-child(4) div:last-child{\n' +
    '  margin-left: 30px;\n' +
    '}\n' +
    '.form-group:nth-child(4) div:last-child label{\n' +
    '  margin-left: 30px;\n' +
    '}\n' +
    '.form-group:last-child{\n' +
    '  width: 200px ;\n' +
    '}\n' +
    '.form-group:last-child div{\n' +
    '  margin-left: 0;\n' +
    '}\n',
    rules: '<h3>\n' +
    '  Rules for Form' +
    '</h3>\n' +
    ''
  }
]
