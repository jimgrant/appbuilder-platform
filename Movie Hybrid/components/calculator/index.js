'use strict';

app.calculator = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_calculator
// END_CUSTOM_CODE_calculator
(function(parent) {
    var calculatorModel = kendo.observable({
        fields: {
            shadeStyle: '',
            edgeAllowance: '',
            vertical: '',
            horizontal: '',
            optional: '',
            required: '',
            unitswitch: '',
            widthOfFabric: '',
            quantity: '',
            length: '',
            width: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('calculatorModel', calculatorModel);
})(app.calculator);

// START_CUSTOM_CODE_calculatorModel
// END_CUSTOM_CODE_calculatorModel