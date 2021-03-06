exports.AdjacentSelector = require('./nodes/AdjacentSelector');
exports.AttributeSelector = require('./nodes/AttributeSelector');
exports.Charset = require('./nodes/Charset');
exports.ClassSelector = require('./nodes/ClassSelector');
exports.CounterStyle = require('./nodes/CounterStyle');
exports.CustomIdent = require('./nodes/CustomIdent');
exports.Declaration = require('./nodes/Declaration');
exports.DescendantSelector = require('./nodes/DescendantSelector');
exports.Dimension = require('./nodes/Dimension');
exports.DirectDescendantSelector = require('./nodes/DirectDescendantSelector');
exports.ElementSelector = require('./nodes/ElementSelector');
exports.Expression = require('./nodes/Expression');
exports.FontFace = require('./nodes/FontFace');
exports.FontFeatureValues = require('./nodes/FontFeatureValues');
exports.FontFeatureValuesBlock = require('./nodes/FontFeatureValuesBlock');
exports.Func = require('./nodes/Func');
exports.HexColor = require('./nodes/HexColor');
exports.IDSelector = require('./nodes/IDSelector');
exports.IEFilter = require('./nodes/IEFilter');
exports.Import = require('./nodes/Import');
exports.Keyframe = require('./nodes/Keyframe');
exports.Keyframes = require('./nodes/Keyframes');
exports.KeyframeSelector = require('./nodes/KeyframeSelector');
exports.LinearFunction = require('./nodes/LinearFunction');
exports.MathProduct = require('./nodes/MathProduct');
exports.MathSum = require('./nodes/MathSum');
exports.Media = require('./nodes/Media');
exports.MediaExpression = require('./nodes/MediaExpression');
exports.MediaQuery = require('./nodes/MediaQuery');
exports.Namespace = require('./nodes/Namespace');
exports.NotSelector = require('./nodes/NotSelector');
exports.NthSelector = require('./nodes/NthSelector');
exports.Number = require('./nodes/Number');
exports.NValue = require('./nodes/NValue');
exports.Page = require('./nodes/Page');
exports.PageMargin = require('./nodes/PageMargin');
exports.PseudoClassSelector = require('./nodes/PseudoClassSelector');
exports.PseudoElementSelector = require('./nodes/PseudoElementSelector');
exports.PseudoSelectorFunction = require('./nodes/PseudoSelectorFunction');
exports.Ruleset = require('./nodes/Ruleset');
exports.SelectorList = require('./nodes/SelectorList');
exports.SiblingSelector = require('./nodes/SiblingSelector');
exports.SimpleSelector = require('./nodes/SimpleSelector');
exports.String = require('./nodes/String');
exports.Stylesheet = require('./nodes/Stylesheet');
exports.Supports = require('./nodes/Supports');
exports.SupportsConditionList = require('./nodes/SupportsConditionList');
exports.SupportsCondition = require('./nodes/SupportsCondition');
exports.URI = require('./nodes/URI');
exports.Viewport = require('./nodes/Viewport');


exports.createSelectorList = function createSelectorList(base, addon) {
    if (base instanceof exports.SelectorList) {
        base.push(addon);
        return base;
    } else {
        return new exports.SelectorList([base, addon]);
    }
};

exports.createSupportsConditionList = function createSupportsConditionList(addition, combinator, base) {
    if (base instanceof exports.SupportsConditionList && base.combinator === combinator) {
        base.unshift(addition);
        return base;
    } else {
        return new exports.SupportsConditionList(combinator, [addition, base]);
    }
};
