    function Tab(node){
        this.node = node
        this.divPath()
        this.tabEvent()
    }

    Tab.prototype = {   
        divPath : function() {
            this.tabHeaderli = this.node.querySelectorAll('.tab-header >li')
            this.tabContentli = this.node.querySelectorAll('.tab-container >li')
        },

        tabEvent : function() {
            var _this = this;
                this.tabHeaderli.forEach(function(li){
                li.onclick = function(e) {
                    var target = e.target,
                        index = [].indexOf.call(_this.tabHeaderli,target)
                    _this.tabHeaderli.forEach(function(li){
                        li.classList.remove('active')
                    })
                    _this.tabContentli.forEach(function (contentli) {
                        contentli.classList.remove('active')
                    })
                    target.classList.add('active')
                    _this.tabContentli[index].classList.add('active')
                }
            })
        }
    }   
        
    var tab = new Tab(document.querySelectorAll('.tab')[0])
    var tab = new Tab(document.querySelectorAll('.tab')[1])