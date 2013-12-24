XMLNode
=======

Simple XML creator for NodeJS

### Sample

````
        var XMLNode = require("xmlnode");
		var parent = new XMLNode("Parent");
		parent.setAttrs({
			"key1" : "value1",
			"key2" : "value2"
		});
		
		var child = new XMLNode("Child");
		var grandChild = new XMLNode("GrandChild");
		grandChild.setText("This is plain text");
		child.addNode(grandChild);
		parent.addNode(child);
		
		child = new XMLNode("Child");
		grandChild = new XMLNode("GrandChild");
		grandChild.setCData("This is text wrapped in CDATA");
		child.addNode(grandChild);
		parent.addNode(child);
		
		console.log(parent.getXml());
````

### Ouput

````
<Parent key1="value1" key2="value2">
    <Child>
        <GrandChild>This is plain text</GrandChild>
    </Child>
    <Child>
        <GrandChild>
            <![CDATA[ This is text wrapped in CDATA ]]>
        </GrandChild>
    </Child>
</Parent>
````
