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
}
]
