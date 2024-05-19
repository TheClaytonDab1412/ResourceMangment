ActionList = function(){
    var self = {
        actions:[] //{id:"actionID",event:onclick}
    }
    self.UnlockAction = function(id,event) {
        for (i = 0; i < self.actions.length; i++) {
            if(self.actions[i].id === id){
               return;
            }
            self.actions.push({id:id,event:event});
            self.refreshRender();
        }
    };
    self.HasAction = function(id) {
        for (i = 0; i < self.actions.length; i++) {
            if(self.actions[i].id === id){
                return true
            }
            return false
        }
    };
    self.refreshRender = function(){
        var str = "";
        for (var i = 0; i < self.actions.length; i++){
            let action = action.List[self.actions[i].id];
            str += "<div class=action_slot><img src="+action.image_path+" "+"class=action_img>" + "<button onclick=" +action.event+ "class=action_text>" + action.name + " x" + self.actions[i].amount + "</button></div>";
        }
        document.getElementById("Action_Container").innerHTML = str;
    };

    return self;
}

action = function(id,name,image_path,event){
    var self ={
        id:id,
        name:name,
        image_path:image_path,
        event:event,
    }
    action.List[self.id] = self;
    return self;
}
action.List = {};

action("mine_iron_ore","Mine Iron Ore","images/iron_ore.png",function() {
    playerInventory.addItem("iron_ore",1)
})