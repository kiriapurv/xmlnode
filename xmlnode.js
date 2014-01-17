//Initialize XMLNode with its tag name
var XMLNode = function (tagName, content, attrs) {
    this.tagName = tagName;
    this.content = content;
    this.myNodes = [];
    this.attrs = attrs;
};

//Set XML Node's attributes as 
//``` { key1:value1, key2:value2 .. } ```
XMLNode.prototype.setAttrs = function (attrs) {
    this.attrs = attrs;
};

//Add child node
XMLNode.prototype.addNode = function (xmlNode) {
    this.myNodes[this.myNodes.length] = xmlNode;
};

//Returns XML String representation of current node + its child nodes
XMLNode.prototype.getXml = function () {
    if (this.content) {
        return "<" + this.tagName + ">" + this.content + "</" + this.tagName + ">";
    } else {
        var start = "<" + this.tagName + (this._getAttrs()) + ">";
        var cont = "";
        var node;
        for (node in this.myNodes) {
            cont += this.myNodes[node].getXml();
        }
        var end = "</" + this.tagName + ">";
        return start + cont + end;
    }
};

//Set plain text to current node
XMLNode.prototype.setText = function (content) {
    this.content = content;
};

//Set text wrapped by CDATA
XMLNode.prototype.setCData = function (content) {
    this.content = "<![CDATA[" + content + "]]>";
};

//Returns string representation of attributes as
// key1="value1" key2="value2" 
XMLNode.prototype._getAttrs = function () {
    var attrs = "";
    var attr;
    for (attr in this.attrs) {
        attrs += " " + attr + "=\"" + this.attrs[attr] + "\"";
    }
    return attrs;
};

module.exports = XMLNode;