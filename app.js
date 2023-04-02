function allowDrop(ev) {
    ev.preventDefault();
}
        
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
       
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
          
    var placeholder = document.createElement("li");
    placeholder.className = "placeholder";
          
    var target = ev.target;
          
    if (target.tagName !== "LI") {
        target = target.parentNode.insertBefore(placeholder, target.nextSibling);
        target = target.previousSibling;
        target.style.display = "none";
            setTimeout(function() {target.style.display = "block";},0);
            target.addEventListener("dragend", function() {this.parentNode.removeChild(this);});
            target.addEventListener("dragover", function(e) {
                e.preventDefault();
                this.parentNode.insertBefore(placeholder, e.target.nextSibling);
            });
            target.addEventListener("drop", function(e) {
                e.preventDefault();
                if (this.childNodes.length === 0) {
                    var nodeCopy = document.getElementById(data).cloneNode(true);
                    nodeCopy.id = "newId";
                    this.appendChild(nodeCopy);
                }
                this.parentNode.removeChild(placeholder);
            });
    
        return false;
    
    } else {
        if (target.childNodes.length === 0) {
            target.parentNode.insertBefore(placeholder, target.nextSibling);
            target.style.display = "none";
            setTimeout(function() {target.style.display = "block";},0);
            placeholder.addEventListener("dragend", function() {this.parentNode.removeChild(this);});
            placeholder.addEventListener("dragover", function(e) {
                e.preventDefault();
                this.parentNode.insertBefore(placeholder, e.target.nextSibling);
            });
            placeholder.addEventListener("drop", function(e) {
                e.preventDefault();
                if (this.childNodes.length === 0) {
                    var nodeCopy = document.getElementById(data).cloneNode(true);
                    nodeCopy.id = "newId";
                    this.appendChild(nodeCopy);
                }
                this.parentNode.removeChild(placeholder);
            });

            return false;

        }
    }
}


		function allowDrop(ev) {
			ev.preventDefault();
		}

		function drag(ev) {
			ev.dataTransfer.setData("text", ev.target.id);
		}

		function drop(ev) {
			ev.preventDefault();
			var data = ev.dataTransfer.getData("text");
			ev.target.appendChild(document.getElementById(data));
		}
