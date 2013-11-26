//////////////////////////////////////////////////////////////////////////////////
//		move block							//
//////////////////////////////////////////////////////////////////////////////////
Blockly.Blocks['draw_move'] = {
	init: function() {
		this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
		this.setColour(160);
		this.appendValueInput('DISTANCE')
			.setCheck('Number')
			.appendTitle('move');
		this.setInputsInline(true);
		this.setTooltip('amount of distance to go forward. negative accepted.');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
	}
};
Blockly.JavaScript['draw_move'] = function(block) {
	var argument0 = Blockly.JavaScript.valueToCode(block, 'DISTANCE',
				Blockly.JavaScript.ORDER_FUNCTION_CALL) || '0';
	return 'Turtle.move(' + argument0 + ');\n';
};

//////////////////////////////////////////////////////////////////////////////////
//		say block							//
//////////////////////////////////////////////////////////////////////////////////
Blockly.Blocks['draw_say'] = {
	init: function() {
		this.setColour(160);
		this.appendValueInput('value')
			.setCheck('String')
			.appendTitle('say');
		this.setTooltip('The string to say.');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
	}
};
Blockly.JavaScript['draw_say'] = function(block) {
	var argument0 = Blockly.JavaScript.valueToCode(block, 'value',
				Blockly.JavaScript.ORDER_FUNCTION_CALL) || '0';
	return 'Turtle.say(' + argument0 + ');\n';
};

//////////////////////////////////////////////////////////////////////////////////
//		nickname block							//
//////////////////////////////////////////////////////////////////////////////////
Blockly.Blocks['draw_nickname'] = {
	init: function() {
		this.setColour(160);
		this.appendValueInput('value')
			.setCheck('String')
			.appendTitle('nickname');
		this.setTooltip('The string to nickname.');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
	}
};
Blockly.JavaScript['draw_nickname'] = function(block) {
	var argument0 = Blockly.JavaScript.valueToCode(block, 'value',
				Blockly.JavaScript.ORDER_FUNCTION_CALL) || '0';
	return 'Turtle.nickname(' + argument0 + ');\n';
};


//////////////////////////////////////////////////////////////////////////////////
//		rotate block							//
//////////////////////////////////////////////////////////////////////////////////


Blockly.Blocks['draw_turn'] = {
	init: function() {
		this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
		this.setColour(160);
		this.appendValueInput('ANGLE')
			.setCheck('Number')
			.appendTitle('turn');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip('amount to turn. negative accepted.');
	}
};
Blockly.JavaScript['draw_turn'] = function(block) {
	// String length.
	var argument0 = Blockly.JavaScript.valueToCode(block, 'ANGLE',
				Blockly.JavaScript.ORDER_FUNCTION_CALL) || '0';
	return 'Turtle.turn(' + argument0 + '/180*Math.PI);\n'
};

//////////////////////////////////////////////////////////////////////////////////
//		skin block							//
//////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['draw_skin'] = {
	init: function() {
		var items = [
			['3djesus','3djesus'],
			['iron-man', 'iron-man'],
			['joker', 'joker'],
			['mario', 'mario'],
			['sonicthehedgehog', 'sonicthehedgehog'],
			['spiderman', 'spiderman'],
			['superman', 'superman'],
			['agentsmith', 'agentsmith'],
			['batman', 'batman'],
			['char', 'char'],
			['god', 'god'],
			['jetienne', 'jetienne'],
			['martialartist', 'martialartist'],
			['robocop', 'robocop'],
			['theflash', 'theflash'],
			['woody', 'woody'],
		];
		this.setColour(210);
		this.appendDummyInput()
			.appendTitle('skin')
			.appendTitle(new Blockly.FieldDropdown(items), 'VALUE');
		this.setTooltip('Set the skin of your character');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
  }
};
Blockly.JavaScript['draw_skin'] = function(block) {
	// String length.
	// block.getTitleValue('BOOL')
	var argument0 = block.getTitleValue('VALUE')
	return 'Turtle.skin(\'' + argument0 + '\');\n'
};

//////////////////////////////////////////////////////////////////////////////////
//		skin block							//
//////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['draw_skymap'] = {
	init: function() {
		var BOOLEANS = [
			['mars', 'mars'],
			['skybox', 'skybox'],
		];
		this.setColour(210);
		this.appendDummyInput()
			.appendTitle('skymap')
			.appendTitle(new Blockly.FieldDropdown(BOOLEANS), 'VALUE');
		this.setTooltip('Set the skymap of your arena');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
  }
};
Blockly.JavaScript['draw_skymap'] = function(block) {
	var argument0 = block.getTitleValue('VALUE')
	return 'Turtle.skymap(\'' + argument0 + '\');\n'
};
