Inventory = function() {
    var self = {
        items:[] //{id:"itemID",amount:1}
    }

    self.addItem = function(id,amount){
        for (i = 0; i < self.items.length; i++){
            if(self.items[i].id === id){
                self.items[i].amount += amount;
                self.refreshRender();
                return;
            }
        }
        self.items.push({id:id,amount:amount});
        self.refreshRender();
    }

    self.removeItem = function(id,amount){
        for (i = 0; i < self.items.length; i++){
            if(self.items[i].id === id){
                self.items[i].amount -= amount;
                self.refreshRender();
                return;
            }
        }
    }
    self.hasItem = function(id,amount){
        for (i = 0; i < self.items.length; i++){
            if(self.items[i].id === id){
                return self.items[i].amount >= amount;
            }
        }
        return false;
    }
    self.refreshRender = function(){
        var str = "";
        for (var i = 0; i < self.items.length; i++){
            let item = Item.List[self.items[i].id];
            str += "<div class=item_slot><img src="+item.image_path+" "+"class=item_img>" + "<p class=item_text>" + item.name + " x" + self.items[i].amount + "</p></div> <br>";
        }
        document.getElementById("Inventory_Container").innerHTML = str;
    }

    return self;
}

Item = function(id,name,image_path,event){
    var self ={
        id:id,
        name:name,
        image_path:image_path,
        event:event,
    }
    Item.List[self.id] = self;
    return self;
}
Item.List = {};

Item("iron_ore","Iron Ore","images/iron_ore.png")
Item("iron_bar","Iron Bar","images/iron_bar.png")