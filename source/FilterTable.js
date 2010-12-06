/*
---
description: MooTools Plugin for filtering table rows.

authors:
  - Adrian Statescu (http://thinkphp.ro)

license:
  - MIT-style license

requires:
  core/1.3: '*'

provides:
  - [FilterTable]
...
*/

var FilterTable = new Class({

    /* Implements options */
    Implements: Options,

    /* Set options */
    options: {
       filterClass: 'filterable'
    },

    /* 
     * Constructor of class.
     * @public    
     */
    initialize: function(options){
          this.setOptions(options); 
          //get all the tables from document 
          var tables = document.getElements('table');
          //loop through each table
          tables.each(function(table,index){
               //if current table has attribute 'class' and if 
               //the value of class is options.filterClass 
               if (table.attributes['class'] && table.hasClass(this.options.filterClass)) {
                   //creates a new form with following attributes
                   var form = new Element('form',{'class': 'filter',id: 'form_'+ index});
                   //creates a new input with these attributes
	          	 var input = new Element('input',{'class': 'filter',id: 'filter_'+ index});
                       //added handler event keyup for this input; 
                       //when the input is keyup then the method 
                       //filterTable is triggered
                       input.addEvent('keyup', function(){
                             this.filterTable(input, table);
                   }.bind(this));
                   //append element input in form
                   form.appendChild(input);
                   //insert the form before table
	  	       table.parentNode.insertBefore(form, table);
	         }
          },this);
    },

    /* 
     * @param term (Element)
     * @param table (Element)
     * @public
     */
    filterTable: function(term, table) {
         //dehighlight terms
         this._dehighlight(table);
         //split by space the search terms
         var terms = term.value.toLowerCase().split(" ");
         //for each row of table execute
         for (var r = 1, m = table.rows.length; r < m; r++) {
              var display = '';
              //for each term do
              for (var i = 0, j = terms.length; i < j; i++) {
                  //strips all tags from row, then test if the 
                  //row contains or not the appropriate filter term.
                  if (table.rows[r].innerHTML.replace(/<[^>]+>/g, "").toLowerCase().indexOf(terms[i]) < 0) {
				display = 'none';
                  //otherwise , if the row contains the term then highlighted it.
			} else {
				if (terms[i].length) this._highlight(terms[i], table.rows[r]);
			}
                  //display the row
			table.rows[r].style.display = display;
              }
	   }
    },
    /* Highlight terms.
     * @param term (String)
     * @param container (Element)  
     * @private
     */
    _highlight: function(term, container) {
            //for each child execute
	      for(var i = 0, j = container.childNodes.length; i < j; i++) {
                var node = container.childNodes[i];
                if (node.nodeType == 3) {
			// Text node
			var data = node.data;
			var data_low = data.toLowerCase();
			if (data_low.indexOf(term) >= 0) {
				//term found!
				var new_node = document.createElement('span');

				node.parentNode.replaceChild(new_node, node);

				var result;
				while ((result = data_low.indexOf(term)) != -1) {
					new_node.appendChild(document.createTextNode(
								data.substr(0, result)));
					new_node.appendChild(this._createNode(
								document.createTextNode(data.substr(
										result, term.length))));
					data = data.substr(result + term.length);
					data_low = data_low.substr(result + term.length);
				}
				new_node.appendChild(document.createTextNode(data));
			}
		   } else {
			// Keep going onto other elements
			this._highlight(term, node);
		   }
	     }//endfor
   }.protect(),

    /* Dehightlight terms.
     * @param container (Element)
     * @private
     */
   _dehighlight: function(container) {
	for (var i = 0, j = container.childNodes.length; i < j ; i++) {
		var node = container.childNodes[i];
		if (node.attributes && node.attributes['class'] && node.hasClass('highlighted')) {
			node.parentNode.parentNode.replaceChild(
					document.createTextNode(
						node.parentNode.innerHTML.replace(/<[^>]+>/g, "")),
					node.parentNode);
			// Stop here and process next parent
			return;
		} else if (node.nodeType != 3) {
			// Keep going onto other elements
			this._dehighlight(node);
		}
    }
  },
  /* wrapper span for child
   * @param  child (Element)
   * @private
   */
  _createNode: function(child) {
      var node = new Element('span',{'class': 'highlighted'});
          node.appendChild(child);           
    return node;
  }.protect()
});


